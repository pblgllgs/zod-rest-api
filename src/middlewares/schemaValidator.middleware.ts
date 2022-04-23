import { NextFunction, Request, Response, Router } from 'express';
import { AnyZodObject, ZodError } from 'zod';

const router = Router();

export const schemaValidation = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400)
                .json(error.issues.map(issue => ({ message: issue.message })));
        }
        return res.status(400).json({ message: 'Internal server error' })
    }
}
