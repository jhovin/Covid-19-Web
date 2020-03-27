const express =require('express');
const router=express.Router();
const path=require('path');

router.get('/',(req,res)=>{
    res.render('index',{title:'Covid-19'});
});
router.get('/informacion', (req,res)=>{
    res.render('informacion',{title:'Informacion'});
});
router.get('/sintomas',(req,res)=>{
    res.render('sintomas',{title:'Sintomas'});
});
router.get('/tratamiento',(req,res)=>{
    res.render('tratamiento',{title:'Tratamiento'});
});

router.get('/protegerme',(req,res)=>{
    res.render('protegerme',{title:'Protegernos'});
});
router.get('/propagacion',(req,res)=>{
    res.render('propagacion',{title:'Propagacion'});
});


module.exports=router;