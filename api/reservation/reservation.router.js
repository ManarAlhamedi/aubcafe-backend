const {createReservation,  getReservation, getReservationByReservation_ID, deleteReservation , createCart} = require("./reservation.controller");
const router = require("express").Router();
router.post("/", createReservation);
router.get("/",  getReservation);
router.get("/:Reservation_ID", getReservationByReservation_ID);
router.delete("/", deleteReservation);  //take the data from the body

router.post("/addCart" , createCart);


module.exports = router;