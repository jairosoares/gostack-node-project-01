import express from 'express';
import routes from './routes';

// Separation of concerns (models, repositories, routes and service)
// SOLID: Single Responsability Principle
// Dependecy Invertion Principle
// DTO: Data Transfer Object
// DRY: Dont repeat yourself

const app = express();

app.use(express.json());
app.use(routes);

export default app;
