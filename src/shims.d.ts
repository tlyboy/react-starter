import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyAttributes {
    'btn'?: boolean
    'icon-btn'?: boolean
  }
}
