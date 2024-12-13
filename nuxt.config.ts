// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from 'fs-extra'
import path from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  components: [
    {
      path: '~/components',
    },
  ],

  css: ['assets/style.css'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [{ name: 'description', content: 'Nuxt 3 for beginners' }],
      link: [{ rel: 'icon', href: '/icon.png' }],
    },
  },

  // modules: ['@nuxtjs/tailwindcss'],
  routeRules: {
    '/posts/**': { ssr: false },
  },
  hooks: {
    // Nuxt ビルド後に実行されるフック
    'nitro:build:public-assets': async (context) => {
      const source = path.resolve('prisma/dev.db') // 元のSQLiteファイルのパス
      const destination = path.resolve('.output/prisma/dev.db') // コピー先パス

      try {
        // ディレクトリが存在しない場合は作成
        await fs.ensureDir(path.dirname(destination))
        // SQLiteファイルをコピー
        await fs.copy(source, destination)
        console.log(`SQLite database copied to ${destination}`)
      } catch (error) {
        console.error('Error copying SQLite database:', error)
      }
    }
  }
})
