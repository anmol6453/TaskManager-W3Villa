import {config} from 'dotenv' 
import  express  from "express";
const app = express();

import cors from 'cors'
import cookieParser from "cookie-parser";
import ErrorMiddleware from "./middlewares/Error.js";

import authRoutes from './routes/authRoutes.js'
import taskRoutes from './routes/taskRoutes.js'

import {connectDB} from './config/Database.js'

config({
    path:'./.env'
})

connectDB()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended:true,
}))
app.use(cookieParser());
app.use('/auth', authRoutes);
app.use('/task', taskRoutes);

app.use(ErrorMiddleware)

app.listen(process.env.PORT, () => {
	console.log(`server is running on port`, process.env.PORT);
});