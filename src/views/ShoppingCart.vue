<template>
  <section class="cart-section">
    <div class="cart-header">
      <h2>Корзина</h2>
      <span class="cart-count" v-if="cartItems.length">Товаров: {{ cartItems.length }}</span>
    </div>
    <div v-if="cartItems.length" class="cart-list">
      <div v-for="(item, idx) in cartItems" :key="idx" class="cart-item">
        <img :src="item.image" :alt="item.name" class="cart-item-img" />
        <div class="cart-item-info">
          <h3>{{ item.name }}</h3>
          <p class="cart-item-desc">{{ item.desc }}</p>
          <div class="cart-item-meta">
            <span class="cart-item-price">{{ item.price ? item.price + ' ₽' : '' }}</span>
            <button class="remove-btn" @click="removeItem(idx)">Удалить</button>
          </div>
        </div>
      </div>
      <div class="cart-footer">
        <div class="cart-total">
          <span>Итого:</span>
          <span class="cart-total-sum">{{ totalPrice }} ₽</span>
        </div>
        <button class="checkout-btn" :disabled="!cartItems.length">Оформить заказ</button>
      </div>
    </div>
    <div v-else class="cart-empty">
      <img src="@/assets/empty_cart.svg" alt="Пусто" class="cart-empty-img" />
      <p>Ваша корзина пуста.<br>Добавьте товары для оформления заказа.</p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const cartItems = ref([])

onMounted(() => {
  cartItems.value = JSON.parse(localStorage.getItem('cart') || '[]')
})

function removeItem(idx) {
  cartItems.value.splice(idx, 1)
  localStorage.setItem('cart', JSON.stringify(cartItems.value))
}

const totalPrice = computed(() =>
    cartItems.value.reduce((sum, item) => sum + (item.price || 0), 0)
)
</script>

<style scoped>
.cart-section {
  max-width: 700px;
  margin: 40px auto;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,207,255,0.08), 0 2px 8px rgba(44,62,80,0.08);
  padding: 32px 24px;
  min-height: 320px;
}

.cart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
}

.cart-header h2 {
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  margin: 0;
  background: linear-gradient(90deg, #e73292 0%, #62f5df 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cart-count {
  background: #00cfff;
  color: #fff;
  font-weight: 600;
  border-radius: 12px;
  padding: 6px 16px;
  font-size: 1rem;
}

.cart-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.cart-item {
  display: flex;
  gap: 20px;
  background: #f7fafd;
  border-radius: 12px;
  padding: 18px 16px;
  align-items: flex-start;
  box-shadow: 0 2px 8px rgba(0,207,255,0.04);
}

.cart-item-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
  background: #e0e0e0;
}

.cart-item-info {
  flex: 1;
}

.cart-item-info h3 {
  margin: 0 0;
  font-size: 1.15rem;
  font-weight: 600;
  color: #232526;
}

.cart-item-desc {
  font-size: 0.98rem;
  color: #666;
  margin-bottom: 10px;
}

.cart-item-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cart-item-price {
  font-size: 1.1rem;
  font-weight: 700;
  color: #00cfff;
}

.remove-btn {
  background: none;
  border: none;
  color: #ff4d4f;
  font-weight: 600;
  cursor: pointer;
  padding: 4px 10px;
  border-radius: 6px;
  transition: background 0.15s;
}
.remove-btn:hover {
  background: #ffeaea;
}

.cart-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  border-top: 1px solid #e0e0e0;
  padding-top: 18px;
}

.cart-total {
  font-size: 1.15rem;
  font-weight: 600;
  color: #232526;
  display: flex;
  gap: 10px;
  align-items: center;
}

.cart-total-sum {
  color: #00cfff;
  font-size: 1.25rem;
  font-weight: 700;
}

.checkout-btn {
  background: #00cfff;
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  font-size: 1.08rem;
  cursor: pointer;
  transition: background 0.18s;
  box-shadow: 0 2px 8px rgba(0,207,255,0.08);
}
.checkout-btn:disabled {
  background: #b2eaff;
  color: #fff;
  cursor: not-allowed;
}
.checkout-btn:hover:enabled {
  background: #009bb3;
}

.cart-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 220px;
  color: #888;
  text-align: center;
  gap: 18px;
}

.cart-empty-img {
  width: 120px;
  opacity: 0.7;
  margin-bottom: 10px;
}

@media (max-width: 600px) {
  .cart-section {
    padding: 16px 4px;
  }
  .cart-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .cart-item-img {
    width: 60px;
    height: 60px;
  }
  .cart-footer {
    flex-direction: column;
    gap: 18px;
  }
}
</style>