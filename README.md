# Eagle Markdown 图片复制器

一个简单实用的 Eagle 插件，可以将选中的图片URL复制为Markdown格式到剪贴板。

## 项目配合

本插件主要配合 [eagleNest](https://github.com/cobox-pro/eagleNest) 项目使用，eagleNest 提供了 Eagle 图片资源的 HTTP 服务器访问能力。

## 功能特点

- 🖼️ 支持复制单张或多张选中图片
- 📋 自动生成Markdown格式：`![图片名称](图片URL)`
- ⚡ 一键复制到剪贴板
- 🎨 美观的用户界面
- 📱 响应式设计

## 使用方法

### 方法一：通过按钮复制
1. 在 Eagle 中选择一张或多张图片
2. 打开插件
3. 点击"复制选中图片为 Markdown"按钮
4. Markdown格式的图片链接已复制到剪贴板

### 方法二：直接运行复制
1. 在 Eagle 中选择一张或多张图片
2. 运行插件（插件会自动执行复制功能）
3. Markdown格式的图片链接已复制到剪贴板

## 输出格式

### 单张图片
```markdown
![图片名称](http://localhost:8181/eagle/item_id.png)
```

### 多张图片
```markdown
![图片1](http://localhost:8181/eagle/item_id_1.png)
![图片2](http://localhost:8181/eagle/item_id_2.png)
![图片3](http://localhost:8181/eagle/item_id_3.png)
```

## 服务器配置

插件使用 [eagleNest](https://github.com/cobox-pro/eagleNest) 项目提供的本地服务器来访问图片：

### 前置要求
1. **安装并运行 eagleNest 服务器**
   ```bash
   # 克隆 eagleNest 项目
   git clone https://github.com/cobox-pro/eagleNest.git
   
   # 按照 eagleNest 项目说明启动服务器
   # 确保服务器运行在 localhost:8181 端口
   ```

2. **URL 格式配置**
   - **服务器地址**: `http://localhost:8181`
   - **图片路径**: `/eagle/{图片ID}.png`
   - **完整格式**: `http://localhost:8181/eagle/{图片ID}.png`

> **重要**: 本插件需要配合 eagleNest 项目使用。请先安装并启动 eagleNest 服务器，确保能够通过 HTTP 访问 Eagle 图片资源。

## 安装方法

1. 下载插件文件
2. 在 Eagle 中打开 `插件` > `开发者` > `安装本地插件`
3. 选择插件文件夹
4. 插件安装完成

## 技术实现

- 使用 Eagle Plugin API 获取选中图片信息
- 通过 `eagle.item.getSelected()` 获取选中项目
- 使用 `eagle.clipboard.writeText()` 复制到剪贴板
- 配合 [eagleNest](https://github.com/cobox-pro/eagleNest) 项目生成HTTP访问URL
- 使用图片ID生成服务器URL格式：`http://localhost:8181/eagle/{id}.png`

## 版本信息

- 版本：1.0.0
- 兼容性：Eagle 4.0+
- 平台：全平台支持

## 开发者

如需修改或扩展功能，主要文件说明：

- `manifest.json` - 插件配置文件
- `index.html` - 插件界面
- `js/plugin.js` - 核心功能实现
- `logo.png` - 插件图标

## 许可证

MIT License
