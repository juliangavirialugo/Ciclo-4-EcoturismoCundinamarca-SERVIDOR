<template>
  <div id="app" class="top-container">    
      <Carousel/>    
      <Body/>
   

  </div>    
</template>


<script>
  import Carousel from "./Components/Carousel.vue";  
  import Body from "../../components/Body.vue";
 
  export default {
    name: 'Home',
    components: {
      Carousel,     
      Body, 
    }
  }
</script>
