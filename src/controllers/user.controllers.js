const User = require('../models/user.models');

const createNewUser = async (req, res) => {
    const { name, email, password } = req.body 
    
    if (!name ||!email ||!password) {
        res.status(400).json({ message: "Faltan datos obligatorios" });
        return;
    }

    try {
    await User.create({                     //codigo asincrono porque tiene que comunicarse con la base de datos
        name: name,
        email: email,
        password: password,
    });
        res.status(201).json({message: "Usuario creado con exito"});
        
    } catch (error) {
        console.log(error);
       
    }
};

const loginUser = (req, res) => {
    res.send("Login de usuario")
}

const updateUser = (req, res) => {
    res.send("Actualización de usuario")
}

const deleteUser = (req, res) => {
    res.send("Eliminación de usuario")
}

//get all users

const getAllUsers = async (req, res) => {
    
    const usersList = await User.find({})
    res.status(200).json({message:"Todos los usuarios", data: usersList });
}





module.exports = {createNewUser, loginUser, updateUser, deleteUser, getAllUsers };