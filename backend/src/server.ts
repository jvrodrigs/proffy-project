import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(9000, function () {
    console.log("Iniciando.. \nPorta: " + 9000);
    
});