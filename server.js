const express= require ("express")
const app =express()
const cors = require('cors')
app.use(express.json())
require('dotenv').config()
app.use(cors())
// {
//     origin:["http://localhost:5000","https://mern-task-app.onredner.com"]
// }

// cors relate between back & front -end
//routes configuration
app.use("/api/user",require("./routes/userRoutes"))
app.use("/api/admin",require("./routes/adminRoutes"))


//database connection
const connectDB= require("./config/connectDB" )
connectDB()

//port connection
const port=process.env.PORT || 8081
app.listen ( port, ()=>  console.log("my server is running on port", port))
 