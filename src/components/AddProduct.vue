<template>
  <div class="add-product">
    <h2>Добавить товар</h2>
    <form @submit.prevent="addProduct">
      <input v-model="name" type="text" placeholder="Название товара" required />
      <input v-model="image" type="text" placeholder="Ссылка на изображение" required />
      <textarea v-model="desc" placeholder="Описание товара" required></textarea>
      <button type="submit">Добавить</button>
    </form>
    <div v-if="success" class="success">Товар добавлен!</div>

    <div v-if="products.length" class="product-list">
      <h3>Добавленные товары:</h3>
      <div v-for="(product, idx) in products" :key="idx" class="product-card">
        <img :src="product.image" :alt="product.name" class="product-img" />
        <div>
          <strong>{{ product.name }}</strong>
          <p>{{ product.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data() {
    return {
      name: '',
      image: '',
      desc: '',
      success: false,
      products: []
    }
  },
  created() {
    // Загружаем товары из localStorage при инициализации
    const saved = localStorage.getItem('factoryProducts');
    if (saved) {
      this.products = JSON.parse(saved);
    }
  },
  methods: {
    addProduct() {
      this.products.push({
        name: this.name,
        image: this.image,
        desc: this.desc
      });
      // Сохраняем в localStorage
      localStorage.setItem('factoryProducts', JSON.stringify(this.products));
      this.success = true;
      this.name = '';
      this.image = '';
      this.desc = '';
      setTimeout(() => this.success = false, 2000);
    }
  }
}
</script>

<style scoped>
.add-product {
  max-width: 400px;
  margin: 40px auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 24px #00cfff22;
  padding: 2rem;
}
input, textarea {
  display: block;
  width: 100%;
  margin: 1rem 0;
  padding: 0.7rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
}
button {
  background: linear-gradient(90deg, #00cfff 0%, #43e83e 100%);
  color: #232526;
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
}
.success {
  color: #27ae60;
  margin-top: 1rem;
}
.product-list {
  margin-top: 2rem;
}
.product-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f7f7f7;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}
.product-img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
  background: #eee;
}
</style>