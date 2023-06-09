const conn = require("../../database");

module.exports = {
    createItem: (data, callBack) => {
        conn.query(
            `insert into menu(ItemName , ItemType,  price , available_amount, Description_ , image1URL) values(?,?,?,?,?,?)`,
            [
                data.ItemName,
                data.ItemType,
                data.price,
                data.available_amount,
                data.Description_,
                data.image1URL
                
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
            `select ItemName, ItemType, price , available_amount, Description_, image1URL from menu`,
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
            `select ItemName , ItemType, price , available_amount , Description_ , image1URL from menu where ItemName = ?`,
            [ItemName],
            (error, results, field) => {
                if(error){
                    return callBack(error)
                }
                return callBack(null, results[0]);
            }
        );
    },

    getItemByItemType: (ItemType, callBack) => {
        conn.query(
            `select ItemName , ItemType, price , available_amount, Description_, image1URL from menu where ItemType = ?`,
            [ItemType],
            (error, results, field) => {
                if(error){
                    return callBack(error)
                }
                return callBack(null, results);
            }
        );
    },

    updateItem: (data, callBack) => {
        conn.query(
            `update menu set ItemType = ?, price=?,  available_amount=?, Description_ = ?, image1URL=? where ItemName = ?`,
            [
                data.ItemType,
                data.price,
                data.available_amount,
                data.Description_,
                data.image1URL,
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