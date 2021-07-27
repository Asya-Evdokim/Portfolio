<template>
<section class="gallery" id="gallery">
  <h2 class="gallery__title title container">Фотографии<span class="dot">.</span></h2>
  <p class="gallery__subtitle subtitle container">Вот маленькая коллекция моих фотографий</p>
  <div class="gallery__items grid">
    <figure  v-for="(src, index) in imgs"
      :key="index"
      class="pic gallery__item"
      @click="() => showImg(index)">
      <img :src="src"  alt="" class="gallery__img"></figure>

     <vue-easy-lightbox
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide">
    </vue-easy-lightbox>
  </div>
</section>
</template>

<script>

export default {
  name: "HomeGallery",

  data() {
    return {
      imgs: [
        '/gallery/img-1.jpg',
        '/gallery/img-7.jpg',
        '/gallery/img-8.jpg',
        '/gallery/img-4.jpg',
        '/gallery/img-5.jpg',
        '/gallery/img-6.jpg'
      ],  
      visible: false,
      index: 0   // default: 0
    }
  },
  methods: {

    showImg (index) {
        this.index = index
        this.visible = true
      },
    showSingle() {
      this.show()
    },
    show() {
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  }
}
</script>

<style scoped lang="scss">
.gallery {
 padding-top: 120px;
  overflow: hidden;

  @include respond-to('xs') {
    padding-top: 40px;
  }
  
  .gallery__subtitle {
    padding-top: 30px;
    padding-bottom: 30px;
  }


  .gallery__items {
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    
    @include respond-to('sm') {
      grid-gap: 5px;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
    }
  }
}
</style>