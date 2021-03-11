import express, { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { USER_TYPES } from 'src/users/ioc/user.types';
import { IUserService } from '../users/services/user.service';

@injectable()
export class UserController {
    private readonly _userService: IUserService;
    public Router = express.Router();

    constructor(@inject(USER_TYPES.IUserService) userService: IUserService) {
        this._userService = userService;
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.Router.get('/', this.getAll);
        this.Router.post('/', this.create);
        this.Router.post('/accounts', this.createAccounts);
        this.Router.get('/:id', this.getById);
        this.Router.get('/accounts/:userAccountId/image', this.getAccountImage);
    }

    getAll = async (req: Request, res: Response) => {
        res.status(200).json(this._userService.getAll());
    };

    create = async (req: Request, res: Response) => {
        try {
            const { nome, celular, senha, perguntaSeguranca, respostaSeguranca } = req.body;

            const result = this._userService.create({
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
    };

    createAccounts = async (req: Request, res: Response) => {
        res.status(200).send();
    }

    login = async (req: Request, res: Response) => {
        res.status(200).send();
    }

    getById = async (req: Request, res: Response) => {
        res.status(200).send();
    }

    getAccountImage = async (req: Request, res: Response) => {
        res.status(200).send();
    }
}