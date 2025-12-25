# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 常用命令

```bash
pnpm dev      # 启动开发服务器
pnpm build    # TypeScript 类型检查 + Vite 构建
pnpm preview  # 预览生产构建
```

## 技术栈

- **React 19** + TypeScript
- **Vite** (使用 rolldown-vite) + React Compiler (babel-plugin-react-compiler)
- **Tailwind CSS v4** (通过 @tailwindcss/vite 插件)
- **图标**: @egoist/tailwindcss-icons + @iconify-json/carbon

## 架构

项目使用简洁的分层结构：

- `src/main.tsx` - 应用入口
- `src/App.tsx` - 根组件，使用 Default 布局
- `src/layouts/` - 布局组件，Default 布局包含 ThemeProvider
- `src/components/` - 可复用组件
  - `theme-provider.tsx` - 主题上下文，提供 `useTheme` hook
  - `mode-toggle.tsx` - 深色模式切换，带 View Transition 动画

## 路径别名

`@/*` 映射到 `./src/*`，在 tsconfig.json 和 vite.config.ts 中配置。

## 样式约定

- Tailwind CSS v4 使用 `@import 'tailwindcss'` 语法
- 深色模式使用 class 策略 (`.dark` 类)
- 预定义组件类: `.btn`, `.icon-btn`
- 图标使用 `i-carbon-*` 类名 (如 `i-carbon-sun`, `i-carbon-moon`)
