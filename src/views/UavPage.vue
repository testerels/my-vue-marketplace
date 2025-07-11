<template>
  <section class="uav-hero">
    <h1 class="uav-title">Маркетплейс БПЛА</h1>
    <div class="uav-list">
      <div v-for="uav in uavs" :key="uav.id" class="uav-card">
        <img :src="uav.image" :alt="uav.name" class="uav-img" />
        <h2 class="uav-name">{{ uav.name }}</h2>
        <p class="uav-desc">{{ uav.desc }}</p>
        <div class="uav-card-actions">
          <button class="uav-btn add" @click="addToCart(uav)">В корзину</button>
          <router-link :to="`/uav/${uav.id}`" class="uav-btn details">Подробнее</router-link>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div v-if="showToast" class="uav-toast">
        Товар добавлен в корзину!
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const uavs = ref([
  {
    id: 1,
    name: 'DJI Mavic 3',
    desc: 'Компактный и мощный дрон для аэрофотосъёмки.',
    image: 'https://gisdata.ru/image/cachewebp/catalog/products/DJIMavic3_1-1000x1000.webp'
  },
  {
    id: 2,
    name: 'Parrot Anafi',
    desc: 'Лёгкий складной дрон с отличной камерой.',
    image: 'https://i.computer-bild.de/imgs/1/2/9/3/4/4/5/3/2a0db729229698be.jpg'
  },
  {
    id: 3,
    name: 'Autel EVO II',
    desc: 'Профессиональный дрон с 8K-камерой.',
    image: 'https://uralelectronica.ru/upload/iblock/080/xrxgmfddm8c79j3ph4p9tzjodeuplbso.png'
  }
])

const showToast = ref(false)

function addToCart(uav) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]')
  cart.push(uav)
  localStorage.setItem('cart', JSON.stringify(cart))

  showToast.value = true
  setTimeout(() => (showToast.value = false), 1500)
}
</script>

<style scoped>
.uav-hero {
  min-height: 80vh;
  background: linear-gradient(120deg, #0e0e0e 0%, #43e3ca 100%);
  padding: 3vw 0 5vw 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.uav-title {
  color: #fff;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  letter-spacing: 2px;
  text-shadow: 0 2px 12px #00cfff55;
  font-family: 'Montserrat', Arial, sans-serif;
}

.uav-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
}

.uav-card {
  background: linear-gradient(135deg, #fffbe6 0%, #e0f7fa 100%);
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(0, 207, 255, 0.12), 0 2px 6px 0 rgba(44, 62, 80, 0.08);
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

.uav-card:hover {
  transform: translateY(-8px) scale(1.03) rotate(-1deg);
  box-shadow: 0 8px 32px 0 rgba(0, 207, 255, 0.22), 0 3px 12px 0 rgba(44, 62, 80, 0.12);
}

.uav-img {
  width: 100%;
  max-width: 220px;
  height: 140px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px #00cfff33;
}

.uav-name {
  margin: 0.5rem 0 0.7rem 0;
  font-size: 1.25rem;
  color: #232526;
  font-weight: 700;
  font-family: 'Montserrat', Arial, sans-serif;
  letter-spacing: 1px;
}

.uav-desc {
  color: #007c91;
  font-size: 1rem;
  margin-bottom: 1.2rem;
  min-height: 48px;
}

.uav-card-actions {
  display: flex;
  gap: 0.7rem;
  width: 100%;
  justify-content: center;
  margin-top: auto;
}

.uav-btn {
  background: linear-gradient(90deg, #00cfff 0%, #32fd78 100%);
  color: #232526;
  padding: 0.6rem 1.3rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(0, 207, 255, 0.15);
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  border: none;
  outline: none;
  display: inline-block;
  cursor: pointer;
}

.uav-btn.add {
  background: linear-gradient(90deg, #00cfff 0%, #32fd78 100%);
}

.uav-btn.add:hover {
  background: linear-gradient(90deg, #81ef4b 0%, #00cfff 100%);
  color: #fff;
  box-shadow: 0 4px 16px rgba(0, 207, 255, 0.25);
  text-shadow: 0 1px 4px #00cfff55;
}

.uav-btn.details {
  background: #fff;
  color: #00cfff;
  border: 1.5px solid #00cfff;
}

.uav-btn.details:hover {
  background: #00cfff;
  color: #fff;
}

.uav-toast {
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, #00cfff 0%, #32fd78 100%);
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

@media (max-width: 600px) {
  .uav-title {
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
    letter-spacing: 1px;
    text-shadow: 0 1px 6px rgba(92, 204, 107, 0.18);
  }
}
</style>