<script setup lang="ts">
import { markRaw, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import LayoutDefault from '@/layouts/LayoutDefault.vue'

const layout = ref()
const route = useRoute()

watch(
  () => route.meta?.layout as string | undefined,
  async (metaLayout) => {
    try {
      const component = metaLayout && (await import(/* @vite-ignore */ `./${metaLayout}.vue`))
      layout.value = markRaw(component?.default || LayoutDefault)
    } catch (e) {
      layout.value = markRaw(LayoutDefault)
    }
  },
  { immediate: true }
)
</script>

<template>
  <component :is="layout"> <router-view /> </component>
</template>
