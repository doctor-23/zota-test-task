<template>
  <div class="wrapper">
    <div class="register-container">
      <h1>Регистрация</h1>
      <form @submit.prevent="handleSubmit" class="register-form">
        <FormGroup label="Логин*" for-id="login" :error="errors.login" :onClear="() => form.login = ''">
          <TextField
            id="login"
            v-model="form.login"
            :error="!!errors.login"
            placeholder="Введите логин"
            :onBlur="() => validateLogin()"
          />
        </FormGroup>

        <FormGroup label="E-mail" for-id="email" :error="errors.email" :onClear="() => form.email = ''">
          <TextField
            id="email"
            type="email"
            v-model="form.email"
            :error="!!errors.email"
            placeholder="example@gmail.com"
            :onBlur="() => validateEmail()"
          />
        </FormGroup>

        <FormGroup label="Телефон" for-id="phone" :error="errors.phone" :onClear="() => form.phone = ''">
          <PhoneField
            id="phone"
            v-model="form.phone"
            :error="!!errors.phone"
            placeholder="+7 (___) ___-__-__"
            :onBlur="() => validatePhone()"
          />
        </FormGroup>

        <FormGroup label="Пароль*" for-id="password" :error="errors.password" :onClear="() => form.password = ''">
          <PasswordField
            id="password"
            v-model="form.password"
            :error="!!errors.password"
            placeholder="Введите пароль"
            :onBlur="validatePassword"
          >
            <template #icon-eye><IconEye /></template>
            <template #icon-eye-off><IconEyeOff /></template>
          </PasswordField>
        </FormGroup>

        <FormGroup label="Повторить пароль*" for-id="confirmPassword" :error="errors.confirmPassword" :onClear="() => form.confirmPassword = ''">
          <PasswordField
            id="confirmPassword"
            v-model="form.confirmPassword"
            :error="!!errors.confirmPassword"
            placeholder="Повторите пароль"
            :onBlur="validateConfirmPassword"
          >
            <template #icon-eye><IconEye /></template>
            <template #icon-eye-off><IconEyeOff /></template>
          </PasswordField>
        </FormGroup>

        <button type="submit" class="submit-button">Зарегистрироваться</button>
      </form>

      <p class="terms">
        Нажимая кнопку «Зарегистрироваться», пользователь соглашается с
        политикой в отношении обработки персональных данных и публичной офертой
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/assets/main.scss'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import PasswordField from '@/components/fields/PasswordField.vue'
import PhoneField from '@/components/fields/PhoneField.vue'
import TextField from '@/components/fields/TextField.vue'
import FormGroup from '@/components/fields/FormGroup.vue'
import IconEye from '@/components/icons/IconEye.vue'
import IconEyeOff from '@/components/icons/IconEyeOff.vue'
import { useRegisterValidation } from '@/composables/useRegisterValidation'

const router = useRouter()
const userStore = useUserStore()

const form = reactive({
  login: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: ''
})

const {
  errors,
  validateLogin,
  validateEmail,
  validatePhone,
  validatePassword,
  validateConfirmPassword,
  validateForm
} = useRegisterValidation(form)

const handleSubmit = () => {
  if (validateForm()) {
    userStore.register({
      login: form.login,
      email: form.email,
      phone: form.phone
    })
    router.push('/profile')
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 575.98px) {
    display: block;
  }
}

.register-container {
  max-width: 614px;
  margin: 0 auto;
  padding: 42px;
  border-top-left-radius: 2px;
  background-color: #fff;

  @media screen and (max-width: 575.98px){
    padding: 24px 16px;
  }
}

h1 {
  margin-bottom: 24px;

  @media screen and (max-width: 575.98px){
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: 32;
  }
}

.register-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #F2F2F2;

  @media screen and (max-width: 575.98px){
    margin-bottom: 16px;
    padding-bottom: 16px;
  }
}

.submit-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-top: 22px;
  padding: 0 16px;
  color: white;
  font-size: 16px;
  line-height: 18;
  border: none;
  border-radius: 2px;
  background-color: #2B2A29;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #444;
  }
}

.terms {
  font-family: 'Roboto';
  font-size: 14px;
  color: #878787;
}
</style>
