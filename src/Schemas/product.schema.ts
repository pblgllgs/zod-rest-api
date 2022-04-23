import { z } from "zod";

export const productSchema = z.object({
    name: z.string().nonempty('Name is required'),
    price: z.number().nonnegative('Price must be a non-negative number'),
});