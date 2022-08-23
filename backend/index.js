require("dotenv").config()

const express = require("express")
const cors = require("cors")
const sequelize = require("./db")
const models = require("./models/models")
const router = require("./routes/index")
const errorHandler = require("./middleware/ErrorHandingMiddleware")

const app = express()

const PORT = process.env.PORT_SERVER || 5000

app.use(cors())
app.use(express.json({limit: "50mb"}))
app.use("/api", router)

app.use(errorHandler)




const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`server work on ${PORT}`))
    } catch(e) {
        console.log("err", e)
    }
}

start()