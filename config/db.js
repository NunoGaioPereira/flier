const mongoose = require('mongoose');

console.log('Got mongooose --------------------------------------------');
console.log('Got mongooose --------------------------------------------');
console.log('Got mongooose --------------------------------------------');
console.log('Got mongooose --------------------------------------------');
console.log('Got mongooose --------------------------------------------');
console.log('Got mongooose --------------------------------------------');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://mongo_nuno:epSfGvXbFvLpJUKb@flier.ehw8s.mongodb.net/flier?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB connected ${conn.connection.host}`);
    }
    catch(err) {
        console.log(`Error: ${err.message}`.red);
        process.exit(1);
    }
}

module.exports = connectDB;