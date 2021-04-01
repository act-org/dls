aws s3 cp ./storybook-static/ s3://dls.act-et.org/ --recursive

aws cloudfront create-invalidation --distribution-id E2NN0YTIKS2WIL --paths "/*"
