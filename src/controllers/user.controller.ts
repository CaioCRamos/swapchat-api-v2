import express, { Request, Response } from 'express';
import { UserService } from '../users/services/user.service';

export const userRouter = express.Router();

userRouter.post('/', (req: Request, res: Response) => {
    try {
        const { nome, celular, senha, perguntaSeguranca, respostaSeguranca } = req.body;

        const userService = new UserService();
        const result = userService.create({
            Name: nome,
            Phone: celular,
            Password: senha,
            SecurityQuestion: perguntaSeguranca,
            SecutiryAnswer: respostaSeguranca
        });

        res.status(201).json({
            id: result,
            mensagem: "Usuário cadastrado com sucesso!"
        });
    } catch (error) {
        res.status(500).json({
            mensagem: "Sua requisição falhou!",
            erro: error.message
        });
    }    
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