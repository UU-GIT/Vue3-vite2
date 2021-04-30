module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 0, // 是否禁止使用require来引入模块
    '@typescript-eslint/no-explicit-any': 0, // 是否禁止使用any
    '@typescript-eslint/no-use-before-define': 0, // 是否禁止先使用后定义
    '@typescript-eslint/no-this-alias': 0,
    'eol-last': 0, // 是否强制文件末尾只有一行
    'no-case-declarations': 0,
    'no-mixed-operators': 0,
    'no-callback-literal': 0,
    'no-mixed-spaces-and-tabs': 0, // 是否禁止使用 空格 和 tab 混合缩进
    'object-curly-newline': 0, //  需要大括号内的换行符
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'vue/no-v-for-template-key': 0,

    indent: [0, 'tab'],
    'linebreak-style': [0, 'windows'], // 限制换行符为 LF 或 CRLF
    quotes: [1, 'single'],
    semi: [1, 'always'],
    // 驼峰命名,
    camelcase: [0, {
      allow: ['^\\$'],
    }],
    'prefer-spread': 0,
    'no-undef': [0], // 禁止使用未定义的变量
    'no-tabs': [0, { allowIndentationTabs: true }], // 允许使用tab
    'no-alert': [1], // 禁止使用alert confirm prompt
    'no-control-regex': 2, // 禁止在正则表达式中使用控制字符
    'no-else-return': [1], // 如果if语句里面有return,后面不能跟else语句
    'no-empty': 1, // 块语句中的内容不能为空
    'no-empty-character-class': 2, // 正则表达式中的[]内容不能为空
    'no-eval': 1, // 禁止使用eval
    'no-ex-assign': 2, // 禁止给catch语句中的异常参数赋值
    'no-extra-boolean-cast': 1, // 禁止不必要的bool转换
    'no-fallthrough': 1, // 禁止switch穿透
    'no-floating-decimal': 2, // 禁止省略浮点数中的0 .5 3.
    'no-throw-literal': [1], // 禁止抛出字面量错误 throw "error";
    'no-with': 2, // 禁用with
    'no-unreachable': 2, // 不能有无法执行的代码
    'no-dupe-args': 2, // 函数参数不能重复
    'no-extra-bind': 2, // 禁止不必要的函数绑定
    'no-duplicate-case': 2, // 禁止出现重复的 case 标签
    'no-redeclare': 2, // 禁止重复声明变量
    'no-labels': 2, // 禁止使用label
    'no-extra-semi': 2, // 禁止多余的冒号
    'no-iterator': 2, // 禁止使用__iterator__ 属性
    'no-multi-str': 2, // 字符串不能用\换行
    'no-new-wrappers': 2, // 禁止使用new创建包装实例，new String new Boolean new Number
    'no-octal-escape': 2, // 禁止使用八进制转义序列
    eqeqeq: [1, 'allow-null'],
    strict: 2, // 使用严格模式
    yoda: [2, 'never'], // 禁用尤达表达式
    'no-shadow': [0], // 禁止局部变量 和 外部变量重名
    'no-unused-vars': [2, {
      args: 'none', // 参数不检查
      vars: 'local',
    }], // 禁止声明未使用的变量
    'max-len': ['error', { code: 300 }], // 一行代码超过300字符报错
    'vue/comment-directive': 0,

    // 程序员的底线
    complexity: [2, 15], // 复杂度 不超过 15 (1)
    'max-params': [2, 7], // 函数最多只能有7个参数 (3)
    'max-depth': [2, 3], // 函数嵌套层次不超过3层 (4)
    'no-continue': [2], // 禁止使用 continue 语句 (9)
    'no-ternary': [1], // 禁止使用三元表达式 (11)
    'no-magic-numbers': [0, {
      ignoreArrayIndexes: true,
      detectObjects: false,
      ignore: [-1, 0, 1, 10, 1000],
    }], // 禁止使用魔法数字
    'no-cond-assign': [2], // 禁止在if语句中使用运算表达式( 禁止在条件语句中赋值 )(12)
    // vue 文件
    'vue/no-unused-components': [0],
    'vue/require-valid-default-prop': [0],
    'space-before-function-paren': [0],
  },
};
