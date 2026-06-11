# 豆芽包 AI Portfolio / Personal Portfolio Site

一个面向 GitHub 展示、求职投递和个人品牌表达的作品集网站项目。当前版本是一个基于 `React + Vite + GSAP` 的双语单页站，重点展示项目策展、履历表达、仓库归档和更有记忆点的视觉风格。

This repository contains a portfolio website built for GitHub presentation, job applications, and personal brand positioning. The current version is a bilingual single-page site built with `React + Vite + GSAP`, focused on project curation, resume-friendly presentation, repository archiving, and a more distinctive visual style.

---

## 中文说明

### 项目简介

这是我独立维护的个人作品集站点，用来承接以下目标：

- 更清晰地展示个人定位：`全栈开发 / AI 应用 / 产品表达`
- 用更完整的页面结构整理公开项目，而不是简单堆仓库链接
- 把 `精选作品 + 全部仓库 + 简历摘要 + 联系方式` 放进一个统一出口
- 用更有辨识度的视觉语言，避免作品集看起来像模板页

当前代码库对应的是一个已经可运行、可部署、可继续迭代的前端作品集原型，而不是后续更大规模的 Next.js 重构版本。

### 当前版本定位

当前版本是一个 `Vite + React` 单页作品集站，已经具备：

- 中英文内容切换
- 粘性导航与当前分区高亮
- 页面滚动进度条
- 首页 Hero 信息区
- 关于、精选项目、仓库归档、简历摘要、联系区
- GSAP 驱动的首屏和滚动 reveal 动画
- 响应式布局
- `prefers-reduced-motion` 降级支持

这个版本更偏“作品整理与表达”，重点是把已有项目包装成一个更完整的展示入口。

### 设计目标

这个站点不是为了做成通用 SaaS 模板，而是强调以下几个方向：

- 手写纸感、留白、笔记式版面
- 更像一本整理好的作品手册，而不是普通技术博客
- 让浏览者既能快速抓到代表作，也能看到完整仓库轨迹
- 让项目展示不仅可点开，还具备讲述能力

### 页面结构

当前页面主要包含这些部分：

1. `Hero`
   - 个人名字、定位、引导入口、精选与仓库数量提示
2. `About`
   - 关于交付感、表达力、系统感的三块说明
3. `Featured Work`
   - 精选项目卡片与抽象封面展示
4. `Full Archive`
   - 公开仓库完整归档
5. `Resume Snapshot`
   - 目标岗位、定位、核心技术摘要
6. `Contact`
   - 邮箱与 GitHub 联系方式

### 当前功能

- `中英文切换`
  - 站内内容支持中文和英文两套文案
- `滚动导航高亮`
  - 当前分区会在导航中自动高亮
- `滚动进度条`
  - 页面顶部显示浏览进度
- `GSAP reveal 动画`
  - 首页和内容分区具有更柔和的进入动效
- `项目封面系统`
  - 使用抽象黑白灰封面而非完全依赖截图
- `完整仓库归档`
  - 除精选项目外，也保留完整 GitHub 公开仓库轨迹
- `响应式布局`
  - 支持桌面与移动端浏览

### 技术栈

- `React 18`
- `Vite 5`
- `GSAP`
- 原生 `IntersectionObserver`
- 原生 `CSS` 自定义视觉系统

### 视觉与交互亮点

- 使用非典型作品集风格，而不是标准科技落地页
- 页面整体更像“整理过的笔记册 / 作品手稿”
- 通过抽象封面和统一卡片结构控制气质一致性
- 利用轻量动画提升阅读节奏，而不是做重型炫技特效

### 本地运行

安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm run dev
```

构建生产版本：

```bash
npm run build
```

本地预览构建结果：

```bash
npm run preview
```

### 构建与部署

当前版本是标准 Vite 静态前端项目，可以部署到任何静态托管平台，例如：

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

如果部署到 Vercel，直接导入仓库即可，默认构建命令和输出目录都可以沿用 Vite 标准设置。

### 仓库说明

当前仓库更适合作为：

- 作品集站前端原型
- GitHub 个人展示入口
- 后续升级到更完整 AI Portfolio 版本前的基础表达载体

它不负责承载所有未来规划，而是忠实记录当前这一版的设计方向和代码实现。

### 后续规划

下一阶段可能会继续演进到：

- 更完整的项目详情页系统
- 更强的 AI / Workflow / 产品化叙事
- 更系统的内容结构
- 更正式的部署与 SEO 策略
- 可能迁移到 `Next.js + TypeScript + TailwindCSS`

但这些属于下一阶段规划，不属于本仓库当前已完成状态。

---

## English

### Overview

This is my independently maintained portfolio site, built to serve several goals:

- communicate my positioning more clearly: `full-stack development / AI application / product-oriented presentation`
- organize public projects into a stronger presentation layer instead of just listing repositories
- combine `featured work + full repository archive + resume snapshot + contact entry` in one destination
- give the portfolio a more recognizable visual identity instead of looking like a generic template

The current repository reflects a working and deployable frontend portfolio prototype, not the future larger-scale Next.js redesign.

### Current Status

The current version is a `Vite + React` single-page portfolio site with:

- bilingual content switching
- sticky navigation with active-section highlighting
- page scroll progress
- a structured hero section
- dedicated sections for about, featured work, archive, resume snapshot, and contact
- GSAP-driven hero and reveal motion
- responsive layout
- reduced-motion fallback support

This version focuses more on `curation and presentation` than on the larger future product direction.

### Design Goals

This site is intentionally not a generic SaaS-style landing page. It is designed around:

- handwritten / paper-like atmosphere
- editorial spacing and notebook-style composition
- a clearer bridge between featured projects and full repository history
- portfolio storytelling, not just clickable project cards

### Site Structure

The current site contains these main sections:

1. `Hero`
   - name, positioning, entry points, and project/archive counts
2. `About`
   - delivery, clarity, and systems-oriented thinking
3. `Featured Work`
   - selected projects with abstract covers
4. `Full Archive`
   - a broader list of public repositories
5. `Resume Snapshot`
   - target roles, positioning, and core stack summary
6. `Contact`
   - email and GitHub access points

### Current Features

- `Bilingual content`
  - Chinese and English copies are both supported
- `Active navigation`
  - the current section is highlighted automatically
- `Scroll progress bar`
  - progress indicator at the top of the page
- `GSAP reveal motion`
  - softer entrance animations for hero and content sections
- `Abstract cover system`
  - featured projects use curated monochrome covers rather than relying only on screenshots
- `Full repository archive`
  - the site shows both selected work and a broader public GitHub trail
- `Responsive layout`
  - designed for desktop and mobile viewing

### Tech Stack

- `React 18`
- `Vite 5`
- `GSAP`
- native `IntersectionObserver`
- custom `CSS` styling system

### Visual and Motion Highlights

- avoids a generic startup-landing-page look
- reads more like a curated notebook or portfolio booklet
- uses a consistent abstract cover system to keep the page visually coherent
- relies on lightweight motion to improve pacing instead of heavy visual effects

### Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Build and Deployment

This is a standard Vite static frontend project and can be deployed to any static hosting platform, such as:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

If deployed to Vercel, the repository can be imported directly and the default Vite build settings are sufficient.

### Repository Notes

This repository is best understood as:

- a frontend portfolio prototype
- a GitHub-facing personal presentation entry point
- a foundation for a later, more ambitious AI portfolio direction

It should not be read as a repository that already contains every future planned feature. It represents the current real version of the site.

### Roadmap

Possible future evolution includes:

- richer project detail pages
- stronger AI / workflow / product-oriented storytelling
- a more structured content model
- more formal deployment and SEO strategy
- a possible migration to `Next.js + TypeScript + TailwindCSS`

Those belong to the next stage, not to the current completed state of this repository.
