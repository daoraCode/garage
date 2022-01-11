const mongoose = require('mongoose');

const dbConnect = () => {
    const dbName = 'garage_db';
    const dbUrl = `mongodb://localhost:27017/${dbName}`;

    try {
        mongoose.connect(dbUrl);
        console.log(`Connected to ${dbName} database`);
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    dbConnect
};