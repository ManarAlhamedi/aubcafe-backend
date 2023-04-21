const {createItem,  getItems, getItemByItemName, getItemByItemType, updateItem, deleteItem} = require("./menu.controller");
const router = require("express").Router();
router.post("/", createItem);
router.get("/",  getItems);
router.get("/:ItemName", getItemByItemName);
router.get("/type/:ItemType", getItemByItemType);
router.patch("/", updateItem);  
router.delete("/", deleteItem);  //take the data from the body



module.exports = router;