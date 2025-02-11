const router = require("express").Router();
const {createNewUser, loginUser, updateUser, deleteUser, getAllUsers} = require("../controllers/user.controllers");



//Crete user
router.post("/register", createNewUser )

//Login user
router.post("/login", loginUser)

//Update user
router.put("/update", updateUser)

//Delete user
router.delete("/delete", deleteUser)

//obtener todos los user

router.get("/users", getAllUsers)



module.exports = router