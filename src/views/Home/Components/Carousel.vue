<template>
  <v-carousel
    cycle
    height="500"
    hide-delimiter-background
    show-arrows-on-hover
  >    

  <v-carousel-item v-for="image in images" :key="image.url" :src="image.url">  
    
      <v-img
      max-height="250"
      max-width="250"
      class="fill-height ma-0"      
      src="../../../assets/imgs/Logo_redondo1.png" alt="Logo"></v-img>
    
  </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        images:[
          {url: require("../../../assets/imgs/paramo-de-chingaza.jpg")},
          {url: require("../../../assets/imgs/suesca-cundinamarca.jpg")},
          {url: require("../../../assets/imgs/laguna.jpg")},
          {url: require("../../../assets/imgs/en-la-chorrera-de-choachi.jpg")},
          {url: require("../../../assets/imgs/suesca-cun.png")},
        ],
      }
    },
  }
</script>

<style>
/* .textShadow{
  text-shadow: 4px 3px rgba(red, green, blue, alpha);
} */
</style>