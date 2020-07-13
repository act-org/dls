

aws s3 cp ./storybook-static/ s3://dls.act-et.org/ --recursive 
# aws s3 cp ./static/app/out/404 s3://mawi.et-act.org/404 --recursive --profile prod
# aws s3 cp ./static/app/out/static s3://mawi.et-act.org/static --recursive --profile prod
# aws s3 cp ./static/app/out/404.html s3://mawi.et-act.org/404.html --profile prod
# aws s3 cp ./static/app/out/index.html s3://mawi.et-act.org/index.html --profile prod

# aws s3 cp ./static/error.html s3://mawi.et-act.org/error.html --profile prod
# aws s3 cp ./static/403.html s3://mawi.et-act.org/403.html --profile prod
# aws s3 cp ./static/mawi/index.html s3://mawi.et-act.org/mawi/index.html --profile prod

aws cloudfront create-invalidation --distribution-id E2NN0YTIKS2WIL --paths "/*" 