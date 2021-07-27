<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__copyright">
        <span class="footer__text">
          Not Copyright 2021 • Asya Evdokimova
        </span>
      </div>
    </div>
  </footer>
</template>

<script>



export default {
  name: "Footer",
  components: {
    },
}
</script>

<style scoped lang="scss">
.footer {
  padding: 32px 0;
  background-color: #000000;

  .footer__copyright {
    .footer__text {
      color: white;

      @include respond-to('sm') {
        font-size: 10px;
      }
    }
  }
}
</style>