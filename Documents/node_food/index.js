import express from 'express';
import routes from './route';
import { home } from './controllers/usercontroller';
import { food, upload } from './controllers/foodcontroller';
import { middlewareRoutes } from './middlewares';
import { foodRouter } from './router/foodRouter';
import {} from './router/globalRouter';

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use(middlewareRoutes);
app.get(routes.home, home);
app.get(routes.food, foodRouter);
app.get(routes.list, list);

app.listen(3000, () => {
	console.log('Gogosing~Express app listening on port 3000');
});
