<template>
  <div class="hero" id="home" >
    <img class="hero__img" src="~@/assets/img/logo4.png" alt="Тут должна быть моя фотография">
    <div class="container hello">
      <div class="hero__content">
        <h2 id="hero-title">Привет! Я Настя —</h2>
        <p id="hero-text">Junior Front-end разработчик</p>
        <a href="#contact" class="hero__btn btn wave-btn">
          <span class="wave-btn__text">Напишите мне</span>
          <span class="wave-btn__waves"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
name: "HomeFirstBlock",
}
</script>

<style  scoped lang="scss">
.hero {
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: rgb(255,255,255);
  background: linear-gradient(86deg, rgba(255,255,255,1) 19%, rgba(254,201,201,1) 100%, rgba(254,201,201,1) 100%);

  @include respond-to('xs') {
    height: auto;
  }

  .hero__img {
    position: absolute;
    right: 0;
    top: 140px;
    @include respond-to('xs') {
      position: relative;
      top: 0;
      width: 100%;
      padding: 68px 0;
      box-sizing: border-box;
    }
  }

    .hero__content {
    padding-top: 30vh;
    color: $color-text;
    position: relative;

    @include respond-to('md') {
      padding-top: 14vh;
    }

    @include respond-to('xs') {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 0;
      padding-bottom: 20px;
    }

    h2 {
      font: $font-size-h1;

      @include respond-to('lg') {
        font: $font-size-menu;
      }

      @include respond-to('xs') {
        padding-right: 0;
        font: 700 30px / 38px $font-base;
      }
    }

    p {
      font: $font-size-high;
      text-transform: uppercase;
      padding-top: 10px;
      padding-bottom: 48px;

      @include respond-to('lg') {
        font: 700 34px / 140% $font-base;
      }

      @include respond-to('xs') {
        padding-right: 0;
        font: 700 30px / 38px $font-base;
      }
    }

    .wave-btn {
      width: 280px;
      height: 60px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;

      transition: all 0.8s ease 0s;

      &:hover {
        transition: all 0.8s ease 0.2s;
        box-shadow: 0 0 40px rgba(254, 217, 201, 0.6);

        .wave-btn__waves {
          top: -50px;
          transition: 0.3s;
        }
      }

      .wave-btn__text {
        color: $color-text-btn;
        text-shadow: 1px 1px 1px #000;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 8px;
        position: relative;
        z-index: 1;
      }

      .wave-btn__waves {
        position: absolute;
        width: 280px;
        height: 280px;
        top: 25px;
        left: 0;
        background-color: $color-prime;
        box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.3);

        transition: all 0.08s ease 0s;

        &:after,
        &:before {
          content: " ";
          position: absolute;
          top: 0;
          left: 50%;
          width: 250%;
          height: 250%;

          transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
        }

        &:before {
          background-color: #4f4f4f;
          border-radius: 48%;

          animation: waves 5s infinite linear;
        }
        &:after {
          background-color: rgba(0,0,0,0.5);
          border-radius: 44%;

          animation: waves 10s infinite linear;
        }
        @keyframes waves {
          0% {
            transform: translate3d(-50%, -96%, 0) rotate(0deg) scale(1);
          }
          100% {
            transform: translate3d(-50%, -96%, 0) rotate(360deg) scale(1);
          }
        }
      }
    }
  }
}
</style>