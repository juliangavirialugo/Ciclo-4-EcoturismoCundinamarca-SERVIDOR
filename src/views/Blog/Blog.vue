<template>
 <div>
    <contenido/>
    <Comentarios/>
  </div>
</template>

<script>
import Comentarios from '../Blog/Components/Comentario.vue'
import Contenido from '../Blog/Components/Contenido.vue'
export default {
    name: 'Blog',
    components: {
        Comentarios,
        Contenido,
    }

    
}
</script>