<template>
  <section class="aboutpage">
    <div class="about-hero">
      <div class="about-hero-content">
        <h1>
          <span class="accent"> </span>
        </h1>
        <h1>
          <span>О нашей работе</span>
        </h1>
        <p>
          Мы — лидеры в области проектирования и создания беспилотных летательных аппаратов. На нашем маркетплейсе вы можете приобрести БПЛА и услуги от наших партнёров.
        </p>
      </div>
      <div class="about-hero-images">
        <img src="@/assets/палки.jpg" alt="Вертолёт" class="sub-img" />
      </div>
    </div>
    <div class="about-features">
      <div class="feature-card">
        <span class="feature-icon">🚁</span>
        <h3>Инновации</h3>
        <p>Используем современные технологии и материалы для создания уникальных аппаратов.</p>
      </div>
      <div class="feature-card">
        <span class="feature-icon">👨‍🔬</span>
        <h3>Экспертность</h3>
        <p>В нашей команде — лучшие инженеры и конструкторы отрасли.</p>
      </div>
      <div class="feature-card">
        <span class="feature-icon">🤝</span>
        <h3>Партнёрство</h3>
        <p>Открыты для сотрудничества с производителями и заказчиками по всему миру.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.aboutpage {
  min-height: 100vh;
  background: linear-gradient(120deg, #232526 0%, #005db4 100%);
  padding: 32px 0;
  color: #fff;
}

.about-hero {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 48px;
  margin-bottom: 48px;
}

.about-hero-content {
  max-width: 480px;
}

.about-hero-content h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 18px;
  color: #00cfff;
}

.accent {
  background: linear-gradient(90deg, #ffffff 0%, #6bf1f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-hero-content p {
  font-size: 1.18rem;
  margin-bottom: 28px;
  line-height: 1.6;
  color: #e0e0e0;
}

.about-hero-images {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 220px;
  margin-left: 28px;
}

.main-img {
  width: 340px;
  max-width: 80vw;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(0,207,255,0.18), 0 2px 8px rgba(0,0,0,0.18);
  object-fit: cover;
  border: 3px solid #232526;
  position: relative;
  z-index: 2;
  background: #fff;
}

.sub-img {
  width: 400px;
  max-width: 200vw;
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(0,207,255,0.18), 0 2px 8px rgba(0,0,0,0.12);
  object-fit: cover;
  position: absolute;
  left: 60%;
  top: 60%;
  border: 3px solid #232526;
  background: #fff;
  z-index: 1;
  opacity: 0.92;
  transform: translate(-50%, -50%);
}

.about-features {
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
  .aboutpage {
    padding: 16px 0;
  }
  .about-hero {
    flex-direction: column;
    gap: 24px;
    text-align: center;
    margin-bottom: 32px;
    padding: 0 8px;
  }
  .about-hero-content {
    max-width: 100%;
    padding: 0 4vw;
  }
  .about-hero-content h1 {
    font-size: 1.5rem;
    margin-bottom: 12px;
  }
  .about-hero-content p {
    font-size: 1rem;
    margin-bottom: 18px;
  }
  .about-hero-images {
    min-width: 0;
    width: 100%;
    position: static;
    margin-bottom: 0;
  }
  .about-hero-images .sub-img {
    position: static;
    width: 90vw;
    max-width: 95vw;
    min-width: 0;
    border-radius: 12px;
    margin: 0 auto 12px auto;
    box-shadow: 0 2px 8px rgba(0,207,255,0.12);
    transform: none;
    left: auto;
    top: auto;
  }
  .about-features {
    flex-direction: column;
    gap: 18px;
    padding: 0 4vw;
  }
  .feature-card {
    max-width: 100%;
    min-width: 0;
    padding: 20px 10px;
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