

terraform {
  required_version = ">= 0.12.4"
}

terraform {
  backend "s3" {
    bucket = "actet-tf-state"
    key    = "react-design/terraform.tfstate"
    region = "us-east-1"
  }
}

module "provider" {
  source = "git::ssh://git@bitbucket.org/actet/tf-modules.git//provider"
}

provider "aws" {
  alias   = "dns"
  region  = "us-east-1"
  version = "~> 2.37"
}

provider "aws" {
  region  = "us-east-1"
  version = "~> 2.37"
  assume_role {
    role_arn = module.provider.workspace_iam_role
  }
}
provider "archive" {}


resource "aws_s3_bucket" "static_website" {
  bucket = var.domain_name

  website {
    index_document = "index.html"
    error_document = "404.html"
  }

  tags = "${merge(map("Name", "${var.domain_name}-static_website"), var.tags)}"
}

data "aws_iam_policy_document" "static_website_read_with_secret" {
  statement {
    sid       = "1"
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.static_website.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = ["*"]
    }

    # condition {
    #   test = "StringEquals"
    #   variable = "aws:UserAgent"
    #   values = ["${var.secret}"]
    # }
  }
}

resource "aws_s3_bucket_policy" "static_website_read_with_secret" {
  bucket = "${aws_s3_bucket.static_website.id}"
  policy = "${data.aws_iam_policy_document.static_website_read_with_secret.json}"
}

resource "aws_cloudfront_distribution" "cdn" {
  origin {
    domain_name = "${aws_s3_bucket.static_website.website_endpoint}"
    # origin_path = "/"
    origin_id = var.public_dir

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1.2", "TLSv1.1", "TLSv1"]
    }

    # custom_header {
    #   name  = "User-Agent"
    #   value = "${var.secret}"
    # }
  }


  comment             = "CDN for ${var.domain_name} S3 Bucket"
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  aliases             = ["${var.domain_name}"]

  custom_error_response {
    error_code         = 403
    response_page_path = "/403.html"
    response_code      = 403
  }

  custom_error_response {
    error_code         = 404
    response_page_path = "/404.html"
    response_code      = 404
  }

  default_cache_behavior {
    target_origin_id = var.public_dir
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]

    forwarded_values {
      query_string = false

      cookies {
        forward = "all"
      }
    }

    viewer_protocol_policy = "redirect-to-https"

  }




  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        = ["US"]
    }
  }

  viewer_certificate {
    acm_certificate_arn      = "${var.cert_arn}"
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.1_2016"
  }

  tags = "${merge(map("Name", "${var.domain_name}-cdn"), var.tags)}"
}

resource "aws_route53_record" "alias" {
  count = "${length(var.zone_id) > 0 ? 1 : 0}"

  zone_id = "${var.zone_id}"
  name    = "${var.domain_name}"
  type    = "A"

  alias {
    name                   = "${aws_cloudfront_distribution.cdn.domain_name}"
    zone_id                = "${aws_cloudfront_distribution.cdn.hosted_zone_id}"
    evaluate_target_health = false
  }
}

