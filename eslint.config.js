import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  {
    name: 'app/ignores',
    ignores: ['dist/**', 'node_modules/**', 'public/**']
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    name: 'app/files',
    files: ['**/*.{js,mjs,cjs,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
]
