const { 
    createReservation,
    getReservation,
    getReservationByReservation_ID,
    deleteReservation
} = require("./reservation.service");

module.exports = {
    createReservation: (req, res) => {
        const body = req.body;
        createReservation(body, (err, results) => {
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

    getReservationByReservation_ID: (req, res) => {
    const Reservation_ID = req.params.Reservation_ID;
    getReservationByReservation_ID(Reservation_ID, (err, results) =>  {
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

   getReservation: (req, res) => {
    getReservation((err, results) => {
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


    deleteReservation: (req, res) => {
        const data = req.body;
        deleteReservation(data, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
        
            return res.json({
                success: 1,
                message: "Reservation deleted successfully"
            });
        });
    },
  
};