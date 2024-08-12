const mongoose = require("mongoose");
const db_url = process.env.DATABASE_URL;

const connectDB = async()=>{
    try {
        await mongoose.connect(db_url)
        console.log('Connection to database successful!')
    } catch (error) {
        console.log("Error in database: ",error)
        process.exit(0)
    }
}

module.exports = connectDB