const {createReservation,  getReservation, getReservationByReservation_ID, deleteReservation} = require("./reservation.controller");
const router = require("express").Router();
router.post("/", createReservation);
router.get("/",  getReservation);
router.get("/:Reservation_ID", getReservationByReservation_ID);
router.delete("/", deleteReservation);  //take the data from the body



module.exports = router;