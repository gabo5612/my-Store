const express= require('express');
const ProductsService=require('../services/productsServices')
const validatorHandler=require('../middlewares/validatorHandler');
const { getProductSchema, createProductSchema, updateProductSchema } = require('../schema/productSchema');
const router=express.Router()
const service= new ProductsService();

router.get('/',  async (req, res) => {
  const products=await service.find();
  res.json(products)
});
router.get('/filter',  async (req, res)=>{
  res.send('soy un filtro')
})

router.get('/:id', validatorHandler(getProductSchema,'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const product= await service.findOne(id)
    res.json(product);
  } catch (error) {
    next(error)
  }

});

router.post('/', validatorHandler(createProductSchema,'body'),
 async (req,res)=>{
  const body =req.body;
  const newProduct=await service.create(body)
    res.status(201).json(newProduct)
})

router.patch('/:id', validatorHandler(updateProductSchema,'body'),
                      validatorHandler(getProductSchema,'params'),
 async (req,res, next)=>{
  try {
    const body =req.body;
    const {id}= req.params;
    const product= await service.update(id, body)
      res.json(product)
  } catch (error) {
    next(error)
  }

})

router.delete('/:id',  async (req,res)=>{
  const {id}= req.params;
  const deleteProduct= await service.delete(id)
    res.json(deleteProduct)
})


module.exports=router;
