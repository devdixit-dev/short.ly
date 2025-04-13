import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import UrlRoute from './routes/url.js';

mongoose.connect('mongodb://localhost:27017/', { dbName: 'short-url-db' })
  .then(() => { console.log(`DB connected`) })
  .catch((e) => { console.log(`Error connecting db ${e}`) });

const app = express();
const port = 3000;

app.use(cors({origin: 'http://localhost:5173'}))
app.use(express.json());
app.use('/url', UrlRoute);

app.listen(port, () => {
  console.log(`Server is running on  port ${port}`);
});