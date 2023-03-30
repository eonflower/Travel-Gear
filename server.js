const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
require("dotenv").config();

const PORT = process.env.PORT || 9000;



//Connect to DB
mongoose.connect(process.env.MONGO_URI)
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
  return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
  console.log("Server is running on Port 9000")
})