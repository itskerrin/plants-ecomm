import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany(); // will delete everything
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users); // inserts the users data
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser, // add admin to each product
      };
    });

    await Product.insertMany(sampleProducts); // all data incl. admin

    console.log('Data Imported');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

// checks what is passed in terminal (import or destroy)
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
