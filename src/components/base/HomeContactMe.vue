<template>
  <section class="container" id="contact">
    <div class="contact">
      <h2 class="contact__title title">Контакты<span class="dot">.</span></h2>
      <ul class="contact__list">
        <li class="contact__item">
          <a href="tel:+79370934455" class="social__link" target="_blank">
            <Phone/>
            <h3 class="social-title">Телефон:</h3>
            <span class="social-text">8-937-093-44-55</span>
          </a>
        </li>
        <li class="contact__item">
          <a href="mailto:evdokim.asya@yandex.ru?subject=Вопрос по трудоустройству" class="social__link" target="_blank">
            <Mail/>
            <h3 class="social-title">Почта:</h3>
            <span class="social-text">evdokim.asya@yandex.ru</span>
          </a>
        </li>
        <li class="contact__item">
          <a href="https://github.com/Asya-Evdokim" class="social__link" target="_blank">
            <Git/>
            <h3 class="social-title">GitHub:</h3>
            <span class="social-text">Asya-Evdokim</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>

import Phone from "../icon/Phone";
import Mail from "../icon/Mail";
import Git from "../icon/Git";
export default {
name: "HomeContactMe",
  components: {Git, Mail, Phone}
}
</script>

<style scoped lang="scss">
.contact {
  height: 50vh;
  padding-top: 120px;
  padding-bottom: 120px;
  overflow: hidden;
  display: flex;
  align-items: center;

  @include respond-to('sm') {
    height: auto;
    display: block;
  }

  @include respond-to('xs') {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .contact__title {
    padding-bottom: 40px;
    transform: rotate(-90deg) translate(0px, -164px);

    @include respond-to('lg') {
      transform: rotate(-90deg) translate(0px, -103px);
    }

    @include respond-to('sm') {
      transform: none;
    }
  }

  .contact__list {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include respond-to('md') {
      flex-direction: column;
    }

    .contact__item {
      text-align: center;
      padding-bottom: 40px;

      .social__link {
        display: block;
        width: 100%;
        height: auto;

        &:hover {
          ::v-deep svg path {
            fill: $color-prime;
          }
        }
      }

      .social-title {
        padding-top: 20px;
        font: $font-size-h3;
      }
    }
  }
}
</style>