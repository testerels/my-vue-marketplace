<template>
  <div class="login-modal">
    <h2>Вход для производителей</h2>
    <form @submit.prevent="login">
      <input v-model="username" type="text" placeholder="Логин" required />
      <input v-model="password" type="password" placeholder="Пароль" required />
      <button type="submit">Войти</button>
      <div v-if="error" class="error">{{ error }}</div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')

// Проверка авторизации при загрузке компонента
onMounted(() => {
  if (localStorage.getItem('isFactoryLoggedIn') === 'true') {
    router.push('/factory-cabinet')
  }
})

function login() {
  if (username.value === 'admin' && password.value === '123qweasddsa') {
    localStorage.setItem('isFactoryLoggedIn', 'true')
    router.push('/factory-cabinet')
  } else {
    error.value = 'Неверный логин или пароль'
  }
}
</script>

<style scoped>
.login-modal {
  max-width: 350px;
  margin: 40px auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 24px #00cfff22;
  padding: 2rem;
  text-align: center;
}
input {
  display: block;
  width: 100%;
  margin: 1rem 0;
  padding: 0.7rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
}
button {
  background: linear-gradient(90deg, #00cfff 0%, #54e741 100%);
  color: #232526;
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
}
.error {
  color: #e74c3c;
  margin-top: 1rem;
}
</style>