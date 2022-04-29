import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import companyRoutes from "./routes"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

console.info("Starting server")

app.use(cors())
app.use(companyRoutes)

//TODO: const uri: string = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@localhost:27017/mydb`
const uri: string = `mongodb://localhost:27017/mydb`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
.connect(uri, options)
.then(() => {
      app.listen(PORT, () =>
          console.log(`Server running on http://localhost:${PORT}`)
      )
      console.info("Server started successfully")
    }
)
.catch(error => {
  console.error(`Error in running server at ${PORT}`, error )
  throw error
})