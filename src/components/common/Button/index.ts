import IconButton from './components/IconButtonApp.vue'
import ButtonApp from './components/ButtonApp.vue'

import { withProperties } from '@/shared/utils/import'
import { withInstall } from '@/shared/utils'

export const Button = withProperties(withInstall(ButtonApp), {
  Icon: withInstall(IconButton)
})
