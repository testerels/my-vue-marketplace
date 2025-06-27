<template>
  <section class="homepage">
    <div class="hero">
      <div class="hero-content">
        <h1>Маркетплейс БПЛА и Вертолётов</h1>
        <p>
          Добро пожаловать на платформу, где производители беспилотных летательных аппаратов и вертолётов размещают свои товары. Здесь вы найдёте широкий выбор техники, сможете сравнить предложения и выбрать лучшее для себя или вашего бизнеса.
        </p>
        <router-link to="/uav" class="hero-btn">Перейти к БПЛА</router-link>
        <router-link to="/helicopters" class="hero-btn secondary">Перейти к вертолётам</router-link>
      </div>
      <div class="hero-image">
        <img src="@/assets/говно.jpg" alt="Маркетплейс БПЛА и Вертолётов" />
      </div>
    </div>
    <div class="features">
      <div class="feature-card">
        <span class="feature-icon">🚁</span>
        <h3>Для производителей</h3>
        <p>Размещайте свои товары, расширяйте рынок сбыта и находите новых клиентов.</p>
      </div>
      <div class="feature-card">
        <span class="feature-icon">🛒</span>
        <h3>Для покупателей</h3>
        <p>Сравнивайте предложения, выбирайте лучшее и совершайте покупки напрямую у производителей.</p>
      </div>
      <div class="feature-card">
        <span class="feature-icon">🔒</span>
        <h3>Безопасность</h3>
        <p>Ваша информация и сделки защищены современными технологиями безопасности.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Здесь можно добавить логику, если потребуется
</script>

<style scoped>
.homepage {
  padding: 32px 0;
  background: linear-gradient(120deg, #232526 0%, #4761e8 100%);
  min-height: 100vh;
  color: #fff;
}

.hero {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 48px;
  margin-bottom: 48px;
}

.hero-content {
  max-width: 480px;
}

.hero-content h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 18px;
  color: #00cfff;
}

.hero-content p {
  font-size: 1.18rem;
  margin-bottom: 28px;
  line-height: 1.6;
}

.hero-btn {
  display: inline-block;
  background: #00cfff;
  color: #232526;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 8px;
  text-decoration: none;
  margin-right: 16px;
  transition: background 0.2s, color 0.2s;
  box-shadow: 0 2px 8px rgba(0,207,255,0.08);
}

.hero-btn:hover {
  background: #009bb3;
  color: #fff;
}

.hero-btn.secondary {
  background: #fff;
  color: #232526;
  border: 1px solid #00cfff;
}

.hero-btn.secondary:hover {
  background: #00cfff;
  color: #fff;
}

.hero-image img {
  max-width: 340px;
  width: 100%;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  background: #fff;
}

.features {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
}

.feature-card {
  background: #292b2c;
  border-radius: 14px;
  padding: 32px 24px;
  max-width: 320px;
  min-width: 220px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(44, 62, 80, 0.10);
  transition: transform 0.18s;
}

.feature-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 6px 24px rgba(0,207,255,0.10);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
  display: block;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #00cfff;
}

.feature-card p {
  font-size: 1rem;
  color: #e0e0e0;
  line-height: 1.5;
}

/* Адаптивность */
@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    gap: 32px;
    text-align: center;
  }
  .hero-content {
    max-width: 100%;
  }
  .hero-image img {
    max-width: 90vw;
  }
  .features {
    flex-direction: column;
    gap: 24px;
  }
}
</style>