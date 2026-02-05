const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://sotimboyevbehruz85_db_user:NTt5xDwVfH7syal6@cluster0.qnok1cz.mongodb.net/')
    console.log('MongoDB ulandi ✅')
  } catch (error) {
    console.log('MongoDB error ❌', error.message)
    process.exit(1)
  }
}

module.exports = connectDB
