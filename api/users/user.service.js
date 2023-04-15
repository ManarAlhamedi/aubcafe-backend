const conn = require("../../database");

module.exports = {
    create: (data, callBack) => {
        conn.query(
            `insert into user(id, first_name, last_name, email, password_) values(?,?,?,?,?)`,
             [
                data.id,
                data.first_name,
                data.last_name,
                data.email,
                data.password_
             ],
             (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }
                return callBack(null, results)
             }
        );
    },
    getUsers: callBack => {
        conn.query(
            `select id, first_name, last_name, email, password_ from user`,
            [],
            (error, results, field) => {
                if(error){
                    return callBack(error)
                }
                return callBack(null, results);
            }
        );
    },

    getUserByUserId: (id, callBack) => {
        conn.query(
            `select id, first_name, last_name, email, password_ from user where id = ?`,
            [id],
            (error, results, field) => {
                if(error){
                    return callBack(error)
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateUser: (data, callBack) => {
        conn.query(
            `update user set first_name=?, last_name=?, email=?, password_=? where id = ?`,
             [
                data.first_name,
                data.last_name,
                data.email,
                data.password_,
                data.id
             ],
             (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    },

    deleteUser: (data, callBack) => {
        conn.query(
        'delete from user where id =?',
        [data.id],
        (error, results, fields) => {
            if(error){
                return callBack(error);
            }
            return callBack(null, results[0]);
        }
    );
    }, 

    getUserByUserEmail: (email, callBack) => {
        conn.query(
            `select * from user where email = ?`,
            [email],
            (error, results, fields) => {
                if(error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};