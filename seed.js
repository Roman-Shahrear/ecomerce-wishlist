import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.model.js';
dotenv.config();

const sampleData = [
    {
        "name": "Product 1",
        "category": "Electronics",
        "tags": ["gadget", "tech"],
        "price": 199.99
    },
    {
        "name": "Product 2",
        "category": "Books",
        "tags": ["literature", "novel"],
        "price": 9.99
    },
    {
        "name": "Product 3",
        "category": "Electronics",
        "tags": ["device"],
        "price": 299.99
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        await Product.deleteMany();
        await Product.insertMany(sampleData);
        console.log('Sample data inserted successfully');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error inserting sample data:', error);
        mongoose.connection.close();
    }
};

seedDB();
