require("dotenv").config();
const express = require("express");
const app = express();
const userRouter= require("./api/users/user.router");
const menuRouter = require("./api/menu/menu.router");
const reservationRouter= require("./api/reservation/reservation.router");

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/menu" , menuRouter);
app.use("/api/reservation" , reservationRouter);

app.listen(process.env.APP_PORT, () =>{
    console.log("Server up and running on PORT: ", process.env.APP_PORT);
});