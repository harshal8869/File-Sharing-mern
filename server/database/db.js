import mongoose from "mongoose";


const DBConnection = async () => {
    const MONGODB_URL = `mongodb://harshal:endisthebeginning@ac-uasy5vv-shard-00-00.9rsz1gu.mongodb.net:27017,ac-uasy5vv-shard-00-01.9rsz1gu.mongodb.net:27017,ac-uasy5vv-shard-00-02.9rsz1gu.mongodb.net:27017/?ssl=true&replicaSet=atlas-qu4pdd-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
        console.log('Database connected successfully');
    }
    catch (error) {
        console.error('Error while connecting the database', error.message);

    }
}

export default DBConnection;