import express from 'express'
const router=express.Router();

//IMPORTAR EL MODELO COMETARIO

import Comentario from '../models/comentario';

//AGREGAR UN COMENTARIO

router.post('/nuevo-comentario', async (req, res)=>{
    const body=req.body;  

    try {
        const comentarioDB = await Comentario.create(body);
        res.status(200).json(comentarioDB);
    } 
    catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error',
            error
        })
        
    }

});

//GET CON PARAMETRO

router.get('/comentario/:id', async(req,res)=>{
    const _id=req.params.id;
    try {
        const comentarioDB= await Comentario.findOne({_id});
        res.json(comentarioDB);

    } catch (error) {
        return res.status(500).json({
            mensaje:"ocurrio un error",
            error
        })
    }
})

//GET CON TODOS LOS DOCUMENTOS

router.get('/comentario',async(req,res)=>{

    try {

        const comentarioDb=await Comentario.find();
        res.json(comentarioDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }


});

//DELETE ELIMINAR COMENTARIO

router.delete('/comentario/:id', async(req,res)=>{


    const _id=req.params.id;

    try {

        const comentarioDb=await Comentario.findByIdAndDelete({_id});
        if(!comentarioDb){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', error 
            }) 
        } 
        res.json(comentarioDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }
});

//Actualizar una nota

router.put('/comentario/:id', async(req,res)=>{

    const _id=req.params.id;
    const body =req.body;

    try {

        const comentarioDb= await Comentario.findByIdAndUpdate(_id,body,{new:true});
        res.json(comentarioDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }



})

// EXPORTACION DE ROUTER
module.exports = router;