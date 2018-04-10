// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // "semi": [2, "always"], //强制语句分号结尾
    "space-before-function-paren": 'off', // 函数定义时括号前的空格
    'arrow-parens': 0, // 允许箭头函数
    'generator-star-spacing': 0, // 允许es6 function*之间有空格
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off' // 允许
  }
}
