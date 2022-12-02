const mongoose = require('mongoose');
const url = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(url);
    } catch (err) {
        console.error({ error: err });
    }
};

module.exports = connectDB;
