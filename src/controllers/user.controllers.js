

const createNewUser = (req, res) => {
    res.send("Registro de usuario")
}

const loginUser = (req, res) => {
    res.send("Login de usuario")
}

const updateUser = (req, res) => {
    res.send("Actualización de usuario")
}

const deleteUser = (req, res) => {
    res.send("Eliminación de usuario")
}

module.exports = {createNewUser, loginUser, updateUser, deleteUser}