import express from 'express';
import routes from './route';
import { middlewareRoutes } from './middlewares';
import { foodRouter } from './router/foodRouter';
import { globalRouter } from './router/globalRouter';

const app = express();

app.set('view engine', 'pug');

app.use(middlewareRoutes);

app.use(routes.home, globalRouter);
app.use(routes.food, foodRouter);

app.listen(3000, () => {
	console.log('Gogosing~Express app listening on port 3000');
});

export default app;
