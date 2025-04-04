import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.json({ message: 'Hello, World!' }));



app.use((err, req, res, next) => {
    res.status(500).json({ error: 'Something went wrong!',
    message: err.message });
})

export default app;