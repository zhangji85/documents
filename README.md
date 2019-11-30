## 介绍
这是个vuepress 搭建的文档

## 如何使用
```bash
# 1.首先拷贝该项目
git clone xxx 

# 2. 安装依赖
yarn add # 或者 npm install

# 3. 本地运行查看（在运行前需要进行相关配置）
yarn docs:dev # 或者 npm run docs:dev

# 4. 推送到GitHub 的 gh 分支
yarn deploy # 或者 npm deploy
```

## 配置
在使用该项目前需要进行配置
因为本地尚未推送Valine 的 appId 和 appKey, 
所有需要在 config 目录下新建 secretKeyConf.js 文件并暴露相关内容
 
