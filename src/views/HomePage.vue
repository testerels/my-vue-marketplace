<template>
  <section class="homepage">
    <div class="ads-block left">
      <h4>Реклама слева</h4>
      <p>Лучшие предложения на рынке беспилотных летательных аппаратов!</p>
    </div>
    <div class="content-wrapper">
      <div class="hero">
        <div class="hero-content">
          <h1>Маркетплейс БПЛА и Услуг</h1>
          <p>
            Добро пожаловать на платформу, где производители беспилотных летательных аппаратов размещают свои товары. Здесь вы найдёте широкий выбор техники, сможете сравнить предложения и выбрать лучшее для себя или вашего бизнеса. Так же вы можете получить услуги от наших партнёров.
          </p>
          <div class="hero-btns">
            <router-link to="/uav" class="hero-btn">Перейти к БПЛА</router-link>
            <router-link to="/helicopters" class="hero-btn secondary">Перейти к услугам</router-link>
          </div>
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
    </div>
    <div class="ads-block right">
      <h4>Реклама справа</h4>
      <p>Обеспечьте себе лучшие условия сотрудничества!</p>
    </div>
  </section>
</template>

<script setup>
// Здесь можно добавить логику, если потребуется
</script>

<style scoped>
.homepage {
  display: flex;
  padding: 32px 0;
  background: linear-gradient(120deg, #232526 0%, #4761e8 100%);
  min-height: 100vh;
  color: #fff;
  align-items: stretch;
}

.ads-block {
  width: 150px;
  background: rgba(255, 255, 255, 0.1);
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  text-align: center;
  margin: 0 10px;
}

.ads-block h4 {
  margin-bottom: 8px;
  font-weight: 700;
  color: #00cfff;
}

.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
}

.hero {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 48px;
  margin-bottom: 48px;
  width: 100%;
}

.hero-content {
  max-width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-content h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 18px;
  color: #00cfff;
  letter-spacing: 1.5px;
  font-family: 'Montserrat', Arial, sans-serif;
}

.hero-content p {
  font-size: 1.18rem;
  margin-bottom: 28px;
  line-height: 1.6;
  color: #e0e0e0;
}

.hero-btns {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.hero-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00cfff;
  color: #232526;
  font-weight: 700;
  padding: 12px 28px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1.08rem;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0, 207, 255, 0.08);
  border: none;
  outline: none;
}

.hero-btn:hover {
  background: #009bb3;
  color: #fff;
}

.hero-btn.secondary {
  background: #fff;
  color: #00cfff;
  border: 1.5px solid #00cfff;
}

.hero-btn.secondary:hover {
  background: #00cfff;
  color: #fff;
}

.hero-image img {
  max-width: 450px;
  width: 100%;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.18);
  background: #fff;
  object-fit: cover;
}

.features {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  width: 100%;
}

.feature-card {
  background: #292b2c;
  border-radius: 16px;
  padding: 32px 24px;
  max-width: 320px;
  min-width: 220px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(44, 62, 80, 0.10);
  transition: transform 0.18s, box-shadow 0.18s;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 6px 24px rgba(0, 207, 255, 0.10);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
  display: block;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #00cfff;
  letter-spacing: 1px;
}

.feature-card p {
  font-size: 1rem;
  color: #e0e0e0;
  line-height: 1.5;
}

/* Адаптивность */
@media (max-width: 900px) {
  .homepage {
    padding: 16px 0;
    flex-direction: column;
  }

  .ads-block {
    width: 100%;
    margin: 16px 0;
  }

  .content-wrapper {
    padding: 0 4vw;
  }

  .hero {
    flex-direction: column;
    gap: 24px;
    text-align: center;
  }

  .hero-content {
    max-width: 100%;
    padding: 0 4vw;
  }

  .hero-content h1 {
    font-size: 1.5rem;
    margin-bottom: 12px;
  }

  .hero-content p {
    font-size: 1rem;
    margin-bottom: 18px;
  }

  .hero-btns {
    gap: 10px;
  }

  .hero-btn, .hero-btn.secondary {
    font-size: 0.98rem;
    padding: 10px 18px;
    border-radius: 8px;
  }

  .hero-image img {
    max-width: 90vw;
    border-radius: 12px;
    margin-bottom: 12px;
  }

  .features {
    flex-direction: column;
    gap: 18px;
    padding: 0 4vw;
  }

  .feature-card {
    max-width: 100%;
    min-width: 0;
    padding: 20px 10px;
    border-radius: 12px;
  }

  .feature-icon {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .feature-card h3 {
    font-size: 1.1rem;
    margin-bottom: 6px;
  }

  .feature-card p {
    font-size: 0.98rem;
  }
}
</style>