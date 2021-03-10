import express, { Request, Response } from 'express';

export const userRouter = express.Router();

userRouter.post('/', (req: Request, res: Response) => {
    res.status(200).send();
});

userRouter.post('/accounts', (req: Request, res: Response) => {
    res.status(200).send();
});

userRouter.post('/login', (req: Request, res: Response) => {
    res.status(200).send();
});

userRouter.get('/:id', (req: Request, res: Response) => {
    res.status(200).send();
});

userRouter.get('/accounts/:userAccountId/image', (req: Request, res: Response) => {
    res.status(200).send();
});