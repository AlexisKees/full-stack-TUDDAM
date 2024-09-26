const path = require('path')

exports.app = (req, res) => {
    res.send('Información de la aplicación')
}

exports.contacto = (req, res)=>{
    res.send('E-mail de contacto: aekeesbahl@comunidad.unnoba.edu.ar')
}

exports.pagina = (req, res) => {
    res.sendFile(path.join(__dirname, '../pagina', 'page.html'))
}

exports.formulario = (req, res) => {
    res.sendFile(path.join(__dirname, '../pagina', 'formulario.html'))
}

exports.enviarDatos = async (req, res)=>{
    const data ={
        nombre: await req.body.nombre,
        email: await req.body.email,
        mensaje: await req.body.mensaje
    }
    
    res.render('pages/index', data)
}

exports.datos = (req, res) => {
    res.sendFile(path.join(__dirname, '../pagina', 'datos.html'))
}

exports.saludo = (req, res) => {
    res.sendFile(path.join(__dirname, '../pagina', 'saludo.html'))
}

exports.hora = (req, res) => {
    const fecha = new Date();

    let data = {
        dia:  fecha.getDay(),
        mes:  fecha.getMonth(),
        anio: fecha.getFullYear(),
        hora: fecha.getHours(),
        minutos: fecha.getMinutes(),
    }

    res.render('pages/hora', {data: data})
}


exports.mostrarDatos = async (req, res)=>{
    const data ={
        nombre: await req.body.nombre,
        edad: await req.body.edad,
        correo: await req.body.correo
    }
    
    res.render('pages/mostrar-datos', data)
}

exports.saludoRespuesta = async (req, res)=>{
    const data ={
        nombre: await req.body.nombre
    }
    
    res.render('pages/saludo-respuesta', data)
}