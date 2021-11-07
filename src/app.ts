import 'dotenv/config';
import 'reflect-metadata';
import 'express-async-errors';

import path from 'path';
import express from 'express';
import { createServer } from 'http';
import morgan from 'morgan';
import { Server } from 'socket.io';

import { getErrors } from './errors/getErrors';
import { routes } from './routes';
import { customResponse } from './middlewares/customResponse';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

app.use(morgan('short'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(customResponse);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);
app.use(getErrors);

export { httpServer, io };
