# MTranServer 翻译插件 (Pot-App)

## 1. 简介

MTranServer 翻译插件是基于 Pot 插件框架开发的一款高效翻译工具，采用 [MTranServer](https://github.com/xxnuo/MTranServer) 作为翻译引擎，为用户提供快速、稳定的翻译服务。

## 2. 功能特点

- 支持本地化部署翻译服务器，保障数据安全
- 提供灵活的 API 和 Token 配置，满足个性化需求

## 3. 安装指南

1. 下载最新版本的插件安装包
   - 从 [actions](https://github.com/Mars-Sea/pot-app-translate-plugin-mtranserver/actions) 下载最新版本的插件包
   - 解压插件包

2. 在 Pot 应用中：
   - 打开翻译服务
   - 选择"添加外部插件"
   - 点击"安装外部插件"
   - 选择已下载的插件包进行安装

## 4. 配置说明

1. 进入插件设置界面，填写 API 地址和 Token 信息，并保存配置
2. ~~在翻译设置中，请将源语言设置为服务器支持的语言（注意：目前 auto 模式可能会导致错误，我们正在修复此问题~~）。已修复

## 5. 常见问题解答

### 1. 插件无法连接到服务器

- 请确认 API 地址是否正确
- 检查 MTranServer 服务是否正常运行
- 如果启用了 Token 验证，请确保 Token 配置正确

### 2. 翻译结果不准确

MTranServer 专注于翻译速度和私有化部署，在保证高效运行的同时，其翻译质量可能略低于大型语言模型。

## 6. 致谢

特别感谢以下开源项目：
- [MTranServer](https://github.com/xxnuo/MTranServer) 提供的优质翻译服务
- [bob-plugin-MTranServer](https://github.com/gray0128/bob-plugin-MTranServer) 提供的宝贵参考

## 7. 贡献指南

我们欢迎您的参与！如果您在使用过程中遇到问题或有任何建议，请通过 GitHub 提交 Issue 与我们分享。
