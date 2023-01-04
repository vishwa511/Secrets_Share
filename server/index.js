import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app  = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes);

// const conn_url = 
const port = process.env.PORT;
mongoose.set('strictQuery', true);
mongoose.connect(process.env.CONN_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>app.listen(port, ()=>console.log(`Server is running on port ${port} and database also connected`)))
.catch((error) => console.log(error.message));
