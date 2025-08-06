# BergaRust 翻译插件 (Pot-App)

[![Build Status](https://github.com/Mars-Sea/pot-app-translate-plugin-bergarust/actions/workflows/build.yml/badge.svg)](https://github.com/Mars-Sea/pot-app-translate-plugin-bergarust/actions)

## 1. 简介

BergaRust 翻译插件是为 [Pot](https://github.com/pot-app/pot-desktop) 开发的一款高效翻译工具，它通过调用 [BergaRust 翻译服务](https://github.com/Aalivexy/translation-service) 为用户提供快速、稳定且可私有化部署的翻译体验。

---

## 2. 功能特点

- **数据安全**：支持本地化部署翻译服务器，确保数据隐私。
- **高效稳定**：提供快速、可靠的翻译结果。
- **配置灵活**：支持自定义 API 地址和 Token，满足个性化需求。

---

## 3. 安装与配置

### 安装步骤

1.  **下载插件**：
    - 前往本项目的 [**Releases**](https://github.com/Mars-Sea/pot-app-translate-plugin-bergarust/releases) 页面或 [**Actions**](https://github.com/Mars-Sea/pot-app-translate-plugin-bergarust/actions) 页面，下载最新版本的 `plugin.com.pot-app.bergarust.potext` 文件。

2.  **安装到 Pot**：
    - 打开 Pot 应用，进入 `设置` > `插件市场` > `翻译`。
    - 点击右上角的 **“安装外部插件”** 按钮。
    - 选择刚刚下载的 `.potext` 文件进行安装。

### 配置方法

1.  安装成功后，在插件列表中找到 **BergaRust 翻译服务**。
2.  点击插件卡片右下角的设置按钮，填入您的 API 地址和（可选的）API 密钥。
3.  保存后，启用该插件即可开始使用。

---

## 4. 常见问题 (FAQ)

**Q1: 插件无法连接到服务器？**

- **A:** 请按以下步骤排查：
  - 确认填写的 API 地址是否正确，且 BergaRust 服务正在运行。
  - 如果服务启用了 Token 验证，请确保填写的 API 密钥无误。
  - 检查网络连接或防火墙设置。

**Q2: 翻译结果不准确？**

- **A:** BergaRust 专注于翻译速度和私有化部署，其翻译质量可能与大型商业翻译引擎存在差异，这属于正常现象。

---

## 5. 贡献

如果您在使用过程中遇到任何问题或有改进建议，欢迎通过提交 [**Issue**](https://github.com/Mars-Sea/pot-app-translate-plugin-bergarust/issues) 与我们交流。

## 6. 致谢

- **[BergaRust](https://github.com/Aalivexy/translation-service)**：提供了核心的翻译服务。
- **[Pot](https://github.com/pot-app/pot-desktop)**：提供了强大的插件化翻译平台。
