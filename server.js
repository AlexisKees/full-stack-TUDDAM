const express = require("express");
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.use(
    express.urlencoded({
      extended: true,
    })
  )

const routerPagina = require('./routes/pagina')
const routerApp = require('./routes/app')
const routerContacto = require('./routes/contacto')
const routerFormulario = require('./routes/formulario')
const routerEnviarDatos = require('./routes/enviar-datos')
const routerDatos = require('./routes/datos')
const routerMostrarDatos = require('./routes/mostrar-datos')
const routerSaludo = require('./routes/saludo')
const routerRespuesta = require('./routes/saludo-respuesta')
const routerHora = require('./routes/hora')


app.use('/pagina', routerPagina)
app.use('/app', routerApp)
app.use('/contacto', routerContacto)
app.use('/formulario', routerFormulario)
app.use('/enviar-datos', routerEnviarDatos)
app.use('/datos', routerDatos)
app.use('/mostrar-datos',routerMostrarDatos)
app.use('/saludo', routerSaludo)
app.use('/hora', routerHora)
app.use('/saludo-respuesta', routerRespuesta)


app.get("/inicio", (req, res) =>{
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get("/error", (req, res) =>{
    res.send("error")
})

app.listen(port, () => {
    console.log(`Server OK: listening on port ${port}`);
})