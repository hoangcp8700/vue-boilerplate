<script setup lang="ts">
import { ref } from 'vue'

import TheWelcome from '@/components/templates/TheWelcome.vue'

const firstName = ref('')
const lastName = ref('')
const onClick = (data: any) => {
  firstName.value = data.firstName
  lastName.value = data.lastName
}
</script>

<template>
  <main>
    <TheWelcome @onClose="onClick" :firstName="firstName" :lastName="lastName" />
  </main>
</template>
