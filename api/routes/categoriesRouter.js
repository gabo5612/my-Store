const express= require('express')

const router=express.Router()

router.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
      categoryId,
      productId
  });
});

router.get('/categories/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  res.json({
      categoryId,
      category: 'Computers & Accesories'
  });
});


module.exports= router
