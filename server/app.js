import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import ViteExpress from 'vite-express';

const app = express();
const port = '8000';
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: false }));

import handlerFunctions from './controller.js'

const { getMovies, oneMovie, login } = handlerFunctions

app.get('/api/movies', getMovies)
app.get('/api/movies/:movieId', oneMovie)
app.post('/api/auth', login)

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));