<template>
<div class="container">
  <div class="about" id="about">
    <h2 class="about__title title">Обо мне<span class="dot">.</span></h2>
    <p class="about__subtitle subtitle">Еще вчера я не знала, что такое HTML, а сегодня <br>у меня есть свой сайт.</p>
    <div class="about__info">
      <img src="~@/assets/img/about.jpg" alt="Тут должна быть моя фотография">
      <div class="info">
        <h3 class="info-title">Меня зовут Настя Евдокимова.</h3>
        <p class="info-text"> Добро пожаловать на мой первый сайт.
          Ещё недавно я понятия не имела, кто такой верстальщик,
          а теперь я нашла тренажёры по HTML и CSS и поставила перед собой цель — стать им.
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "HomeAboutMe"
}
</script>

<style scoped lang="scss">
.about {
  padding-top: 120px;
  height: 864px;

  @include respond-to('lg') {
    height: 752px;
  }
  @include respond-to('md') {
    height: auto;
  }
  @include respond-to('xs') {
    padding-top: 40px;
  }

  .about__title {


  }

  .about__subtitle {
    position: relative;
    font-size: 34px;
    line-height: initial;
    padding-left: 200px;
    padding-top: 40px;
    padding-bottom: 30px;



    @include respond-to('lg') {
      font-size: 24px;
      padding-top: 20px;
    }
    @include respond-to('md') {
      br {
        display: none;
      }
      padding-left: 0;
      font-size: 22px;
    }
    @include respond-to('xs') {
      font: 18px / 24px $font-base;
    }

    &:before {
      content: " ";
      display: block;
      position: absolute;
      width: 300px;
      left: 184px;
      bottom: 82px;
      z-index: -1;
      height: 14px;
      background-color: $color-prime;

      @include respond-to('lg') {
        width: 200px;
        left: 190px;
        bottom: 68px;
        height: 8px;
      }

      @include respond-to('md') {
        left: 0;
        bottom: 36px;
      }

      @include respond-to('xs') {
        display: none;
      }
    }
  }

  .about__info {
    display: flex;

    @include respond-to('xs') {
      flex-direction: column;
    }

    img {
      object-fit: cover;
      //height: 720px;

      @include respond-to('lg') {
        width: 55%;
        height: auto;
      }
      @include respond-to('xs') {
        width: 100%;
        height: auto;
      }
    }

    .info {
      padding: 80px 20px;
      .info-title {
        font: $font-size-h3;
        padding-bottom: 30px;
      }

      .info-text {
        font: $font-size-small;
      }
    }
  }
}
</style>