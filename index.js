require('dotenv').config();

const connectDB = require('./src/db/connect');
const server = require('./src/server');
const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        server.listen (port, () => console.log('Server is running'));
    } catch (error) {
        console.log(error);
    }

}

start();