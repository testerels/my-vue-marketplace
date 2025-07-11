<template>
  <footer class="footer">
    <div class="footer-left">
      <div>
        Все права защищены.
      </div>
      <div>
        Информация на сайте актуальна на текущую дату.
      </div>
    </div>
    <div class="footer-right">
      <div>
        Контакты: <a href="tel:+12345678910">+1 234 567 8910</a> &nbsp;|
        <a href="#">↑</a>
      </div>
      <div>
        <a href="#">Политика конфиденциальности</a> &nbsp;|&nbsp;
        <a href="#">Условия обслуживания</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
  border-top: 1px solid #444;
  background: #232526;   /* ← тёмный фон */
  color: #fff;           /* ← светлый текст */
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.2rem 2.5vw 1.5rem 2.5vw;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.footer-left {
  max-width: 50vw;
  font-size: 0.80rem !important;
  font-weight: 400;
}

.footer-right {
  text-align: right;
  font-size: 0.80rem !important;
  font-weight: 400;
}

.footer a {
  color: #fff;
}
.footer a:hover {
  color: #00cfff;
}

@media (max-width: 900px) {
  .footer {
    flex-direction: column;
    align-items: flex-start;
    font-size: 0.85rem;
    padding: 1rem 1vw;
  }
  .footer-left, .footer-right {
    max-width: 100%;
    text-align: left;
    margin-bottom: 0.5rem;
  }
}
</style>