# 霓虹卡丁车 NEON KART · 桌面版

俯视角霓虹竞速游戏的 Windows / macOS 可安装桌面版。基于原版 HTML5 游戏，用 Electron 包装。

## 玩家：安装游玩（Windows）

安装包在（因本机 C 盘空间不足，构建产物放在 D 盘）：

| 类型 | 路径 |
|------|------|
| **安装版** | `D:\neon-kart-desktop\dist\霓虹卡丁车-1.0.0-Setup.exe` |
| **便携版** | `D:\neon-kart-desktop\dist\霓虹卡丁车-1.0.0-Portable.exe` |

- 安装版：双击 Setup → 可选安装目录 → 桌面快捷方式启动  
- 便携版：双击 Portable.exe 即可玩，无需安装  

若 SmartScreen 提示未知应用：选「更多信息」→「仍要运行」（未代码签名时的正常现象）。

### macOS

在 Mac 上进入工程目录执行 `npm run dist:mac`，生成 `.dmg`。  
未签名时可能需：系统设置 → 隐私与安全性 → 仍要打开。

## 操作

| 操作 | 默认键 |
|------|--------|
| 油门 / 刹车 | W / S |
| 转向 | A / D |
| 漂移 | Space |
| 氮气 | Shift |
| 道具 | Q |
| 暂停 | Esc |
| 全屏 | F11（设置 → 桌面 也可切换） |

## 开发者

### 重要路径说明

本机 **C 盘空间紧张**，完整可运行工程（含 `node_modules` 与 `dist`）在：

```
D:\neon-kart-desktop
```

工作区 `kart-game\neon-kart-desktop\` 保留源码副本；可用根目录 `启动游戏.bat` 启动 D 盘工程。

### 环境

- Node.js 20+  
- 建议使用国内镜像（Electron 较大）：

```bash
set ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/
set ELECTRON_BUILDER_BINARIES_MIRROR=https://npmmirror.com/mirrors/electron-builder-binaries/
npm install --registry=https://registry.npmmirror.com
```

### 命令

```bash
cd D:\neon-kart-desktop
npm start          # 开发运行
npm run dist:win   # Windows 安装包 + 便携包 → dist/
npm run dist:mac   # macOS dmg（仅在 Mac 上）
```

### 目录

```
electron/     主进程与 preload（窗口、全屏、退出确认）
game/         游戏页面 + 本地 Orbitron 字体
build/        应用图标 (png / ico)
dist/         打包产物
```

### 桌面适配要点

- 字体：Orbitron 本地化；中文用系统字体（雅黑 / 苹方）  
- 设置页增加「桌面」：全屏开关、版本号  
- 比赛中关闭窗口会二次确认  
- 安全：`contextIsolation` + 无 `nodeIntegration`

原版网页仍保留：`kart-game\霓虹卡丁车.html`（未覆盖）。

## 版本

`1.0.0`
