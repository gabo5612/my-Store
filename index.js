const express= require('express');
const routerApi= require('./routes/')
const cors= require('cors')
const app = express();
const port= 3005;
const {errorHandler, logErrors, boomErrorHandler}= require('./middlewares/errorHandler')
app.use(express.json());


const whiteList=['https://localhost:8080','http://127.0.0.1:5500']

const options={
  origin:(origin, callBack)=>{
    whiteList.includes(origin)? callBack(null, true): callBack(new Error('no permitido'))
  }
}
app.use(cors(options))
app.get('/', (req, res)=>{
  res.send('hola a mi server')
})

routerApi(app)

app.get('/people', (req, res) => {
  res.json([{
      name: 'Arturo',
      type: 'employee'
  }, {
      name: 'Jimena',
      type: 'customer'
  }]);
});

app.get('/people/:id', (req, res) => {
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
