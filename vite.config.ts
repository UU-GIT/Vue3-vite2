import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import vitePluginImp from 'vite-plugin-imp';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginImp({
      libList: [
        // vant 按需引入
        {
          libName: 'vant',
          style(name) {
            if (/CompWithoutStyleFile/i.test(name)) {
              return false;
            }
            return `vant/es/${name}/style/index.js`;
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  base: './',
  server: {
    port: 3000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
  },
});
