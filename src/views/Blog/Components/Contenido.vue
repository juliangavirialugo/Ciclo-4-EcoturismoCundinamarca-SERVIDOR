<template>
 

<main class="contenedor seccion contenido-centrado">
     <v-container>
      <v-row no-gutters justify="center" align="center">
        <h1 class=" font-weight-black mt-3">
          Planes cerca <span class="font-weight-regular">de Bogotá</span>
        </h1>
      </v-row>
    </v-container>

    <article class="entrada-blog">
        <div class="imagen">
            <img src="https://travelgrafia.co/wp-content/uploads/2019/09/Destinos-semana-de-receso-cerca-a-Bogota.jpg" alt="Blog post 1">
        </div>
        <div class="texto-entrada">            
                <h4>Embalse de Tominé</h4>
                       
            <p class="mt-3" >En el Embalse de Tominé puedes practicar deportes náuticos, pasear en velero o sencillamente caminar por sus senderos en busca de un poco de tranquilidad y calma. Ten presente que recorrer el pueblo, los alrededores del embalse e ir a la laguna demandan mucho tiempo, por lo que este es uno de los mejores planes cerca a Bogotá para parejas y familias que quieren viajar en moto o en carro.</p>
        </div>
    </article>

    <article class="entrada-blog">
        <div class="imagen">
            <img src="https://travelgrafia.co/wp-content/uploads/2019/06/sitios-turisticos-cundinamarca.jpg" alt="Blog post 2">
        </div>
        <div class="texto-entrada">            
                <h4>Satutausa, Cundinamarca</h4>            
            
            <p class="mt-3">Otro de los planes cerca a Bogotá, es visitar el bello municipio de Sutatausa, un pueblito que reconocerás y recordarás fácilmente por sus increíbles paisajes y la tranquilidad de sus calles. Sutatausa, te ofrecerá miradores naturales que te dejarán sin aliento, ya que al estar situado entre los valles de Ubaté y la sabana de Bogotá en pleno altiplano cundiboyacense, goza de una densa vegetación.</p>
         </div>
    </article>
    
    <article class="entrada-blog">
        <div class="imagen">
            <img src="https://travelgrafia.co/wp-content/uploads/2019/03/mirador-de-cucunuba-cundinamarca.jpg" alt="Blog post 3">
        </div>
        <div class="texto-entrada">
            
                <h4>Cuncubá, Cundinamarca</h4>          
            
            <p class="mt-3">A 2 horas y media de viaje por carretera, en la provincia del Valle de Ubaté se encuentra Cucunubá, uno de los mejores lugares para visitar cerca a Bogotá y encontrarte con un pueblo de tradicionales, calles empedradas y arquitectura. Otro de los planes imperdibles en Cucunubá, es subir al Cerro de la Capilla de Lourdes o el pequeño Monserrate. Para subirlo deberás caminar por un sendero que se encuentra a un par de cuadras del parque principal y desde arriba podrás ver el Valle de Ubaté.</p>
        </div>
    </article>

    <article class="entrada-blog">
        <div class="imagen">
            <img src="https://travelgrafia.co/wp-content/uploads/2018/09/laguna-de-iguaque.jpg" alt="Blog post 4">
        </div>
        <div class="texto-entrada">
            
                <h4>Santuario de flora y fauna de Iguaque</h4>
          
            <p class="mt-3">El Santuario de Fauna y Flora Iguaque es uno de los mejores planes cerca a Bogotá que hay. En el parque natural encontrarás la laguna sagrada de Iguaque que, según la mitología muisca, es la cuna de la humanidad. La caminata hasta el pico más alto del santuario dura 3 horas, y al final tu recompensa será llegar hasta la legendaria y mítica Laguna de Iguaque, un lugar de peregrinación espiritual donde nació Bachué, la diosa y madre de los Chibchas.</p>
         </div>
    </article>

</main>




</template>

<style>
h1 {
    font-size: 3.8rem;
}

h2 {
    font-size: 3.4rem;
}

h3 {
    font-size: 3rem;
}

h4 {
    font-size: 2.6rem;
}

.entrada-blog {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
}

.entrada-blog .imagen {
    flex-basis: 40%;
}

.entrada-blog .texto-entrada {
    flex-basis: calc(60% - 3rem);
    text-justify:distribute;
}

.texto-entrada h4 {
    margin: 0%;
    line-height: 1;
}

.texto-entrada h4::after {
    content: '';
    display: block;
    width: 15rem;
    height: .5rem;
    background-color: #71B100;
    margin-top: 1rem;
}

.texto-entrada span {
    color: #e08709
}

</style>
