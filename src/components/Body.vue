<template>
    <body>
            <section class="contenedor">
                <h2 class="fw-300 centrar-texto">Conoce Más Sobre Nosotros</h2>

                <div class="iconos-nosotros">
                    <div class="iconos">
                        <img src="../assets/imgs/icono1.svg" alt="Icono Seguridad">
                        <h3>Seguridad</h3>
                        <p>Es fundamental la seguridad en actividades y escenarios recreativos, siempre contar con un amplio beneficio en los temas de seguridad en las diferentes actividades, respaldo permanente con aseguradoras</p>
                    </div>

                    <div class="iconos">
                        <img src="../assets/imgs/icono2.svg" alt="Icono Mejor Precio">
                        <h3>El Mejor Precio</h3>
                        <p>Las actividades realizadas cuentan con un gran beneficio en lo referente a costos y gastos, es importante el factor de gastos e inversion siempre buscando el beneficio personal y familiar en las actividades</p>
                    </div>

                    <div class="iconos">
                        <img src="../assets/imgs/icono3.svg" alt="Icono tiempo">
                        <h3>A Tiempo</h3>
                        <p>Programamos las actividades entendiendo la importancia del factor tiempo en cada momento, la puntualidad es importante al aprovechar el tiempo en la diferentes actividades realizadas en cada evento segun agenda</p>
                    </div>
                </div>

            </section>

            <main class="contenedor seccion">
                 <v-row no-gutters justify="center" align="center">
                    <h1 class=" font-weight-black mt-3">
                    Actividades <span class="font-weight-regular">Ecoturisticas</span>
                    </h1>
                 </v-row>

                <div class="contenedor-anuncios">
                    <div class="anuncio">
                        <img src="../assets/imgs/anuncio1.jpg" alt="Casa en Lago">
                        <div class="contenido-anuncio">
                            <h3>Tren Turistico Sabana</h3>
                            <p>Disfruta del paisaje de la Sabana de Bogotá, viaja utilizand el Tren Turistico</p>
                            <p class="precio">$63.000</p>
                            
                        </div>
                    </div>

                    <div class="anuncio">
                        <img src="../assets/imgs/anuncio2.jpg" alt="Casa terminados lujo">
                        <div class="contenido-anuncio">
                            <h3>Catedral de la Sal</h3>
                            <p>La Catedral de Sal de zipaquira es un recinto construido en el interior de las minas de sal</p>
                            <p class="precio">$42.000</p>
                            
                        </div>
                    </div>

                    <div class="anuncio">
                        <img src="../assets/imgs/anuncio3.jpg" alt="Casa alberca">
                        <div class="contenido-anuncio">
                            <h3>Piedras Del Tunjo</h3>
                            <p>denominado por su historia tambien, como también el Cercado de los Zipas o el Santuario de la rana</p>
                            <p class="precio">$21.000</p>
                            
                        </div>
                    </div>
                </div>

                
            </main>

            <section class="imagen-contacto">
                <div class="contenedor contenido-contacto">
                    <h2>Encuentra la actividad Ecoturistica que más te gusta en la región</h2>
                    
                    
                </div>
            </section>
            <!--BLOG-->
            <div class="seccion-inferior contenedor">
                <section class="blog">
                    

                    <article class="entrada-blog">
                        <div class="imagen mt-4">
                            <img src="../assets/imgs/laguna.jpg" alt="Blog post 1">
                        </div>
                        <div class="texto-entrada">
                            
                                <h4 class="mt-4">Planes cerca de Bogotá</h4>
                            
                            
                            <p class="mt-4">Encuentra algunos de los mejores planes que puedes hacer a menos de 2 horas de la ciudad!</p>
                        </div>
                    </article>

                    <article class="entrada-blog">
                        <div class="imagen">
                            <img src="../assets/imgs/parquenaturalsumapaz.jpg" alt="Blog post 2">
                        </div>
                        <div class="texto-entrada">
                            
                                <h4>Parques nacionales imperdibles</h4>
                            
                            
                            <p class="mt-4">Aquí encontrarás una guía de los parques nacionales de la región!</p>
                        </div>
                    </article>

                </section>

                <section class="testimoniales">
                    <h3 class="centrar-texto fw-300">Comentarios</h3>
                    <div class="testimonial">

                        <blockquote>
                            Me encanta la información que puedeo encontrar aquí! 
                        </blockquote>
                        <p>- Jose Gonzalez M.</p>
                    </div>
                </section>
            </div>

       </body>
</template>


<style> 
    html {
        box-sizing: border-box;
        font-size: 62.5%;
        /**Reset para REMS - 62-5% = 10px de 16px **/
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        font-family: 'Lato', sans-serif;
        font-size: 1.6rem;
        line-height: 2;
    }


    /*Globales*/

    img {
        max-width: 100%;
    }

    .contenedor {
        max-width: 120rem;
        margin: 0 auto;
    }

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


    /**Utilidades**/

    .seccion {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .fw-300 {
        font-weight: 300;
    }

    .centrar-texto {
        text-align: center;
    }

    .d-block {
        display: block!important;
    }

    .contenido-centrado {
        max-width: 800px;
    }


    /*Botones*/

    .boton {
        color: white;
        font-weight: 700;
        text-decoration: none;
        font-size: 1.8rem;
        padding: 1rem 3rem;
        margin-top: 3rem;
        display: inline-block;
        text-align: center;
        border: none;
    }

    .boton:hover {
        cursor: pointer;
    }

    .boton-amarillo {
        background-color: #e08709;
    }

    .boton-verde {
        background-color: #71B100;
    }


    /*Header*/

    .site-header {
        background-color: #333333;
        padding: 1rem 0 3rem 0;
    }

    .site-header.home {
        background-image: url(../assets/imgs/header.jpg);
        background-position: center center;
        background-size: cover;
        height: 100vh;
        min-height: 60rem;
    }

    .contenido-header {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .contenido-header h1 {
        color: white;
        padding-bottom: 2rem;
        max-width: 60rem;
        line-height: 4rem;
    }

    .barra {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 3rem;
    }


    /*Navegacion*/

    .navegacion a {
        color: white;
        text-decoration: none;
        font-size: 1.8rem;
        margin-right: 2rem;
    }

    .navegacion a:hover {
        color: #71B100;
    }

    .navegacion a:last-of-type {
        margin-right: 0px;
    }


    /**Iconos Nosotros**/

    .iconos-nosotros {
        display: flex;
        justify-content: space-between;
    }


    /**iconos individuales**/

    .iconos {
        flex-basis: calc(33.3%-1rem);
        text-align: center;
    }

    .iconos h3 {
        text-transform: uppercase;
    }


    /*seccion anuncios*/

    .contenedor-anuncios {
        display: flex;
        flex-wrap: wrap;
    }

    .anuncio {
        flex-shrink: 0;
        flex-basis: calc(33.3% - 1rem);
        border-style: solid;
        border-color: #806e6e;
        border-width: 1px;
        background-color: #f5f5f5;
        margin: 1rem 1rem 0 0;
    }

    .contenido-anuncio {
        padding: 2rem;
    }

    .contenido-anuncio h3,
    .contenido-anuncio p {
        margin: 0;
    }

    .precio {
        color: hsl(78, 100%, 35%);
        font-weight: 700;
    }

    .iconos-caracteristicas {
        list-style: none;
        padding: 0;
        justify-content: space-evenly;
        display: flex;
        flex: 1;
        max-width: 500px;
    }

    .iconos-caracteristicas li {
        /* flex: 1;*/
        display: flex;
    }

    .iconos-caracteristicas li img {
        margin-right: 2rem;
    }

    .ver-todas {
        display: flex;
        justify-content: flex-end
    }


    /*Contacto Home (Encuentra la casa de tus sueños)*/

    .imagen-contacto {
        background-image: url(../assets/imgs/ecoturismo.jpeg);
        background-position: center center;
        background-size: cover;
        height: 40rem;
        display: flex;
        align-items: center;
    }

    .contenido-contacto {
        flex: 1;
        color: #ffffff;
    }

    .contenido-contacto p {
        font-size: 1.8rem;
    }


    /*Seccion Inferior*/

    .seccion-inferior {
        display: flex;
        justify-content: space-between;
    }

    .seccion-inferior .blog {
        flex-basis: 60%;
    }

    .seccion-inferior .testimoniales {
        flex-basis: calc(40% - 2rem)
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
    }

    .texto-entrada a {
        color: black;
        text-decoration: none;
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


    /*Testimonial*/

    .testimonial {
        background-color: #71B100;
        font-size: 2.4rem;
        padding: 2rem;
        color: #ffffff;
        border-radius: 5rem;
    }

    .testimonial p {
        text-align: right;
    }

    .testimonial blockquote::before {
        content: '';
        background-image: url(../assets/imgs/comilla.svg);
        width: 4rem;
        height: 4rem;
        display: block;
        position: absolute;
        left: -3rem;
    }

    .testimonial blockquote {
        position: relative;
        padding-left: 2rem;
        font-weight: 300;
    }


    /*Footer*/

    .site-footer {
        background-color: #333333;
        margin: 0;
    }

    .contenedor-footer {
        margin-top: 5rem;
        padding: 3rem 0;
        display: flex;
        justify-content: space-between;
    }

    .copyright {
        margin: 0;
        color: #ffffff;
    }


    /*Codigo CSS para páginas internas */


    /*Nosotros*/

    .contenido-nosotros {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
    }

    .texto-nosotros blockquote {
        font-weight: 900;
        font-size: 2rem;
        margin: 0;
        padding: 0, 3, 0, 0;
    }


    /*Anuncio*/

    .resumen-propiedad {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


    /**CONTACTO**/

    .contacto p {
        font-size: 1.5rem;
        color: #4f4f4f;
        margin: 2rem 0 0 0;
    }

    legend {
        font-size: 2.4rem;
        color: #333333;
    }

    label {
        font-weight: 700;
        text-transform: uppercase;
        display: block;
    }

    input:not([type="submit"]),
    textarea,
    select {
        padding: 1rem;
        display: block;
        width: 100%;
        background-color: #e1e1e1;
        margin-bottom: 2rem;
        border: none;
        border-radius: .5rem;
    }

    input[type="radio"] {
        width: auto;
        margin: 0;
    }

    select {
        -webkit-appearance: none;
        appearance: none;
    }

    .forma-contacto {
        max-width: 30rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>