import { body } from "express-validator";
import { validarCampos } from "./validar-campos.js";
import { existenteEmail, existenteNameCategorie } from "../helpers/db-validator.js";

export const validatorRegister = [
    body('name', 'The name is required').not().isEmpty(),
    body('surname', 'The username is required').not().isEmpty(),
    body('email', 'You must enter a valid email').isEmail(),
    body('email').custom(existenteEmail),
    body('password', 'Password must be at least 8 characters').isLength({ min: 8 }),
    validarCampos
];

export const validatorLogin = [
    body('email').optional().isEmail().withMessage('Enter a valid email address'),
    body('username').optional().isString().withMessage('Enter a valid username'),
    body('password', 'Password must be at least 8 characters').isLength({ min: 8 })
];

export const validatorCategorie = [
    body('name', 'The name is required').not().isEmpty(),
    body('name').custom(existenteNameCategorie),
    body('description', 'The description is required').not().isEmpty(),
    validarCampos
];