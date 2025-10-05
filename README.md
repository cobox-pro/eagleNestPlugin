# Eagle Markdown 图片复制器

一个简单实用的 Eagle 插件，可以将选中的图片URL复制为Markdown格式到剪贴板。

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
![图片名称](file:///path/to/image.jpg)
```

### 多张图片
```markdown
![图片1](file:///path/to/image1.jpg)
![图片2](file:///path/to/image2.jpg)
![图片3](file:///path/to/image3.jpg)
```

## 安装方法

1. 下载插件文件
2. 在 Eagle 中打开 `插件` > `开发者` > `安装本地插件`
3. 选择插件文件夹
4. 插件安装完成

## 技术实现

- 使用 Eagle Plugin API 获取选中图片信息
- 通过 `eagle.item.getSelected()` 获取选中项目
- 使用 `eagle.clipboard.writeText()` 复制到剪贴板
- 支持 `fileURL` 和 `url` 两种图片链接格式

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
