// mongodb://localhost:27017 -------> this is my Mongodb connection string
const connectToMongoose = require("./db.js")
var cors = require("cors")
connectToMongoose()

const express = require('express')
const app = express()
const port = 4000

const bodyParser = require('body-parser')
app.use(bodyParser.json({limit:'100mb'}))

app.use(cors())
app.use(express.json())
//my Routs
app.use("/api/student",require("./Route/StudentAuth.js"))
app.use("/api/studentinfo",require("./Route/StudentInfo.js"))

// These are Admin Routing
app.use("/aadmin",require("./Route/AdminAuth.js"))
app.use("/aadmin/home",require("./Route/AdminData.js"))
// app.use("/api/notes",require("./routs/notes.js"))

// These are Staf Routing section
app.use("/staf",require("./Route/StafAuth.js"))
app.use("/staf/stafInfo",require("./Route/StafInfo.js"))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})