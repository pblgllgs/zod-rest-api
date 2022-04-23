import express from 'express';
import authRoutes from './routes/auth.routes';
import productRoutes from './routes/product.routes';

const app = express();

app.use(express.json());
app.use(authRoutes);
app.use(productRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

