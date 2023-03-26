const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")



//Connect to DB
mongoose.connect("mongodb+srv://mattrob101:finn1212@cluster0.msb08b3.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connection to database!");
  })
  .catch(dbErr => {
    console.log("Connection to database failed:", dbErr.message);
  });
  


// MIDDLEWARE
app.use(express.json())
app.use(morgan('dev'))

// ROUTES
app.use("/techGear", require("./Routes/techGearRouter.js"))

app.use("/photography", require("./Routes/photographyRouter.js"))

app.use("/wishlist", require("./Routes/wishlistRouter.js"))


// ERROR HANDLER
app.use((err, req, res, next) => {
  console.log(err)
  res.send({errMsg: err.message})
})

app.listen(9000, () => {
  console.log("Server is running on Port 9000")
})