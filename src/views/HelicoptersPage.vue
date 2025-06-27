<template>
  <section class="heli-hero">
    <h1 class="heli-title">Маркетплейс вертолётов</h1>
    <div class="heli-list">
      <div v-for="heli in helicopters" :key="heli.id" class="heli-card">
        <img :src="heli.image" :alt="heli.name" class="heli-img" />
        <h2 class="heli-name">{{ heli.name }}</h2>
        <p class="heli-desc">{{ heli.desc }}</p>
        <div class="heli-card-actions">
          <button class="heli-btn add" @click="addToCart(heli)">В корзину</button>
          <router-link :to="`/helicopters/${heli.id}`" class="heli-btn details">Подробнее</router-link>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div v-if="showToast" class="heli-toast">
        Товар добавлен в корзину!
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const helicopters = ref([
  {
    id: 1,
    name: 'Robinson R44',
    desc: 'Лёгкий многоцелевой вертолёт для частных и коммерческих полётов.',
    image: 'https://helico-russia.ru/upload/iblock/384/384c679a93c2337f0c0f42377d49cfcc.jpeg'
  },
  {
    id: 2,
    name: 'Airbus H125',
    desc: 'Высокопроизводительный однодвигательный вертолёт для различных задач.',
    image: 'https://assets.verticalmag.com/wp-content/uploads/2019/05/H125.jpg'
  },
  {
    id: 3,
    name: 'Bell 407',
    desc: 'Надёжный и быстрый вертолёт для корпоративных и медицинских перевозок.',
    image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_67658536b819ac605b01c0f3_67685d314eea742b10954a6f/scale_1200'
  }
])

const showToast = ref(false)

function addToCart(heli) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]')
  cart.push(heli)
  localStorage.setItem('cart', JSON.stringify(cart))

  showToast.value = true
  setTimeout(() => (showToast.value = false), 1500)
}
</script>

<style scoped>
.heli-hero {
  min-height: 80vh;
  background: linear-gradient(120deg, #232526 0%, #1a8a6c 100%);
  padding: 3vw 0 5vw 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.heli-title {
  color: #fff;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  letter-spacing: 2px;
  text-shadow: 0 2px 12px rgba(92, 204, 107, 0.33);
  font-family: 'Montserrat', Arial, sans-serif;
}

.heli-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
}

.heli-card {
  background: linear-gradient(135deg, #ffffff 0%, #e0f7fa 100%);
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(255, 215, 0, 0.12), 0 1.5px 6px 0 rgba(44, 62, 80, 0.08);
  padding: 1.5rem 1.2rem 1.2rem 1.2rem;
  width: 290px;
  text-align: center;
  transition: transform 0.22s, box-shadow 0.22s;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.heli-card:hover {
  transform: translateY(-8px) scale(1.03) rotate(-1deg);
  box-shadow: 0 8px 32px 0 rgba(115, 103, 41, 0.22), 0 3px 12px 0 rgba(112, 158, 206, 0.12);
}

.heli-img {
  width: 100%;
  max-width: 220px;
  height: 140px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px #ffd70033;
}

.heli-name {
  margin: 0.5rem 0 0.7rem 0;
  font-size: 1.25rem;
  color: #232526;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
}

.heli-desc {
  color: #197c4a;
  font-size: 1rem;
  margin-bottom: 1.2rem;
  min-height: 48px;
}

.heli-card-actions {
  display: flex;
  gap: 0.7rem;
  width: 100%;
  justify-content: center;
  margin-top: auto;
}

.heli-btn {
  background: linear-gradient(90deg, #59c74f 0%, #00cfff 100%);
  color: #232526;
  padding: 0.6rem 1.3rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(255, 215, 0, 0.15);
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  border: none;
  outline: none;
  display: inline-block;
  cursor: pointer;
}

.heli-btn.add {
  background: linear-gradient(90deg, #59c74f 0%, #00cfff 100%);
}

.heli-btn.add:hover {
  background: linear-gradient(90deg, #00cfff 0%, #ffd700 100%);
  color: #fff;
  box-shadow: 0 4px 16px rgba(0, 207, 255, 0.25);
  text-shadow: 0 1px 4px #ffd70055;
}

.heli-btn.details {
  background: #fff;
  color: #00cfff;
  border: 1.5px solid #00cfff;
}

.heli-btn.details:hover {
  background: #00cfff;
  color: #fff;
}

.heli-toast {
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, #59c74f 0%, #00cfff 100%);
  color: #232526;
  font-weight: 700;
  padding: 16px 32px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,207,255,0.18);
  font-size: 1.1rem;
  z-index: 9999;
  animation: fadeInUp 0.3s;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateX(-50%) translateY(30px);}
  to { opacity: 1; transform: translateX(-50%) translateY(0);}
}

@media (max-width: 900px) {
  .heli-list {
    gap: 1.2rem;
  }
  .heli-card {
    width: 90vw;
    max-width: 350px;
  }
}
</style>