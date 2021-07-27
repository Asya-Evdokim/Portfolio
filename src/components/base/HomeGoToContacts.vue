<template>
<section class="go-to-git container">
  <h2 class="go-to-git__title">Здесь должны быть мои проекты, этот сайт уже можно найти там.</h2>
  <a href="https://github.com/Asya-Evdokim" target="_blank" class="go-to-git__btn">GitHub</a>
</section>
</template>

<script>
export default {
name: "HomeGoToContacts"
}
</script>

<style scoped lang="scss">
.go-to-git {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: calc(100vh - 67px);
  text-align: center;

  .go-to-git__title {
    font: $font-size-menu;
    padding-bottom: 48px;

    @include respond-to('lg') {
      font-size: 32px;
    }
  }

  .go-to-git__btn {
    background-color: $color-text;
    color: $color-text-btn;
    padding: 22px 112px;

    transition: all 0.8s ease 0s;

    &:hover {
      transition: all 0.8s ease 0.2s;
      box-shadow: 0 0 40px rgba(254, 217, 201, 0.6);
      transform: perspective(1px) scale(1.1) translateZ(0);
      text-shadow: 1px 1px 1px #000;
      background-color: #fed9c9;
      border-radius: 10px;
    }
  }
}
</style>