import express from 'express';
import { z, ZodError } from 'zod';


const app = express();

const loginSchema = z.object({
    email: z.string().nonempty('Email is required').email({
        'message': 'Email is not valid'
    }),
    password: z.string().nonempty('Password is required').min(6, {
        'message': 'Password must be at least 6 characters'}),
});

app.use(express.json());

app.post('/login', (req, res) => {
    try {
        const result = loginSchema.parse(req.body);
        console.log(result);
        res.send("login");
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400)
                .json(error.issues.map(issue => ({ message: issue.message })));
        }
        return res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

