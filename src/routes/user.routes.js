const router = require("express").Router();
const {createNewUser, loginUser, updateUser, deleteUser} = require("../controllers/user.controllers");



//Crete user
router.post("/register", createNewUser )

//Login user
router.post("/login", loginUser)

//Update user
router.put("/update", updateUser)

//Delete user
router.delete("/delete", deleteUser)



module.exports = router