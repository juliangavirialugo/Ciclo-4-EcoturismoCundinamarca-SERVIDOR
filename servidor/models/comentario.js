import mongoose from "mongoose";
const Schema = mongoose.Schema;

const comentarioSchema= new Schema({
    // nombre: {type: String, required: [true, 'Nombre obligatorio']},
    // descripcion: String,
    // usuarioId: String,
    // date:{type: Date, default: Date.now},
    // activo: {type: Boolean, default: true}

    nombre: {type: String, required:[true,'Nombre obligatorio']}, //el requerido se puede establecer en front o back
    ciudad: {type: String, required:[true, 'Ciudad requeria']},
    descripcion: {type: String, required:[true, 'Campo obligatorio']},
    date:{type: Date, default: Date.now},
    //Aqui se pueden establecer los requerimientos de los datos, los formularios y esas cosas 
    //que se van a usar en base de datos. 
    //y se puede establecer los detalles...
});

//CONVERTIR A MODELO

const comentario=mongoose.model('Comentario', comentarioSchema);
export default comentario;  
