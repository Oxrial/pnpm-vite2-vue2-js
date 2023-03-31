import { defineConfig, loadEnv } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2' // 使用Vue2版本
import vueJsx from "@vitejs/plugin-vue-jsx";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import ScriptSetup  from 'unplugin-vue2-script-setup/vite'
import optimizer from 'vite-plugin-optimizer'
import path from 'path'
import setting from './src/settings.js'
import { createRequire } from 'module';
const require = createRequire(import.meta.url)

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), '') // 根据服务环境获取环境变量
  return {
    base: setting.viteBasePath, //设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
    clearScreen: false,
    //server 开发时相关配置
    server: {
      //设置 server.hmr.overlay 为 false 可以禁用开发服务器错误的屏蔽
      hmr: { overlay: false }, 
      //开发时启动的端口
      port: 8888, 
      //在服务器启动时自动在浏览器中打开应用程序
      open: false,
      //true, 启用并允许任何源
      cors: true ,
      https: false, //启用https
      //代理跨域配置
      // proxy: {
      //   [env.VITE_PROXY_BASE_URL]: {
      //     target: env.VITE_PROXY_URL,
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(new RegExp(`^${env.VITE_PROXY_BASE_URL}`), '')
      //   }
      // }
    },
    plugins: [
      createVuePlugin(), 
      vueJsx({}),
      ScriptSetup({  reactivityTransform: true}),
      createSvgIconsPlugin({
        // 配置路径在你的src里的svg存放文件
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons/svg")],
        symbolId: "icon-[dir]-[name]",
      }),
      optimizer({
        fs: () => ({
          find: /^(node:)?fs$/,
          code: `const fs = require('fs'); export { fs as default }`
        })
      })
    ],
     //构建相关
     build: {
      //消除触发警告的 chunk, 默认500k
      chunkSizeWarningLimit: 10000, 
      //资源文件目录  
      assetsDir: 'static/assets',
      //打包文件拆分
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
      }
    },
    resolve: {
      alias: [
        {
          find: "@",
          replacement: "/src",
        }
      ],
      extensions: [".js", ".vue", ".json", ".scss", "*"]
    }
  }
})
