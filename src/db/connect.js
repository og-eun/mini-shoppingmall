const mongoose = require('mongoose');

const connectDB = async(url) => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.log('Failed to connect to MongoDB', err);
    }
};

module.exports = connectDB;