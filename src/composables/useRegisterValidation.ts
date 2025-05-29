import { reactive } from 'vue'

export interface RegisterForm {
  login: string
  email: string
  phone: string
  password: string
  confirmPassword: string
}

export function useRegisterValidation(form: RegisterForm) {
  const errors = reactive({
    login: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  const validateLogin = () => {
    if (!form.login) {
      errors.login = 'Логин обязателен'
    } else if (form.login.length < 6) {
      errors.login = 'Логин должен содержать не менее 6 символов'
    } else if (!/^[a-zA-Z0-9]+$/.test(form.login)) {
      errors.login = 'Логин должен содержать только латинские буквы и цифры'
    } else {
      errors.login = ''
    }
  }

  const validateEmail = () => {
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = 'Некорректный Email'
    } else {
      errors.email = ''
    }
  }

  const validatePhone = () => {
    if (!form.phone) {
      errors.phone = 'Телефон обязателен'
    } else if (form.phone && !/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(form.phone)) {
      errors.phone = 'Некорректный номер телефона'
    } else {
      errors.phone = ''
    }
  }

  const validatePassword = () => {
    if (!form.password) {
      errors.password = 'Пароль обязателен'
    } else if (form.password.length < 6) {
      errors.password = 'Пароль должен содержать минимум 6 символов'
    } else {
      errors.password = ''
    }
  }

  const validateConfirmPassword = () => {
    if (!form.confirmPassword) {
      errors.confirmPassword = 'Подтверждение пароля обязательно'
    } else if (form.confirmPassword !== form.password) {
      errors.confirmPassword = 'Пароли не совпадают'
    } else {
      errors.confirmPassword = ''
    }
  }

  const validateForm = () => {
    validateLogin()
    validateEmail()
    validatePhone()
    validatePassword()
    validateConfirmPassword()
    return !errors.login &&
      (!form.email || !errors.email) &&
      (!form.phone || !errors.phone) &&
      !errors.password &&
      !errors.confirmPassword
  }

  return {
    errors,
    validateLogin,
    validateEmail,
    validatePhone,
    validatePassword,
    validateConfirmPassword,
    validateForm
  }
}
