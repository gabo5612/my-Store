const express= require('express');
const routerApi= require('./routes/')
const cors= require('cors')
const app = express();
const port= process.env.PORT || 3005;
const {errorHandler, logErrors, boomErrorHandler}= require('./middlewares/errorHandler')
app.use(express.json());


app.use(cors())
app.get('/api', (req, res)=>{
  res.send('hola a mi server')
})

routerApi(app)

app.get('/api/people', (req, res) => {
  res.json([{
      name: 'Arturo',
      type: 'employee'
  }, {
      name: 'Jimena',
      type: 'customer'
  }]);
});

app.get('/api/people/:id', (req, res) => {
  const { id } = req.params;
  res.json({
      id,
      name: 'Arturo',
      type: 'employee'
  });
});


app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, ()=>{

  console.log("Si está corriendo en: " + port);

})
