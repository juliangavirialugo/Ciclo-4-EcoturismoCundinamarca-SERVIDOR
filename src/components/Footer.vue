<template>
  <v-footer
    
    light
    padless
  >
    <v-card
      class="flex"
      flat
      tile
      
    >
      <v-card-title class="teal">
        <subtitle-1 class="
        Medium weight text.
        font-text Italic text
        text-center"
        >Te esperamos en nuestras redes sociales</subtitle-1>

        <v-spacer></v-spacer>

        <v-btn href= "https://www.facebook.com/"      
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            mdi-facebook
          </v-icon>
        </v-btn>

        <v-btn href= "https://www.instagram.com/"      
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            mdi-instagram
          </v-icon>
        </v-btn>

        <v-btn href= "https://www.twitter.com/"      
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            mdi-twitter
          </v-icon>
        </v-btn>

      </v-card-title>

      <v-card-text class="py-2 black--text text-center">
        {{ new Date().getFullYear() }} — <strong>Ecoturismo Cundinamarca</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    
  }
</script>