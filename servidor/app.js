import express from 'express'; 
import morgan from 'morgan'; 
import cors from 'cors'; 
import path from 'path';

const app = express();



// CONEXION BASE DE DATOS
const mongoose = require('mongoose'); 
//const uri = 'mongodb://localhost:27017/prueba'; //el local host de mongo y el nombre de la base de datos a utilizar 
const uri = 'mongodb+srv://Admin:contraseña123@cluster0.izrd6.mongodb.net/Comentarios?retryWrites=true&w=majority'; 
//const uri = 'mongodb+srv://JIRIOR:Ca2025@cluster0.bqk1k.mongodb.net/?retryWrites=true&w=majority';
const options = {useNewUrlParser: true, useUnifiedTopology: true}; //obsoleto -> cambió el de la documentación a este 

mongoose.connect(uri, options).then(
    () => { 
        console.log('conectado a base de datos')
     },
    err => { err}
  );

//MIDDELWARE
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

//app.use(express.static(path.join(_dirname, 'public')));


//RUTAS

// app.get('/', (req, res) => { 
//     res.send('Hello World!'); 
// });

app.use('/api', require('./routes/comentario'));

// Middleware para Vue.js router modo history 
const history = require('connect-history-api-fallback'); 
app.use(history()); 
app.use(express.static(path.join(__dirname, 'public')));

//PUERTO

app.set('puerto', process.env.PORT || 3000); 
app.listen(app.get('puerto'), () => { 
    console.log('Example app listening on port'+ app.get('puerto')); 
});
