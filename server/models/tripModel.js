const mongoose = require('mongoose');

// Creating a schema–a "blueprint" for our data
const tripSchema = new mongoose.Schema({
    // Define schema here
    destination: String, 
    journalEntry: String,
    startDate: Date,
    endDate: Date,
});

// Create a model for our trips based on the schema
const tripModel = mongoose.model('tripModel',tripSchema);

// Export model schema
module.exports = 'tripModel';