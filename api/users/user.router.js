const {createUser,  getUserByUserId, getUsers, updateUsers, deleteUser, login} = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createUser);
router.get("/", checkToken, getUsers);
router.get("/:id", checkToken, getUserByUserId);
router.patch("/", checkToken, updateUsers);  
router.delete("/", checkToken, deleteUser);  //take the data from the body
router.post("/login", login);


module.exports = router;