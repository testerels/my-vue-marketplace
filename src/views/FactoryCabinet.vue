<template>
  <div>
    <button class="logout-btn" @click="logout">Выйти</button>
    <div class="manufacturer-card">
      <h3>{{ manufacturer.name }}</h3>
      <p><strong>Страна:</strong> {{ manufacturer.country }}</p>
      <p><strong>Специализация:</strong> {{ manufacturer.specialty }}</p>
      <p><strong>Год основания:</strong> {{ manufacturer.founded }}</p>
      <p class="manuf-desc">{{ manufacturer.desc }}</p>
    </div>
    <AddProduct />
  </div>
</template>

<script>
import AddProduct from '@/components/AddProduct.vue'

const manufacturers = [
  {
    name: 'ООО "ТехДеталь"',
    country: 'Россия',
    specialty: 'Композитные лопасти для БПЛА',
    founded: 2012,
    desc: 'Ведущий производитель композитных деталей для беспилотных летательных аппаратов. Поставляет продукцию для крупных авиастроительных компаний.'
  },
  {
    name: 'SkyParts Ltd.',
    country: 'Германия',
    specialty: 'Электроника и автопилоты',
    founded: 2008,
    desc: 'Разработка и производство современных автопилотов и систем управления для дронов и вертолётов.'
  },
  {
    name: 'AeroPlast',
    country: 'Китай',
    specialty: 'Корпуса и шасси',
    founded: 2015,
    desc: 'Известен качественными и лёгкими корпусами для БПЛА, а также инновационными решениями в области шасси.'
  }
]

export default {
  name: 'FactoryCabinet',
  components: { AddProduct },
  data() {
    return {
      manufacturer: manufacturers[Math.floor(Math.random() * manufacturers.length)]
    }
  },
  created() {
    // Если не авторизован — редирект на страницу входа
    if (localStorage.getItem('isFactoryLoggedIn') !== 'true') {
      this.$router.push('/for-manufacturers')
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('isFactoryLoggedIn')
      this.$router.push('/for-manufacturers')
    }
  }
}
</script>

<style scoped>
.logout-btn {
  display: block;
  margin: 24px auto 16px auto;
  background: linear-gradient(90deg, #ff5858 0%, #ffd700 100%);
  color: #232526;
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 2px 8px #ffd70033;
  transition: background 0.2s, color 0.2s;
}
.logout-btn:hover {
  background: linear-gradient(90deg, #ffd700 0%, #ff5858 100%);
  color: #fff;
}

.manufacturer-card {
  max-width: 400px;
  margin: 0 auto 32px auto;
  background: linear-gradient(120deg, #fffbe6 0%, #e0f7fa 100%);
  border-radius: 16px;
  box-shadow: 0 4px 24px 0 rgba(0, 207, 255, 0.10);
  padding: 1.5rem 1.2rem;
  text-align: left;
  font-family: 'Montserrat', Arial, sans-serif;
}
.manufacturer-card h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #232526;
  font-size: 1.3rem;
}
.manufacturer-card p {
  margin: 0.2rem 0;
  color: #007c91;
  font-size: 1rem;
}
.manuf-desc {
  margin-top: 0.7rem;
  color: #232526;
  font-size: 0.98rem;
}
</style>