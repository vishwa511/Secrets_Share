import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'

import postRoutes from './routes/posts.js';

const app  = express();


app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes);

const conn_url = 'mongodb+srv://vkchintu53:Chintu123@cluster0.wccuwck.mongodb.net/test'
const port = 5000;
mongoose.set('strictQuery', true);
mongoose.connect(conn_url, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>app.listen(port, ()=>console.log(`Server is running on port ${port} and database also connected`)))
.catch((error) => console.log(error.message));
