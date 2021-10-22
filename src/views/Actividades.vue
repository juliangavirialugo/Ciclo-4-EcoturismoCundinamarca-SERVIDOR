<template>
    <div>
        <v-container>
            <v-row no-gutters justify="center" align="center">
                <h5 class="display-1 font-weight-black mt-3">
                    Planes <span class="font-weight-regular"> Ecoturísticos </span>
                </h5>
            </v-row>
        </v-container>
        <div class="d-flex justify-center flex-wrap" tile>
    <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="../assets/imgs/laguna.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Laguna de Guatavita
    </v-card-title>

    <v-card-subtitle>
      Este plan está a solo hora y media de Bogotá!
    </v-card-subtitle>

    <div class="text-center">
    <v-rating
      v-model="rating"
      icon-label="custom icon label text {0} of {1}"
    ></v-rating>
    </div>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Más
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text 
        class="
        font-weight-light
        text-justify
        ">
          Un hermoso cuerpo de aguas color verde esmeralda en las que se desenvuelve la leyenda de El Dorado, un misticismo que nació hace cientos de años con los indígenas Muiscas y se reforzó con la colonia española.
          Para llegar al municipio de Guatavita desde Bogotá, debes ir a la Terminal de Transportes Salitre y tomar un bus de Flota Valle de Tenza.
          Tarifas: colombianos $13.000 COP y extranjeros $18.000 COP. Precios sujetos a cambio.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

<v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="../assets/imgs/en-la-chorrera-de-choachi.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      La Chorrera de Choachí
    </v-card-title>

    <v-card-subtitle>
      Este plan está a solo hora y media de Bogotá!
    </v-card-subtitle>

    <div class="text-center">
    <v-rating
      v-model="rating"
      icon-label="custom icon label text {0} of {1}"
    ></v-rating>
    </div>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Más
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text
        class="
        font-weight-light
        text-justify
        "        
        >          
          En el municipio de Choachí se encuentra el Parque Aventura La Chorrera, uno de los sitios turísticos cerca a Bogotá, donde encontrarás las Cascadas El Chiflón y La Chorrera, paseos a caballo, caminatas por el bosque de niebla, espeleismo y rappel.
          Para llegar a La Chorrera de Choachí debes tomar un bus de Transoriente o Cootransfómeque en la Calle 6 con Av. Caracas. 
          El bus te dejará sobre la vía que conduce al parque, por lo que deberás caminar hasta la taquilla o tomar un moto-taxi. En el parque hay parqueadero y para llegar en carro o moto puedes poner Parque Aventura La Chorrera en Google Maps o Waze.
          Ingreso al Parque Aventura La Chorrera $35.000 COP. Tarifa sujeta a cambio.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="../assets/imgs/suesca-escalada.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Suesca
    </v-card-title>

    <v-card-subtitle>
      A una hora de Bogotá y es conocido como el parque de escalada más grande de Colombia!
    </v-card-subtitle>

    <div class="text-center">
    <v-rating
      v-model="rating"
      icon-label="custom icon label text {0} of {1}"
    ></v-rating>
    </div>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Más
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text
        class="
        font-weight-light
        text-justify
        " 
        >
          Es uno de los pueblos cerca de Bogotá que puedes visitar cuando quieras, un lugar perfecto para divertirte. Allí puedes aprender a escalar o probar una de las 300 rutas que hay disponibles.
          En Suesca también puedes hacer rappel, bungee jumping, ciclomontañismo, caminar por las antiguas vías del tren, o pasar el día haciendo espeleología, una experiencia bajo tierra que te permitirá conocer más de la región.
          Llegar por tu cuenta es muy fácil, solo debes ir al Portal Norte de Transmilenio y tomar un bus que demora 1 hora en llegar.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="../assets/imgs/La-vega.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      La Vega
    </v-card-title>
 
    <v-card-subtitle>
      Este plan está a solo una hora y cuarenta minutos de Bogotá!
    </v-card-subtitle>

    <div class="text-center">
    <v-rating
      v-model="rating"
      icon-label="custom icon label text {0} of {1}"
    ></v-rating>
    </div>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Más
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text
        class="
        font-weight-light
        text-justify
        " >
          Un destino con un agradable clima cálido que permanece casi siempre en 23ºC, ideal para pasar un fin de semana en la naturaleza.
          La Vega es uno de esos hermosos pueblitos cercanos a Bogotá, donde puede practicar algunos deportes extremos, ciclismo de montaña, turismo ecológico o simplemente buscar tranquilidad y descanso. 
          Es uno de los sitios turísticos de Cundinamarca de mayor riqueza hídrica y cultural, y a 7 kilómetros del pueblo se encuentra el Parque Ecológico Laguna El Tabacal.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="../assets/imgs/parque-chingaza.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Parque nacional natural Chingaza
    </v-card-title>

    <v-card-subtitle>
      Este plan está a solo una hora de Bogotá!
    </v-card-subtitle>

    <div class="text-center">
    <v-rating
      v-model="rating"
      icon-label="custom icon label text {0} of {1}"
    ></v-rating>
    </div>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Más
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text
        class="
        font-weight-light
        text-justify
        " 
        >
          El Parque Nacional Natural Chingaza es un tesoro natural en plena cordillera oriental de los Andes, está compartido por 7 municipios de Cundinamarca y 4 municipios del Meta, y es el lugar donde yacen las lagunas Chingaza y Siecha.
          Las lagunas de Siecha son un conjunto de lagunas y lagunitas de origen glacial, rodeadas por una cadena montañosa conocida con el nombre de Cuchilla de Siecha.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

     
  <v-card
    class="mx-auto"
    max-width="344"
    
  >
    <v-img
      src="../assets/imgs/zipaquira.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Zipaquirá
    </v-card-title>

    <v-card-subtitle>
      Este plan está a solo hora y media de Bogotá!
    </v-card-subtitle>

    <div class="text-center">
    <v-rating
      v-model="rating"
      icon-label="custom icon label text {0} of {1}"
    ></v-rating>
    </div>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Más
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text
        class="
        font-weight-light
        text-justify
        " 
        >
          En Zipaquirá queda la Catedral de Sal, un hermoso templo católico construido en una mina a 180 metros bajo tierra, una joya artística y arquitectónica considerada una de las 7 maravillas de Colombia.
          La Catedral de Sal puedes recorrerla de manera guiada o por tu propia cuenta. En todo caso deberás descender por la mina y atravesar cada estación del viacrucis, hasta llegar al lugar donde se hace el show de luces y se encuentra el Árbol de la vida.
          A la Catedral de Sal de Zipaquirá puedes llegar en bus desde la Terminal de Transportes Salitre o Portal Norte de Transmilenio. 
          El tren sale a las 9 a.m. de la Estación Usaquén y los pasajes los puedes comprar en turistren.com.co.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  
        </div>
    </div>
</template>


<script>
  export default {
    data: () => ({
      show: false,
      rating: 4,
    }),
  }
</script>

