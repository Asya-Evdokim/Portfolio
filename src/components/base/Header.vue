<template>
  <header class="header">
    <div class="container grid">
      <div class="header__logo">
        <a href="#home">A<span class="dot">.</span></a>
      </div>
      <div class="burger">
        <input type="checkbox" id="checkbox" class="burger__checkbox">
        <label for="checkbox" class="burger__button">
          <span class="burger__button-line"></span>
          <span class="burger__button-line"></span>
          <span class="burger__button-line"></span>
        </label>
        <div class="burger__menu">
          <a href="#about" class="burger__menu-link">Обо мне</a>
          <a href="#skill" class="burger__menu-link">Ключевые навыки</a>
          <a href="#gallery" class="burger__menu-link">Фотографии</a>
          <a href="#contact" class="burger__menu-link">Контакты</a>
        </div>
      </div>
      <nav class="header__nav">
        <ul class="nav__list">
          <li class="nav__item"><a href="#about" class="nav__link">Обо мне</a></li>
          <li class="nav__item"><a href="#skill" class="nav__link">Ключевые навыки</a></li>
          <li class="nav__item"><a href="#gallery" class="nav__link">Фотографии</a></li>
          <li class="nav__item"><a href="#contact" class="nav__link">Контакты</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>


<script>


export default {
  name: "Header",
  components: {
    },
}
</script>

<style scoped lang="scss">

.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 2;
  background: rgb(255,255,255);
  background: linear-gradient(86deg, rgba(255,255,255,1) 19%, rgba(254,201,201,1) 100%, rgba(254,201,201,1) 100%);

  .header__logo {
    grid-column: 2 span;
    font: $font-size-high;
    color: $color-text;
  }

  .burger {
    display: none;

    @include respond-to('sm') {
      display: block;
    }

    .burger__checkbox {
      display: none;
      &:checked ~ .burger__menu {
        right: 0;
      }

      &:checked ~ .burger__button .burger__button-line:nth-child(1) {
        transform: rotate(45deg);
        top: 8px;
      }

      &:checked ~ .burger__button .burger__button-line:nth-child(2) {
        opacity: 0;
      }

      &:checked ~ .burger__button .burger__button-line:nth-child(3) {
        transform: rotate(-45deg);
        top: -6px;
      }
    }

    .burger__button {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
      z-index: 1;

      &:hover {
        .burger__button-line {
          background: $color-prime;
        }
      }

      .burger__button-line {
        display: block;
        width: 30px;
        height: 3px;
        border-radius: 5px;
        background: #000;
        margin: 2px 0;
        position: relative;
        transition: all .2s;
      }
    }

    .burger__menu {
      position: fixed;
      top: 0;
      right: -100%;
      width: 190px;
      height: 100vh;
      background: #FFFFFF;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      padding: 70px 20px 40px;
      transition: right .4s;

      .burger__menu-link {
        font-size: 14px;
        line-height: 20px;
        color: #000000;
        text-transform: uppercase;
        text-decoration: none;
        margin-top: 16px;
        padding: 10px 10px;
        transition: all .2s linear;
      }
    }
  }

  .header__nav {
    display: flex;
    justify-content: flex-end;
    grid-column: 10 span;

    @include respond-to('sm') {
      display: none;
    }

    .nav__list {
      display: flex;
      align-self: center;

      .nav__item {
        &:not(:last-child) {
          margin-right: 40px;
        }
        .nav__link {
          font: $font-size-small;
          text-transform: uppercase;
          position: relative;
          line-height: 1;

          &:after {
            content: " ";
            display: block;
            position: absolute;
            left: 0;
            bottom: 4px;
            z-index: -1;
            width: 0;
            height: 4px;
            background-color: $color-prime;
            transition: width 0.3s ease-out;
          }

          &:hover:after,
          &:focus:after {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>