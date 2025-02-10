const express = require('express')
const app = express()
const morgan = require('morgan')

const router = require("../routes/user.routes")


app.use(morgan('dev'));

app.use("/", router)







module.exports = app; //permite exportar la constante app para que quede disponible y se pueda utilizar fuera de este archivo.