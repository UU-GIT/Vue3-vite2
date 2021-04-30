// 用 vite 创建项目，配置 postcss 需要使用 postcss.config.js，之前使用的 .postcssrc.js 已经被抛弃
module.exports = {
    plugins: {
        autoprefixer: {}, // 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
        'postcss-px-to-viewport': {
            viewportWidth: 375, // 兼容移动端，使用vw
        },
    },
};