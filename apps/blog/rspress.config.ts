import { defineConfig } from '@rspress/core';
import path from 'node:path';

export default defineConfig({
  // 站点基本信息
  title: 'Codex Blog',
  description: '基于 Rspress 构建的技术博客',
  icon: '/logo.svg',
  logo: '/logo.svg',
  logoText: 'Codex Blog',

  // 根目录配置
  root: path.join(__dirname, 'src'),

  // 路由配置
  route: {
    cleanUrls: true,
  },

  // Markdown 配置
  markdown: {
    showLineNumbers: true,
    defaultWrapCode: false,
  },

  // 主题配置
  themeConfig: {
    // 社交链接
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com',
      },
    ],

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
    },

    // 上次更新时间
    lastUpdated: true,

    // 编辑链接
    editLink: {
      docRepoBaseUrl: 'https://github.com/your-repo/codex/tree/main/apps/blog/src',
    },

    // 搜索配置
    search: true,
  },

  // 构建配置
  builderConfig: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
        '@components': path.join(__dirname, 'src/components'),
      },
    },
    tools: {
      rspack: {
        // 忽略 flexsearch 的 import.meta.dirname 警告
        ignoreWarnings: [/import\.meta\.dirname/],
      },
    },
  },
});
