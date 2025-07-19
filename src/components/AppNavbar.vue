<template>
  <nav class="navbar">
    <!-- Левая часть: меню для ПК, логотип+название для мобилки -->
    <div class="navbar-section navbar-left">
      <!-- Логотип и название только для мобилки -->
      <router-link to="/" class="navbar-brand-mobile" @click="closeMenu">
        <img src="@/assets/logo.png" alt="Логотип" class="navbar-logo" />
        <span class="navbar-title">Маркетплейс БПЛА</span>
      </router-link>
      <!-- Меню для ПК -->
      <router-link to="/about" @click="closeMenu">О нас</router-link>
      <router-link to="/uav" @click="closeMenu">БПЛА</router-link>
      <router-link to="/helicopters" @click="closeMenu">Услуги</router-link>
    </div>
    <!-- Центр: логотип и название для ПК -->
    <div class="navbar-center">
      <router-link to="/" class="navbar-brand-desktop" @click="closeMenu">
        <img src="@/assets/logo.png" alt="Логотип" class="navbar-logo" />
        <span class="navbar-title">Маркетплейс БПЛА</span>
      </router-link>
    </div>
    <!-- Правая часть -->
    <div class="navbar-section navbar-right">
      <router-link to="/for-manufacturers" @click="closeMenu">Для партнёров</router-link>
      <router-link to="/cart" @click="closeMenu">Корзина</router-link>
      <button class="burger" @click="menuOpen = !menuOpen" aria-label="Меню">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>
    <!-- Мобильное меню -->
    <div :class="['navbar-mobile', { open: menuOpen }]">
      <router-link to="/about" @click="closeMenu">О нас</router-link>
      <router-link to="/uav" @click="closeMenu">БПЛА</router-link>
      <router-link to="/helicopters" @click="closeMenu">Услуги</router-link>
      <router-link to="/for-manufacturers" @click="closeMenu">Для партнёров</router-link>
      <router-link to="/cart" @click="closeMenu">Корзина</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
function closeMenu() {
  menuOpen.value = false
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #232526;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.08);
  padding: 0 16px;
  height: 65px;
  font-family: 'Montserrat', Arial, sans-serif;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-section {
  display: flex;
  align-items: center;
  gap: 18px;
}

.navbar-left {
  flex: 1;
  justify-content: flex-start;
  align-items: center;
}

.navbar-center {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  flex: 0 0 auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.navbar-logo {
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: 50%;
}

.navbar-title {
  color: #fff;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 1px;
  white-space: nowrap;
}

.navbar-right {
  flex: 1;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  gap: 18px;
}

.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 39px;
  height: 38px;
  background: none;
  border: none;
  z-index: 200;
  margin-left: 8px;
}

.burger span {
  display: block;
  width: 24px;
  height: 2px;
  margin: 3px 0;
  background: #fff;
  border-radius: 3px;
  transition: 0.3s;
}

.burger span.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.burger span.open:nth-child(2) {
  opacity: 0;
}
.burger span.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.navbar-mobile {
  display: none;
}

.navbar-section a,
.navbar-mobile a {
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  font-size: 1rem;
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
  transition: color 0.2s, border-bottom 0.2s;
}
.navbar-section a.router-link-exact-active,
.navbar-section a.router-link-active,
.navbar-mobile a.router-link-exact-active,
.navbar-mobile a.router-link-active {
  color: #00cfff;
  border-bottom: 2px solid #00cfff;
}

.navbar-section a:hover,
.navbar-mobile a:hover {
  color: #00cfff;
  border-bottom: 2px solid #00cfff;
}

/* Стили для кликабельного бренда */
.navbar-brand-mobile, .navbar-brand-desktop {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}
.navbar-brand-mobile:active, .navbar-brand-desktop:active,
.navbar-brand-mobile:focus, .navbar-brand-desktop:focus {
  outline: none;
}
.navbar-brand-mobile .navbar-title,
.navbar-brand-desktop .navbar-title {
  color: #fff;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 1px;
  white-space: nowrap;
}

/* Скрываем мобильный бренд на ПК */
.navbar-brand-mobile {
  display: none;
  gap: 6px;
}

@media (max-width: 900px) {
  .navbar {
    justify-content: space-between;
    padding: 0 8px;
    position: relative;
  }
  .navbar-left {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
  }
  .navbar-center {
    display: none;
  }
  .navbar-right {
    flex: none;
    gap: 0;
  }
  .navbar-left > .navbar-brand-mobile {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
  }
  .navbar-left > a:not(.navbar-brand-mobile) {
    display: none;
  }
  .navbar-logo {
    min-width: 32px;
    min-height: 32px;
  }
  .navbar-title {
    font-size: 1.05rem;
    white-space: nowrap;
    max-width: none;
  }
  .navbar-right > a {
    display: none;
  }
  .burger {
    display: flex;
    margin-left: 0;
  }
  .navbar-mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    background: #232526;
    box-shadow: 0 4px 16px rgba(44, 62, 80, 0.12);
    z-index: 150;
    animation: fadeIn 0.2s;
    padding-bottom: 10px;
  }
  .navbar-mobile:not(.open) {
    display: none;
  }
  .navbar-mobile a {
    width: 100%;
    text-align: center;
    padding: 14px 0;
    border-bottom: 1px solid #333;
    font-size: 1.08rem;
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px);}
  to { opacity: 1; transform: translateY(0);}
}
</style>