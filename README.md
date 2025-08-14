# BergaRust 翻译插件 for Pot

[![构建状态](https://github.com/Mars-Sea/pot-app-translate-plugin-bergarust/actions/workflows/build.yml/badge.svg)](https://github.com/Mars-Sea/pot-app-translate-plugin-bergarust/actions)

一款为 [Pot](https://github.com/pot-app/pot-desktop) 设计的高效翻译插件，通过连接 [BergaRust 翻译服务](https://github.com/Aalivexy/translation-service)，为您提供快速、安全且可私有化部署的翻译解决方案。

---

## ✨ 功能特性

- **🚀 高效稳定**: 提供快速、可靠的翻译结果，优化您的工作流程。
- **🔒 数据安全**: 支持本地化部署翻译服务，所有翻译数据由您掌控，确保隐私安全。
- **🔧 配置灵活**: 支持自定义 BergaRust 服务的 API 地址和 Token，轻松适应不同部署环境。
- **💡 智能排错**: 内置清晰的错误提示机制，帮助您快速定位并解决连接或配置问题。

---

## 📚 使用指南

### 1. 安装插件

1.  访问本项目的 [**Releases**](https://github.com/Mars-Sea/pot-app-translate-plugin-bergarust/releases) 页面。
2.  下载最新版本的 `plugin.com.pot-app.bergarust.potext` 文件。
3.  打开 Pot 应用，进入 `设置` > `插件市场` > `翻译`。
4.  点击右上角的 **“安装外部插件”**，并选择已下载的 `.potext` 文件。

### 2. 配置插件

1.  安装成功后，在插件列表中找到 **“BergaRust翻译服务”**。
2.  点击卡片右下角的**设置图标**，进入配置页面。
3.  **API 地址**: 填入您的 BergaRust 服务地址 (例如 `http://127.0.0.1:3000`)。
4.  **API 密钥**: 如果您的服务设置了 Token 认证，请在此处填入。
5.  保存设置，并**启用插件**即可开始使用。

---

## ❓ 常见问题 (FAQ)

**Q1: 插件提示“健康检查失败”或“无法连接”？**

这通常意味着 Pot 无法与您的 BergaRust 服务建立连接。请尝试以下步骤排查：
- **检查服务状态**: 确保您的 BergaRust 服务正在运行。
- **核对 API 地址**: 确认您在 Pot 中填写的 API 地址完全正确，包括协议 (`http://`) 和端口。
- **网络问题**: 检查您的防火墙或代理设置，确保 Pot 可以访问到服务地址。
- **访问 `/health` 接口**: 尝试在浏览器中直接访问 `您的API地址/health`，应返回 `{"status":"ok"}`。

**Q2: 插件提示“API密钥无效或缺失”？**

- 如果您的 BergaRust 服务配置了 `AUTH_TOKEN`，请确保已在插件设置中正确填写了对应的 API 密钥。

**Q3: 翻译质量不符合预期？**

- BergaRust 项目的核心优势在于速度和私有化部署。其翻译质量与大型商业翻译引擎可能存在差异，属于正常现象。

---

## 🤝 参与贡献

如果您有任何改进建议或发现 Bug，欢迎通过提交 [**Issue**](https://github.com/Mars-Sea/pot-app-translate-plugin-bergarust/issues) 的方式进行反馈。

## 🙏 致谢

- **[BergaRust](https://github.com/Aalivexy/translation-service)**: 提供了强大的核心翻译引擎。
- **[Pot](https://github.com/pot-app/pot-desktop)**: 提供了功能丰富且易于扩展的翻译平台。