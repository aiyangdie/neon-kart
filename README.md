# 霓虹卡丁车 / NEON KART

开源俯视角霓虹竞速小游戏。支持 **网页即玩** 与 **Windows 桌面安装包**。

[![License: MIT](https://img.shields.io/badge/License-MIT-cyan.svg)](LICENSE)
[![Release](https://img.shields.io/github/v/release/aiyangdie/neon-kart?color=ff3d8b)](https://github.com/aiyangdie/neon-kart/releases)
[![Play Online](https://img.shields.io/badge/Play-Online-25e6ff)](https://aiyangdie.github.io/neon-kart/)

## 立即游玩 / 下载

| 版本 | 获取方式 |
|------|----------|
| **在线网页版（GitHub Pages）** | **[点击即玩 →](https://aiyangdie.github.io/neon-kart/)** |
| **网页版源码** | 仓库内 [`web/index.html`](web/index.html) / [`docs/index.html`](docs/index.html)，或 [Releases](https://github.com/aiyangdie/neon-kart/releases) 下载 `NEON-KART-web-*.zip` |
| **Windows 安装版** | [Releases](https://github.com/aiyangdie/neon-kart/releases) → `NEON-KART-*-Setup.exe` |
| **Windows 便携版** | [Releases](https://github.com/aiyangdie/neon-kart/releases) → `NEON-KART-*-Portable.exe` |

> 未做代码签名时，Windows 可能提示 SmartScreen：选「更多信息」→「仍要运行」。

## 玩法

六名车手 · 漂移蓄力 · 氮气冲刺 · 道具乱斗 · 三圈竞速

| 操作 | 默认键 |
|------|--------|
| 油门 / 刹车 | W / S |
| 转向 | A / D |
| 漂移 | Space |
| 氮气 | Shift |
| 道具 | Q |
| 暂停 | Esc |
| 全屏（桌面版） | F11 |

## 仓库结构

```
docs/                GitHub Pages 在线版（与网页同源）
web/                 网页版源码
desktop/             Electron 桌面版源码
  electron/          主进程
  game/              游戏页面与本地字体
  build/             图标
```

## 本地开发

### 网页版

用浏览器直接打开 `web/index.html` 或 `docs/index.html` 即可。

### 桌面版

```bash
cd desktop
npm install
npm start              # 开发运行
npm run dist:win       # 打 Windows 安装包 + 便携包
npm run dist:mac       # 打 macOS dmg（需在 Mac 上）
```

国内网络建议使用 npmmirror（`desktop/.npmrc` 已配置）。

## 合作开发

- 维护者：**[@aiyangdie](https://github.com/aiyangdie)** · **[@aiyangjan](https://github.com/aiyangjan)**
- 欢迎 Issue / Pull Request
- 提交前请勿把密钥、Personal Access Token、本机绝对路径写进仓库

## License

MIT — 详见 [LICENSE](LICENSE)