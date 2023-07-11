import dotenv from 'dotenv'
import  express  from 'express'
import cors from "cors";
import connectDB from './config/connectdb.js';
import addressRouter from './routes/addressBookRouter.js';

dotenv.config()
const app = express();
app.use(cors());
const port = process.env.PORT || "8000"; //api port
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"; //database port

//db connection
connectDB(DATABASE_URL);
app.use(express.json());


//routers
app.use("/address", addressRouter);
// app.use("/api", userRouter);

//app listen port
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });