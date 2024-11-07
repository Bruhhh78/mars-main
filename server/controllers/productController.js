import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createProduct = asyncHandler(async (req, res) => {
    const { name, image, category, specs, userEmail } = req.body.data || {};

    console.log("Received data:", req.body.data);  // Log the incoming request body

    if (!name || !image || !category || !specs || !userEmail) {
        return res.status(400).send({ message: 'Missing required fields' });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { email: userEmail },
        });

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        // Check if a product with the same name already exists for the same user
        const existingProduct = await prisma.productData.findFirst({
            where: { name, userEmail },
        });

        if (existingProduct) {
            return res.status(400).send({ message: 'Product already exists' });
        }

        // Create the new product if it doesn't already exist
        const product = await prisma.productData.create({
            data: {
                name,
                image,
                category,
                specs,
                owner: { connect: { email: userEmail } },
            },
        });

        res.status(201).send({ message: 'Product created successfully', product });
    } catch (error) {
        console.error("Error during product creation:", error);  // Log the error
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
});
