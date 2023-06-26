<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'

import WelcomeItem from './WelcomeItem.vue'

import { Button } from '@/components/common/Button'
import { Icon } from '@/components/common/Icon'

const firstNameWelcome = ref('123')
const lastNameWelcome = ref('')
const state = reactive({ count: 0 })

const props = defineProps({
  firstName: String,
  lastName: String
})

const emit = defineEmits<{
  (e: 'onClose', data: { firstName: string; lastName: string }): void
}>()

const handleSubmit = (event: HTMLButtonEvent) => {
  emit('onClose', { firstName: 'hoang', lastName: 'phan' })
}

const fullNameRead = computed(() => `${props.firstName} ${props.lastName}`)
const fullNameWelcome = computed({
  get() {
    return `${firstNameWelcome.value} ${lastNameWelcome.value}`
  },
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    ;[firstNameWelcome.value, lastNameWelcome.value] = newValue.split(' ')
  }
})

const handleSubmit2 = (event: HTMLButtonEvent) => {
  fullNameWelcome.value = 'le tan'
}

// watching ref
const watchFullNameWelcomeRef = () => {
  watch(fullNameWelcome, (newValue: string, oldValue: string) => {
    console.log(`selected value changed from ${oldValue} to ${newValue}`)
  })
}

// watching state
const watchCountState = () => {
  watch(
    () => state.count,
    (count, oldCount) => {
      console.log(`selected value changed from ${oldCount} to ${count}`)
    }
  )
}

// watching state
const watchBoth = () => {
  watch([fullNameWelcome, () => state.count], ([fullnameNew, countNew]) => {
    console.log(`fullnameNew is ${fullnameNew} and countNew is ${countNew}`)
  })
}
watchFullNameWelcomeRef()
watchCountState()
watchBoth()
</script>

<template>
  <WelcomeItem>
    <Icon name="github" size="18px" color="red" />
    <template #heading>Documentation</template>
    <p>FullNameRef: {{ fullNameRead }}</p>
    <p>fullNameWelcome: {{ fullNameWelcome }}</p>
    <h2>Count {{ state.count }}</h2>
    <Button title="123" postIcon="123" @click="state.count++"> count</Button>
    <Button title="123" postIcon="123" @click="handleSubmit"> handle submit</Button>
    <Button.Icon title="icon button" @click="handleSubmit2"> Icon Button</Button.Icon>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <Icon name="tooling" />

    <template #heading>Tooling</template>

    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
    recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
    you need to test your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
    <a href="https://on.cypress.io/component" target="_blank">Cypress Component Testing</a>.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <Icon name="ecosystem" />
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <Icon name="community" />

    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <Icon name="support" />

    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>
</template>
