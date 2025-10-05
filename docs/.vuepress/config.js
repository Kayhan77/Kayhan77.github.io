import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  // If this will be a PROFILE site (username.github.io), DO NOT set base
  // If this will be a PROJECT site (username.github.io/repo/), set base: '/repo/' below

  title: 'My Portfolio',
  description: 'Welcome to my VuePress portfolio',
  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects.md' },
      { text: 'Contact', link: '/contact.md' },
    ],
  }),
  bundler: viteBundler(),
})
