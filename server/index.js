import express from 'express'
import mongoose from "mongoose";
import dotenv from 'dotenv'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import multer from "multer";
import path from "path";
import {fileURLToPath} from 'url'

const app = express()

dotenv.config()

mongoose.set('strictQuery', false)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(express.json)
app.use(cors())
app.use(morgan("common"))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/assets')
    },
    filename(req, file, callback) {
        callback(null, file.originalname)
    }
})

const upload = multer({storage})

const start = async () => {
   try {
       await mongoose.connect(process.env.DB_KEY, () => {
           console.log('db connected')
           app.listen(process.env.PORT, ()=> {
               console.log('server started')
           })
       })
   }catch (e) {
       console.log(e)
   }
}
start()



