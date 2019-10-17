import express from 'express';
import routes from './route';
import './db';
import { middlewareRoutes, middlewareReady } from './middlewares';
import foodRouter from './router/foodRouter';
import globalRouter from './router/globalRouter';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();
import './model/Food';
import './model/Comment';
import './model/User';

const app = express();

app.set('view engine', 'pug');

app.use(bodyParser());
app.use(cookieParser());
app.use(middlewareRoutes);

app.use(routes.home, globalRouter);
app.use(routes.food, foodRouter);

app.listen(process.env.PORT, () => {
	console.log('✅  Express app listening on port 3000');
});

export default app;
