if [[ -z "${S3_BUCKET_NAME}" ]]; then
  MY_SCRIPT_VARIABLE="Some default value because DEPLOY_ENV is undefined"
else
  MY_SCRIPT_VARIABLE="${S3_BUCKET_NAME}"
fi

echo "'${S3_BUCKET_NAME:-default_value}' '${S3_BUCKET_NAME-default_value}' ${MY_SCRIPT_VARIABLE}"

aws s3 cp --recursive --acl public-read ./build MY_SCRIPT_VARIABLE
