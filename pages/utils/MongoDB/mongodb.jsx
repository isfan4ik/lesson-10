import mongoose from 'mongoose'

const newLocal = async () => {
    await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Mogowork!');
        })
        .catch((err) => {
            console.log(err);
        });
};
const connectMongoDB = newLocal

export default connectMongoDB;