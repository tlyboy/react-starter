import antfu from '@antfu/eslint-config'

export default antfu(
  {
    react: true,
    unocss: true,
    formatters: true,
  },
  {
    rules: {
      'react/no-unknown-property': 'off',
    },
  },
)
