

const mongoose = require('mongoose');

const {Schema, model} = mongoose;

//creacion de esquema


const userSchema = new Schema ({
    name: String,
    email: String,
    password: String
    //agregar mas campos segun sea necesario
});

//definicion del modelo


const User = model('User', userSchema);

module.exports = User; //exportamos el modelo User para poder usarlo en cualquier parte del codigo.
