import 'dotenv/config';
import 'reflect-metadata';
import 'express-async-errors';

import path from 'path';
import express from 'express';

import { getErrors } from './errors/getErrors';
import { routes } from './routes';
import { customResponse } from './middlewares/customResponse';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(customResponse);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);
app.use(getErrors);

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});
