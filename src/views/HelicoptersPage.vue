<template>
  <section class="heli-hero">

    <!-- Панель поиска и сортировки -->
    <div class="search-sort-container">
      <input v-model="searchQuery" type="text" placeholder="Поиск по названию..." class="search-input" />
      <select v-model="sortOption" class="sort-select">
        <option value="priceAsc">По цене (возр.)</option>
        <option value="priceDesc">По цене (убыв.)</option>
      </select>
    </div>

    <!-- Кнопки категорий -->
    <div class="category-buttons">
      <button
          v-for="category in categories"
          :key="category.id"
          :class="['category-btn', { active: selectedCategory === category.id }]"
          @click="selectCategory(category.id)"
      >
        {{ category.name }}
      </button>
      <button
          class="category-btn"
          :class="{ active: selectedCategory === null }"
          @click="selectCategory(null)"
      >
        Все категории
      </button>
    </div>

    <!-- Карточки услуг -->
    <div class="heli-list">
      <div
          v-for="heli in filteredAndSortedHelicopters"
          :key="heli.id"
          class="heli-card"
      >
        <img :src="heli.image" :alt="heli.name" class="heli-img" @click="openModal(heli)" />
        <h3 class="heli-name">{{ heli.name }}</h3>
        <p class="heli-desc">{{ heli.desc }}</p>
        <p class="heli-price">Цена: {{ heli.price }} ₽</p>
        <div class="heli-card-actions">
          <button class="heli-btn add" @click="addToCart(heli)">В корзину</button>
          <button class="heli-btn details" @click="openModal(heli)">Подробнее</button>
        </div>
      </div>
    </div>

    <!-- Модальное окно -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <h2>{{ selectedHeli.name }}</h2>
        <img :src="selectedHeli.image" :alt="selectedHeli.name" class="modal-img" />
        <p>{{ selectedHeli.desc }}</p>
        <p>Цена: {{ selectedHeli.price }} ₽</p>
        <button class="close-btn" @click="closeModal">Закрыть</button>
      </div>
    </div>

    <!-- Тост уведомление -->
    <transition name="fade">
      <div v-if="showToast" class="heli-toast">
        Товар добавлен в корзину!
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// Категории
const categories = ref([
  { id: 1, name: 'Аэрофотосъемка' },
  { id: 2, name: 'Геодезия' },
  { id: 3, name: 'Инспекции' },
  { id: 4, name: 'Обучение' }
])

// Услуги с ценами
const helicopters = ref([
  { id: 1, name: 'Профессиональная съемка', desc: 'Съемка недвижимости...', image: 'https://ouch-prod-var-cdn.icons8.com/kh/illustrations/previews/LejT5Wy1AqbHFG1e.webp', categoryId: 1 },
  { id: 2, name: 'Видеосъемка', desc: 'Качественная видеосъемка...', image: 'https://ouch-prod-var-cdn.icons8.com/kh/illustrations/previews/LejT5Wy1AqbHFG1e.webp', categoryId: 1 },
  { id: 3, name: 'Аэрообследование', desc: 'Обследование территорий...', image: 'https://ouch-prod-var-cdn.icons8.com/kh/illustrations/previews/LejT5Wy1AqbHFG1e.webp', categoryId: 1 },
  { id: 4, name: 'Создание 3D моделей', desc: 'Моделирование объектов...', image: 'https://ouch-prod-var-cdn.icons8.com/kh/illustrations/previews/LejT5Wy1AqbHFG1e.webp', categoryId: 1 },
  { id: 5, name: 'Кинематографические съемки', desc: 'Для фильмов и рекламы...', image: 'https://ouch-prod-var-cdn.icons8.com/kh/illustrations/previews/LejT5Wy1AqbHFG1e.webp', categoryId: 1 },

  { id: 6, name: 'Геодезические съемки', desc: 'Высокоточные съемки...', image: 'https://ouch-prod-var-cdn.icons8.com/vy/illustrations/previews/4SJv_DrBWJB_-x_Y.webp', categoryId: 2 },
  { id: 7, name: 'Картографирование', desc: 'Создание топографических карт...', image: 'https://ouch-prod-var-cdn.icons8.com/vy/illustrations/previews/4SJv_DrBWJB_-x_Y.webp', categoryId: 2 },
  { id: 8, name: 'Обследование объектов', desc: 'Обследование зданий...', image: 'https://ouch-prod-var-cdn.icons8.com/vy/illustrations/previews/4SJv_DrBWJB_-x_Y.webp', categoryId: 2 },
  { id: 9, name: 'Мониторинг строительства', desc: 'Контроль за стройками...', image: 'https://ouch-prod-var-cdn.icons8.com/vy/illustrations/previews/4SJv_DrBWJB_-x_Y.webp', categoryId: 2 },
  { id: 10, name: 'Анализ земель', desc: 'Оценка земельных участков...', image: 'https://ouch-prod-var-cdn.icons8.com/vy/illustrations/previews/4SJv_DrBWJB_-x_Y.webp', categoryId: 2 },

  { id: 11, name: 'Обследование инфраструктуры', desc: 'Инспекции мостов и линий...', image: 'https://ouch-prod-var-cdn.icons8.com/pc/illustrations/previews/xPuor_jk75eTsNBK.webp', categoryId: 3 },
  { id: 12, name: 'Линии электропередач', desc: 'Обследование линий...', image: 'https://ouch-prod-var-cdn.icons8.com/pc/illustrations/previews/xPuor_jk75eTsNBK.webp', categoryId: 3 },
  { id: 13, name: 'Мосты', desc: 'Проверка состояния мостов...', image: 'https://ouch-prod-var-cdn.icons8.com/pc/illustrations/previews/xPuor_jk75eTsNBK.webp', categoryId: 3 },
  { id: 14, name: 'Промышленные объекты', desc: 'Обследование заводов...', image: 'https://ouch-prod-var-cdn.icons8.com/pc/illustrations/previews/xPuor_jk75eTsNBK.webp', categoryId: 3 },
  { id: 15, name: 'Экологический мониторинг', desc: 'Контроль за экологией...', image: 'https://ouch-prod-var-cdn.icons8.com/pc/illustrations/previews/xPuor_jk75eTsNBK.webp', categoryId: 3 },

  { id: 16, name: 'Обучение пилотов', desc: 'Курсы для начинающих...', image: 'https://ouch-prod-var-cdn.icons8.com/bu/illustrations/previews/xcVc4Hg_Dy_DFaxC.webp', categoryId: 4 },
  { id: 17, name: 'Консультации по оборудованию', desc: 'Помощь в выборе...', image: 'https://ouch-prod-var-cdn.icons8.com/bu/illustrations/previews/xcVc4Hg_Dy_DFaxC.webp', categoryId: 4 },
  { id: 18, name: 'Разработка маршрутов', desc: 'Создание сценариев...', image: 'https://ouch-prod-var-cdn.icons8.com/bu/illustrations/previews/xcVc4Hg_Dy_DFaxC.webp', categoryId: 4 },
  { id: 19, name: 'Обучение обработке данных', desc: 'Обработка фотоснимков...', image: 'https://ouch-prod-var-cdn.icons8.com/bu/illustrations/previews/xcVc4Hg_Dy_DFaxC.webp', categoryId: 4 },
  { id: 20, name: 'Легализация', desc: 'Помощь с документами...', image: 'https://ouch-prod-var-cdn.icons8.com/bu/illustrations/previews/xcVc4Hg_Dy_DFaxC.webp', categoryId: 4 }
])

// Переменные состояния
const searchQuery = ref('')
const sortOption = ref('priceAsc')
const selectedCategory = ref(null)
const showModal = ref(false)
const selectedHeli = ref({})
const showToast = ref(false)

// Фильтрация и сортировка
const filteredAndSortedHelicopters = computed(() => {
  let result = helicopters.value

  // Фильтр по категории
  if (selectedCategory.value !== null) {
    result = result.filter(h => h.categoryId === selectedCategory.value)
  }

  // Поиск по названию
  if (searchQuery.value.trim() !== '') {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(h => h.name.toLowerCase().includes(query))
  }

  // Сортировка по цене
  if (sortOption.value === 'priceAsc') {
    result = result.slice().sort((a, b) => a.price - b.price)
  } else if (sortOption.value === 'priceDesc') {
    result = result.slice().sort((a, b) => b.price - a.price)
  }

  return result
})

// Методы
function selectCategory(id) {
  selectedCategory.value = id
}

function openModal(heli) {
  selectedHeli.value = heli
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

function addToCart(heli) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]')
  cart.push(heli)
  localStorage.setItem('cart', JSON.stringify(cart))
  showToast.value = true
  setTimeout(() => (showToast.value = false), 1500)
}
</script>


<style>
.heli-hero {
min-height: 80vh;
background: linear-gradient(120deg, #232526, #1a8a6c);
padding: 3vw 2vw 5vw 2vw;
display: flex;
flex-direction: column;
align-items: center;
}

.search-sort-container {
  background: #fff;
  padding: 1rem 1.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  gap: 1rem;
  align-items: center;
  max-width: 600px;
  width: 100%;
  margin-bottom: 2rem;
  min-height: 40px;
  max-height: 60px;
  transition: max-height 0.3s ease;
}

/* Стиль для поиска */
.search-input {
  flex: 1;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  border: 1px solid #ccc;
  font-size: 1rem;
  outline: none;
}

/* Стиль для сортировки */
.sort-select {
  padding: 0.5rem 1rem;
  border-radius: 15px;
  border: 1px solid #ccc;
  font-size: 1rem;
  outline: none;
}

.search-input {
padding: 0.5rem 1rem;
border-radius: 8px;
border: none;
font-size: 1rem;
outline: none;
width: 200px;
max-width: 100%;
}

.sort-select {
padding: 0.5rem 1rem;
border-radius: 8px;
border: none;
font-size: 1rem;
outline: none;
}

/* Кнопки категорий */
.category-buttons {
display: flex;
flex-wrap: wrap;
gap: 0.7rem;
margin-bottom: 2rem;
justify-content: center;
}

.category-btn {
padding: 0.6rem 1.2rem;
border: none;
border-radius: 8px;
background: #00cfff;
color: #232526;
font-weight: 600;
cursor: pointer;
transition: background 0.2s;
}

.category-btn.active,
.category-btn:hover {
background: #59c74f;
color: #fff;
}

/* Карточки услуг */
.heli-list {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
gap: 1.5rem;
width: 100%;
max-width: 1200px;
}

.heli-card {
background: linear-gradient(135deg, #ffffff, #e0f7fa);
border-radius: 18px;
box-shadow: 0 4px 24px rgba(255, 215, 0, 0.12), 0 1.5px 6px rgba(44, 62, 80, 0.08);
padding: 1.5rem;
display: flex;
flex-direction: column;
align-items: center;
cursor: pointer;
transition: transform 0.22s, box-shadow 0.22s;
}

.heli-card:hover {
transform: translateY(-8px) scale(1.03) rotate(-1deg);
box-shadow: 0 8px 32px rgba(115, 103, 41, 0.22), 0 3px 12px rgba(112, 158, 206, 0.12);
}

.heli-img {
width: 100%;
max-width: 220px;
height: 140px;
object-fit: cover;
border-radius: 12px;
margin-bottom: 1rem;
box-shadow: 0 2px 8px #ffd70033;
cursor: pointer;
}

.heli-name {
margin: 0.5rem 0 0.7rem 0;
font-size: 15px;
color: #232526;
font-family: 'Montserrat', Arial, sans-serif;
font-weight: 600;
letter-spacing: 1px;
text-align: center;
}

.heli-desc {
color: #197c4a;
font-size: 16px;
margin-bottom: 1rem;
text-align: center;
}

.heli-price {
  font-weight: bold;
  font-size: 1.1rem;
  color: #333;
  margin-top: auto;
}

.heli-card-actions {
display: flex;
gap: 0.7rem;
width: 100%;
justify-content: center;
margin-top: auto;
flex-wrap: wrap;
}

.heli-btn {
background: linear-gradient(90deg, #59c74f, #00cfff);
color: #232526;
padding: 0.6rem 1.3rem;
border-radius: 8px;
border: none;
cursor: pointer;
font-weight: 600;
font-size: 1rem;
box-shadow: 0 2px 8px rgba(255, 215, 0, 0.15);
transition: background 0.2s, box-shadow 0.2s;
}

.heli-btn.add {
background: linear-gradient(90deg, #59c74f, #00cfff);
}

.heli-btn.add:hover {
background: linear-gradient(90deg, #00cfff, #ffd700);
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

/* Тост уведомление */
.heli-toast {
position: fixed;
bottom: 32px;
left: 50%;
transform: translateX(-50%);
background: linear-gradient(90deg, #59c74f, #00cfff);
color: #232526;
font-weight: 700;
padding: 16px 32px;
border-radius: 12px;
box-shadow: 0 4px 24px rgba(0, 207, 255, 0.18);
font-size: 1.1rem;
z-index: 9999;
animation: fadeInUp 0.3s;
}

@keyframes fadeInUp {
from { opacity: 0; transform: translateX(-50%) translateY(30px); }
to { opacity: 1; transform: translateX(-50%) translateY(0); }
}

/* Модальное окно */
.modal-overlay {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.6);
display: flex;
justify-content: center;
align-items: center;
z-index: 10000;
}

.modal-content {
background: #fff;
padding: 2rem;
border-radius: 20px;
max-width: 500px;
width: 90%;
box-shadow: 0 4px 24px rgba(0,0,0,0.2);
position: relative;
text-align: center;
}

.modal-img {
width: 100%;
max-width: 400px;
height: auto;
border-radius: 12px;
margin-bottom: 1.5rem;
cursor: pointer;
}

.close-btn {
background: linear-gradient(90deg, #59c74f, #00cfff);
color: #232526;
padding: 0.6rem 1.3rem;
border-radius: 8px;
border: none;
cursor: pointer;
font-weight: 600;
font-size: 1rem;
transition: background 0.2s;
}

.close-btn:hover {
background: linear-gradient(90deg, #00cfff, #ffd700);
}

/* Адаптивность */
@media(max-width: 600px) {

  .heli-btn {
  font-size: 0.9rem;
  }
}
</style>