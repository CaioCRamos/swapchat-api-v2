import 'reflect-metadata';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from './controllers/user.controller';
import { Container } from 'inversify';
import { UserContainer } from './users/ioc/user.container';

export class Server {
    private _app: express.Express;
    private _container: Container;
    private _port: number;

    constructor() {
        this._app = express();
        this._container = new Container();

        this.setup();
        this.registerServices();
        this.registerRoutes();
        this.initialize();
    }

    private setup(): void {
        dotenv.config();

        this._port = Number.parseInt(process.env.PORT) || 8181;

        this._app.set('PORT', this._port);
        this._app.use(helmet());
        this._app.use(cors());
        this._app.use(express.json());

        mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
    }

    private initialize(): void {
        this._app.listen(this._port, () => console.log('Listening on port: ' + this._port));
    }

    private registerServices(): void {
        this._container.load(new UserContainer().get());
    }

    private registerRoutes(): void {
        this._app.get('/v2', async (_: Request, res: Response) => {
            res.status(200).json({ message: "It's all ok" });
        });

        this._app.use('/v2/users', userRouter);
    }
}

export default new Server();