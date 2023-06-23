<script lang="ts" setup>
import { buttonProps } from '../types'

const props = defineProps(buttonProps)
</script>

<template>
  <button @click="onClick">Icon {{ props.title }}</button>
</template>
