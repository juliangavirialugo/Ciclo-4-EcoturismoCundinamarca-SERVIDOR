<template>
   <div>
    <!--BARRA DE IZQUIERDA -->
       <v-navigation-drawer 
        dark 
        v-model="drawer"
        absolute         
        temporary 
        app 
        class="green darken-1">
           <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router
          :to="{ name: item.name } "
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    
        </v-navigation-drawer>

<!--BARRA SUPERIOR -->
      
        <v-app-bar         
            app
            color= "light-green darken-4"
            src="../assets/imgs/Barrasuperior4.png"
            dark
            prominent
            shrink-on-scroll
            fade-img-on-scroll
            scroll-threshold="200"
            extension-height="500"
            weight="200"
            absolute
            
        >


            <v-app-bar-nav-icon @click="drawer= !drawer"></v-app-bar-nav-icon>

            
            

        <!-- <v-btn @click="CambiarTema" text rounded>Cambiar tema</v-btn>
     -->
        
        </v-app-bar>
    </div> 
</template>

<script>
export default {

  // methods: {
  //     CambiarTema(){
  //       this.$vuetify.theme.dark = !this.$vuetify.theme.dark
  //     }
  //   },

    data(){
        return{
            drawer: false, 
            items: [
                {title: "Home", icon: "mdi-home", name: "Home"},
                {title: "Actividades", icon: "mdi-clipboard-list", name: "Actividades"},
                {title: "Blog", icon: "mdi-dialpad", name: "Blog"},
                {title: "Nosotros", icon: "mdi-domain", name: "Nosotros"},
            ]
        }
    }
    
}
</script>