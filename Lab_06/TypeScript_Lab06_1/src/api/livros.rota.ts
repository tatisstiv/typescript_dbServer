import {Router} from 'express';
import * as controlador from './livros.controlador'

export const router = Router();
export const path = '/livros';

router.get('', controlador.getLivros);
router.get('/:id', controlador.getLivro);