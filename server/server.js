import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({  limit: "30mb", extended: true }));
app.use(bodyParser.json({  limit: "30mb", extended: true }));
app.use(cors());

const DB_CONNECTION = 'mongodb+srv://Samuel:ad6681dbsa@cluster0.4uolf.mongodb.net/user_auth?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server started on port ${PORT}!`)))
    .catch((error) => console.log(`${error} did not connect`));


mongoose.set('useFindAndModify', false);