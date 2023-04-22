const { 
    createItem,
    getItems,
    getItemByItemName,
    getItemByItemType,
    updateItem,
    deleteItem
} = require("./menu.service");

module.exports = {
    createItem: (req, res) => {
        const body = req.body;
        createItem(body, (err, results) => {
            if(err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },

    getItemByItemName: (req, res) => {
    const ItemName = req.params.ItemName;
    getItemByItemName(ItemName, (err, results) =>  {
        if(err){
            console.log(err);
            return;
        }
        if(!results){
            return res.json({
                success: 0,
                message: "Record Not Found"
            });
        }
        return res.json({
            success: 1,
            data: results
        });
    });
   },

   getItemByItemType: (req, res) => {
    const ItemType = req.params.ItemType;
    getItemByItemType(ItemType, (err, results) =>  {
        if(err){
            console.log(err);
            return;
        }
        if(!results){
            return res.json({
                success: 0,
                message: "Record Not Found"
            });
        }
        return res.json({
            success: 1,
            data: results
        });
    });
   },

   getItems: (req, res) => {
    getItems((err, results) => {
        if(err){
            console.log(err);
            return;
        }
        return res.json({
            success: 1, 
            data: results
        });
    });
   }, 

   updateItem: (req, res) => {
    const body = req.body;
    updateItem(body, (err, results) => {
        if(err) {
            console.log(err);
            return;
        }
        if(!results){
            return res.json({
                success: 0,
                message: "Failed to update Item"
            })
        }
        return res.status(200).json({
            success: 1,
            message: "Updated successfuly"
        });
    });
    },

    deleteItem: (req, res) => {
        const data = req.body;
        deleteItem(data, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
        
            return res.json({
                success: 1,
                message: "Item deleted successfully"
            });
        });
    },
  
};