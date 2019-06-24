import {Request, Response, NextFunction} from 'express';
import * as negocio from '../negocio/negocio';

export async function getLivros(req: Request, res: Response, next: NextFunction) {
    try {
        const livros = await negocio.todosLivros();
        res.json(livros);
    } catch (error) {
        next(error);
    }
}

export async function getLivro(req: Request, res: Response, next: NextFunction) {
    try {
        const id = req.params.id;
        const livro = await negocio.consultarLivroPorId(id);
        if(livro === null){
            res.status(404).end();
        } else {
            const {titulo,autores} = livro;
            res.json({titulo,autores});
        }
    } catch (error) {
        next(error);
    }
}