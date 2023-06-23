<template>
  <component :is="icon" class="svg-icon fill-current" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

import { getSvgNameFromPath } from '@/shared/utils'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#333'
  },
  size: {
    type: String,
    default: '32px'
  }
})

const icon = getSvgNameFromPath(props.name)

const fontSize = reactive({ default: props.size, small: '20px', large: '48px' })
</script>

<style scoped>
.svg-icon {
  width: v-bind('fontSize.default');
  height: v-bind('fontSize.default');
  fill: v-bind(color);
  vertical-align: middle;
  color: v-bind(color);
}
</style>
