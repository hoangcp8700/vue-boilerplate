<script setup lang="ts">
import TheWelcome from '@/components/templates/TheWelcome.vue'

const onClick = (data: any) => {
  console.log('onClick', data)
}
</script>

<template>
  <main>
    <TheWelcome @onClose="onClick" />
  </main>
</template>
