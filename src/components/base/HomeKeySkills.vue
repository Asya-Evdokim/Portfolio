<template>
  <div class="skill-bg">
    <section class="skillset container" id="skill">
      <div class="skillset__card skill">
        <h2>
          <span>Ключевые</span><span class="margin">навыки<span class="dot">.</span></span>
        </h2>
        <p class="card-text">Working at Facebook has taught me
          a lot about how to understand users, solve
          problems and build great products.</p>
      </div>
      <div class="skillset__card">

        <h3 class="card-title">Lorem ipsum.</h3>
        <p class="card-text">Working at Facebook has taught me
          a lot about how to understand users, solve
          problems and build great products.</p>
      </div>
      <div class="skillset__card">

        <h3 class="card-title">Lorem ipsum.</h3>
        <p class="card-text">Working at Facebook has taught me
          a lot about how to understand users, solve
          problems and build great products.</p>
      </div>
      <div class="skillset__card">

        <h3 class="card-title">Lorem ipsum.</h3>
        <p class="card-text">Working at Facebook has taught me
          a lot about how to understand users, solve
          problems and build great products.</p>
      </div>
      <div class="skillset__card">

        <h3 class="card-title">Lorem ipsum.</h3>
        <p class="card-text">Working at Facebook has taught me
          a lot about how to understand users, solve
          problems and build great products.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
name: "HomeKeySkills"
}
</script>

<style scoped lang="scss">
.skill-bg {
  background-color: $color-main;

  .skillset {
    padding-top: 252px;
    padding-bottom: 120px;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 48px;

    @include respond-to('lg') {
      padding-top: 216px;
    }

    @include respond-to('md') {
      padding-top: 120px;
      grid-template-columns: repeat(2, 1fr);
    }

    @include respond-to('xs') {
      padding-top: 40px;
      grid-auto-flow: row;
      grid-template-columns: 1fr;
    }

    .skill {
      h2 {
        font-size: 78px;
        line-height: 100%;
        font-weight: 700;
        padding-bottom: 24px;
        display: flex;
        flex-direction: column;

        @include respond-to('lg') {
          font: $font-size-menu;
          flex-direction: row;
        }

        @include respond-to('xs') {
          font: 700 32px / 38px $font-base;
        }

        .margin {
          margin-left: 280px;

          @include respond-to('lg') {
            margin-left: 10px;
          }
        }
      }
    }

    .skillset__card {
      overflow: hidden;

      .card-title {
        font: $font-size-h3;
        color: #fff;
      }

      .card-text {
        font: $font-size-small;
        padding-top: 12px;
      }
    }

    .skillset__card:first-child {
      grid-column: 1/3;
      grid-row: 1/3;

      @include respond-to('xs') {
        grid-column: auto;
      }
    }
  }
}
</style>