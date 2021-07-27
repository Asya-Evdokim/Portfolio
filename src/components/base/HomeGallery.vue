<template>
<section class="gallery" id="gallery">
  <h2 class="gallery__title title container">Фотографии<span class="dot">.</span></h2>
  <p class="gallery__subtitle subtitle container">Вот маленькая коллекция моих фотографий</p>
  <div class="gallery__items grid">
    <figure class="gallery__item"><img src="~@/assets/img/gallery/img-1.jpg" alt="" class="gallery__img"></figure>
<!--    <figure class="gallery__item"><img src="~@/assets/img/gallery/img-2.jpg" alt="" class="gallery__img"></figure>-->
<!--    <figure class="gallery__item"><img src="~@/assets/img/gallery/img-3.jpg" alt="" class="gallery__img"></figure> -->
    <figure class="gallery__item"><img src="~@/assets/img/gallery/img-4.jpg" alt="" class="gallery__img"></figure>
    <figure class="gallery__item"><img src="~@/assets/img/gallery/img-5.jpg" alt="" class="gallery__img"></figure>
    <figure class="gallery__item"><img src="~@/assets/img/gallery/img-7.jpg" alt="" class="gallery__img"></figure>
    <figure class="gallery__item"><img src="~@/assets/img/gallery/img-6.jpg" alt="" class="gallery__img"></figure>
    <figure class="gallery__item"><img src="~@/assets/img/gallery/img-8.jpg" alt="" class="gallery__img"></figure>
  </div>
</section>
</template>

<script>
export default {
  name: "HomeGallery"
}
</script>

<style scoped lang="scss">
.gallery {
 padding-top: 120px;
  overflow: hidden;
  //max-height: calc(100vh - 67px);

  @include respond-to('xs') {
    padding-top: 40px;
  }
  .gallery__title {
  }

  .gallery__subtitle {
    padding-top: 30px;
    padding-bottom: 30px;
  }


  .gallery__items {
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    //grid-template-rows: repeat(8,1fr);


    @include respond-to('sm') {
      grid-gap: 5px;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      //grid-template-rows: repeat(2, 100px);
    }

    @include respond-to('xs') {
      grid-auto-flow: row;
      grid-template-columns: 1fr;
    }

    .gallery__item {

      .gallery__img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);

        &:hover {
          transition: filter .7s ease-in-out;
          -webkit-filter: grayscale(0%);
          filter: grayscale(0%);
        }
      }
     /* &:first-child {
        grid-column: 1 / span 4;
        grid-row: 1 / span 8;
      }

      &:nth-child(2) {
        grid-column: 5 / span 3;
        grid-row: 1 / span 3;
      }

      &:nth-child(3) {
        grid-column: 8 / span 3;
        grid-row: 6 / span 3;
      }

      &:nth-child(4) {
        grid-column: 5 / span 3;
        grid-row: 4 / span 5;
      }

      &:nth-child(5) {
        grid-column: 8 / span 3;
        grid-row: 1 / span 5;
      }

      &:nth-child(6) {
        grid-column: 11 / span 3;
        grid-row: 1 / span 4;
      }

      &:nth-child(7) {
        grid-column: 11 / span 3;
        grid-row: 5 / span 4;
      } */
    }
  }
}
</style>