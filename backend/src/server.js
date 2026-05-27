import express from 'express';
import 'dotenv/config';
import routes from './routes/taskRoutes.js';

const app = express();
app.use(express.json());

const PORT = process.env.PORT

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
})

