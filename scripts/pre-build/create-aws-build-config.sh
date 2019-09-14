PROJECT_HOME=$(pwd)
AWS_EXPORTS_JS=$PROJECT_HOME/src/aws-exports.js
AWS_BUILD_CONFIG_JS=$PROJECT_HOME/src/aws-build-config.js

if test -f "$AWS_EXPORTS_JS"; then
  cp $AWS_EXPORTS_JS $AWS_BUILD_CONFIG_JS
  exit
fi

cat > $AWS_BUILD_CONFIG_JS <<- EOM
export default const awsmobile = {
    "aws_project_region": "$AWS_PROJECT_REGION",
    "aws_cognito_identity_pool_id": "$AWS_COGNITO_IDENTITY_POOL_ID",
    "aws_cognito_region": "$AWS_COGNITO_REGION",
    "aws_user_pools_id": "$AWS_USER_POOLS_ID",
    "aws_user_pools_web_client_id": "$AWS_USER_POOLS_WEB_CLIENT_ID",
    "oauth": {}
};
EOM
