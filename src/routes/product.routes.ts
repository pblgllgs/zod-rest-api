import { Router } from 'express';
import { createProduct } from '../controllers/product.controller';
import { schemaValidation } from '../middlewares/schemaValidator.middleware';
import { productSchema } from '../Schemas/product.schema';

const router = Router();
router.post('/products',schemaValidation(productSchema),
    createProduct
);

export default router;