const producstRouter= require('./productsRouter')
const userRouter= require('./userRouter')
const categoriesRouter= require('./categoriesRouter')
const express= require('express')


function routerApi(app){
  const router= express.Router()
  app.use('/api/v1', router)
  router.use('/products' ,producstRouter)
  router.use('/users', userRouter)
  router.use('/cateogories', categoriesRouter)
}

module.exports=routerApi;
