const express = require('express');
const userRouter=express.Router()


userRouter.get('/users', (req,res)=>{
  const {limit, offset}= req.query;

    if(limit || offset){
      res.json({
        limit,
        offset
      })
    } else{
      res.send('no hay parametros')
    }

})


module.exports=userRouter;
