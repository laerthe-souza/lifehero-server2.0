import 'express-async-errors';

import express from 'express';

import { getErrors } from './errors/getErrors';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(getErrors);

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});
