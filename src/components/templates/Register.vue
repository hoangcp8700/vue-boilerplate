<template>
  <div>
    <Form @submit="handleRegister" :validation-schema="schema" v-slot="{ isSubmitting }">
      <div>
        <TextInput name="username" label="UserName" placeholder="Your UserName" />
        <TextInput type="email" name="email" label="Email" placeholder="Your Email" />
        <TextInput type="password" name="password" label="Password" placeholder="Your Password" />
        <TextInput
          type="password"
          name="passwordConfirmation"
          label="Confirm Password"
          placeholder="Your Confirm Password"
        />

        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block" :disabled="isSubmitting">
            <span v-show="isSubmitting" class="spinner-border spinner-border-sm">loading</span>
            Sign Up
          </button>
        </div>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form, type SubmissionContext } from 'vee-validate'
import * as yup from 'yup'

import { TextInput } from '../common/Input'

interface SingUpFormProps {
  username: string
  email: string
  password: string
  passwordConfirmation: string
}

const schema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required!')
    .min(3, 'Must be at least 3 characters!')
    .max(20, 'Must be maximum 20 characters!'),
  email: yup
    .string()
    .required('Email is required!')
    .email('Email is invalid!')
    .max(50, 'Must be maximum 50 characters!'),
  password: yup
    .string()
    .required('Password is required!')
    .min(6, 'Must be at least 6 characters!')
    .max(40, 'Must be maximum 40 characters!'),
  passwordConfirmation: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Passwords do not match')
})

const handleRegister = (data: any, { resetForm }: SubmissionContext<any>) => {
  console.log('🚀 ~handleRegister:', JSON.stringify(data, null, 2))
  resetForm()
}
</script>

<style scoped></style>
