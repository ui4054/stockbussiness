<template>
  <div class="container">
    <br><br>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
     
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/foto_1.jpg"
            alt="image slot"
          >
        </template>
        <h1>Nuestros productos</h1>
        <p>Te ofrecemos productos de excelente calidad y precios inigualables</p>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/foto_2.jpg"
            alt="image slot"
          >
        </template>
        <h1>Busca y encuentra lo que necesites</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/foto_3.jpg"
            alt="image slot"
          >
        </template>
        <h1>Realiza tu pedido</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/foto_4.jpg"
            alt="image slot"
          >
        </template>
        <h1>Nuestros envios llegan en el menor tiempo posible </h1>
      </b-carousel-slide>

    </b-carousel>
    <br><br>

    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
     /*  onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      } */
    }
  }
</script>