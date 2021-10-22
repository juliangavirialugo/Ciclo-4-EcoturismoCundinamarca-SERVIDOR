<template>
<div class="container">
    
      
        <h4 class=" font-weight-black">Comentarios<span class="font-weight-black"></span> 
        </h4>
      
    

    <b-alert 
    :show="dismissCountDown" 
    dismissible 
    :variant="mensaje.color" 
    @dismissed="dismissCountDown=0" 
    @dismiss-count-down="countDownChanged" > 
    {{mensaje.texto}} 
    </b-alert>     

    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <!-- <th scope="col">#</th> -->
                <th scope="col"><h5>Nombre</h5></th>
                <th scope="col"><h5>Ciudad</h5></th>
                <th scope="col"><h5>Comentario</h5></th>
                <!-- <th scope="col"><h5>Acciones</h5></th> -->
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in comentarios" :key="index">
                <!-- <th scope="row">{{item._id}}</th> -->
                <td>{{item.nombre}}</td>
                <td>{{item.ciudad}}</td>
                <td>{{item.descripcion}}</td>
                <td>
                    <b-button class="btn-danger mx-2" @click="eliminarComentario(item._id)">Eliminar</b-button>
                    <b-button class="btn-warning mx-2" @click="activarEdicion(item._id)">Editar</b-button>
                </td>
            </tr>

        </tbody>
    </table>

    <form @submit.prevent="agregarComentario()" v-if="agregar">
        <h5>Déjanos un comentario</h5>

        <input type="text" class="form-control my-2" placeholder="Nombre" v-model="comentario.nombre">
        <input type="text" class="form-control my-2" placeholder="Ciudad" v-model="comentario.ciudad">
        <input type="text" class="form-control my-2" placeholder="Descripcion" v-model="comentario.descripcion">
        <b-button class="btn-success my-2" type="submit">Agregar</b-button>

    </form>

    <form @submit.prevent="editarComentario(comentarioEditar)" v-if="editar">
        <h5>Editar</h5>

        <input type="text" class="form-control my-2" placeholder="Nombre" v-model="comentarioEditar.nombre">
        <input type="text" class="form-control my-2" placeholder="Ciudad" v-model="comentarioEditar.ciudad">
        <input type="text" class="form-control my-2" placeholder="Descripcion" v-model="comentarioEditar.descripcion">
        <b-button class="btn-success my-2 mx-2" type="submit">Editar</b-button>
        <b-button class=" my-2" type="submit" @click="editar=false">Cancelar</b-button>

    </form>
    <form @submit.prevent="agregarComentario()" v-if="!editar">
        <h5>Déjanos un comentario</h5>

        <input type="text" class="form-control my-2" placeholder="Nombre" v-model="comentario.nombre">
        <input type="text" class="form-control my-2" placeholder="Ciudad" v-model="comentario.ciudad">
        <input type="text" class="form-control my-2" placeholder="Descripcion" v-model="comentario.descripcion">
        <b-button class="btn-success my-2" type="submit">Agregar</b-button>

    </form>

    

</div>
</template>

<script>
export default {

    data() {
        return {

            comentarios: [],
            mensaje: {color: 'success', texto: ''}, 
            dismissSecs: 5, 
            dismissCountDown: 0,

            comentario:{nombre:"",ciudad:"",descripcion:""},
            editar:false,
            comentarioEditar:{}

        }

    },

    created() {

        this.listarComentarios();

    },

    methods: {

        listarComentarios() {

            this.axios.get('comentario')
                .then(res => {
                    console.log(res.data);
                    this.comentarios = res.data;

                })
                .catch(e => {

                    console.log(e.response);

                })

        },

        agregarComentario(){


            this.axios.post('/nuevo-comentario',this.comentario)
            .then(res=>{

                this.comentarios.push(res.data);
                this.comentario.nombre="";
                this.comentario.ciudad="";
                this.comentario.descripcion="";
                this.mensaje.color="success";
                this.mensaje.texto="Comentario Agregado";
                this.showAlert();


            })
            .catch(e=>{

                console.log(e.response);

            })


        },

        eliminarComentario(id){

            this.axios.delete(`/comentario/${id}`)
            .then(res=>{

                const index = this.comentarios.findIndex(item=> item._id===res.data._id);
                this.comentarios.splice(index, 1);
                this.mensaje.color="success";
                this.mensaje.texto="Comentario Eliminada";
                this.showAlert();


            })
            .catch(e=>{

                  console.log(e.response);

            })
        },

        activarEdicion(id){

            this.editar=true;
            this.axios.get(`/comentario/${id}`)
            .then(res=>{

                this.comentarioEditar=res.data;

            })
            .catch(e=>{

                 console.log(e.response);


            })


        },

        editarComentario(item){
            
            this.axios.put(`/comentario/${item._id}`, item)
            .then(res=>{
                const index= this.comentarios.findIndex(n=> n._id===res.data._id);
                this.comentarios[index].nombre=res.data.nombre;
                this.comentarios[index].ciudad=res.data.ciudad;
                this.comentarios[index].descripcion=res.data.descripcion;
                this.mensaje.color="success";
                this.mensaje.texto="Comentario Editada";
                this.showAlert();
                this.editar=false;


            })
            .catch(e=>{

                console.log(e.response);

            })



        },
        countDownChanged(dismissCountDown) { 
            this.dismissCountDown = dismissCountDown 
        }, 
        showAlert() { 
            this.dismissCountDown = this.dismissSecs 
        }

    }

}
</script>


