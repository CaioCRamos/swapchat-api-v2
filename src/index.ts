import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const port = process.env.PORT || 8181;
const app = express();

app.set('PORT', port);
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/v1', async (_: Request, res: Response) => {
    res.status(200).json({
        message: "It's all ok"
    });
});

app.listen(port, () => console.log('Listening on port: ' + port));