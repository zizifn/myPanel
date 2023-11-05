# Issue

## local D1

https://developers.cloudflare.com/d1/learning/local-development/#develop-locally-with-pages

### 注意创建 wrangler.toml， 确保名字都是对的

npx wrangler d1 execute TEST_D1 --local --file=./schema.sql

### 然后就可以按照正常的管理文件和 migrations。参考 D1-POC 项目

## start up issue

### Not symbolizing stack traces because $LLVM_SYMBOLIZER is not set

    kill $(lsof -t -i:8788)
