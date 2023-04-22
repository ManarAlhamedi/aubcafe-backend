const conn = require("../../database");

module.exports = {
    createReservation: (data, callBack) => {
        conn.query(
            
            `insert into reservation( user_email,  dateOfReservation , timeOfReservation) values(?,?,?)`,
            [
                data.user_email,
                data.dateOfReservation,
                data.timeOfReservation
                
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    getReservation: callBack => {
        conn.query(
            `select Reservation_ID , user_email,  dateOfReservation , timeOfReservation from reservation `,
            [],
            (error, results, field) => {
                if(error){
                    return callBack(error)
                }
                return callBack(null, results);
            }
        );
    },

    getReservationByReservation_ID: (Reservation_ID, callBack) => {
        conn.query(
            `select Reservation_ID , user_email,  dateOfReservation , timeOfReservation from reservation where Reservation_ID = ?`,
            [Reservation_ID],
            (error, results, field) => {
                if(error){
                    return callBack(error)
                }
                return callBack(null, results[0]);
            }
        );
    },
   
    deleteReservation: (data, callBack) => {
        conn.query(
        'delete from reservation where Reservation_ID = ?',
        [data.Reservation_ID],
        (error, results, fields) => {
            if(error){
                return callBack(error);
            }
            return callBack(null, results[0]);
        }
    );
    }, 

    createCart: (data, callBack) => {
        conn.query(
            
            `insert into cart(ItemName ,Reservation_ID , Quantity ) values(?,?,?)`,
            [
                data.ItemName,
                data.Reservation_ID, 
                data.Quantity
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
};