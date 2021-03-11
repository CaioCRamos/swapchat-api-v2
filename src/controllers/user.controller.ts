import express, { Request, Response } from 'express';
import { IUserService } from '../users/services/user.service';

export const userRouter = express.Router();

userRouter.get('/', (req: Request, res: Response) => {
    // const _userService: IUserService = container.get<IUserService>(USER_TYPES.IUserService);

    // res.status(200).json(_userService.getAll());
});

userRouter.post('/', (req: Request, res: Response) => {
    // try {
    //     const { nome, celular, senha, perguntaSeguranca, respostaSeguranca } = req.body;

    //     const result = _userService.create({
    //         Name: nome,
    //         Phone: celular,
    //         Password: senha,
    //         SecurityQuestion: perguntaSeguranca,
    //         SecutiryAnswer: respostaSeguranca
    //     });

    //     res.status(201).json({
    //         id: result,
    //         mensagem: "Usuário cadastrado com sucesso!"
    //     });
    // } catch (error) {
    //     res.status(500).json({
    //         mensagem: "Sua requisição falhou!",
    //         erro: error.message
    //     });
    // }    
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