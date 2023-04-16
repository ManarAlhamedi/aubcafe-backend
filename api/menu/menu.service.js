const conn = require("../../database");

module.exports = {
    createItem: (data, callBack) => {
        conn.query(
            `insert into menu(ItemName , ItemType,  price , available_amount) values(?,?,?,?)`,
            [
                data.ItemName,
                data.ItemType,
                data.price,
                data.available_amount
                
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    getItems: callBack => {
        conn.query(
            `select ItemName, ItemType, price , available_amount from menu`,
            [],
            (error, results, field) => {
                if(error){
                    return callBack(error)
                }
                return callBack(null, results);
            }
        );
    },

    getItemByItemName: (ItemName, callBack) => {
        conn.query(
            `select ItemName , ItemType, price , available_amount from menu where ItemName = ?`,
            [ItemName],
            (error, results, field) => {
                if(error){
                    return callBack(error)
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateItem: (data, callBack) => {
        conn.query(
            `update menu set ItemType = ?, price=?,  available_amount=? where ItemName = ?`,
            [
                data.ItemType,
                data.price,
                data.available_amount,
                data.ItemName
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    },

    deleteItem: (data, callBack) => {
        conn.query(
        'delete from menu where ItemName = ?',
        [data.ItemName],
        (error, results, fields) => {
            if(error){
                return callBack(error);
            }
            return callBack(null, results[0]);
        }
    );
    }, 

   
};