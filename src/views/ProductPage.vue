<template>
  <div>
    <h2>Страница товара</h2>
    <div v-if="product" class="product-detail">
      <h3>{{ product.name }}</h3>
      <p>Описание товара...</p>
      <button @click="addToCart">Добавить в корзину</button>
    </div>
    <div v-else>
      <p>Товар не найден.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPage',
  props: ['id'],
  data() {
    return {
      products: [
        { id: 1, name: 'Товар 1' },
        { id: 2, name: 'Товар 2' },
        { id: 3, name: 'Товар 3' },
      ]
    }
  },
  computed: {
    product() {
      return this.products.find(p => p.id === this.id);
    }
  },
  methods: {
    addToCart() {
      alert('Товар добавлен в корзину!');
    }
  }
}
</script>

<style scoped>
.product-detail {
  background: #f0f0f0;
  padding: 2rem;
  border-radius: 8px;
  margin-top: 1rem;
}
</style>