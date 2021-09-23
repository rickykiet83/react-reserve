import mongoose from 'mongoose';

const connection = {};

async function connectDb() {
  if (connection.isConnected) {
    console.log('Using existing connection');
    return;
  }
  // Use new database connection
  const db = await mongoose.connect(process.env.MONGO_SRV, {
    autoIndex: true,
    autoCreate: true,
  });
  console.log('DB connected');
  connection.isConnected = db.connection.readyState;
}

export default connectDb;
