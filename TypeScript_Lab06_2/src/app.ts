import express from 'express';
import bodyParser from 'body-parser';
import errorhandler from 'errorhandler';
import {path as pathLivros, router as routerLivros} from './api/livros.rota'

const app = express();
app.set('port', process.env.PORT);
app.use(bodyParser.json());

app.use(pathLivros,routerLivros);

if (process.env.NODE_ENV !== "production") {
    app.use(errorhandler());
}
export default app;