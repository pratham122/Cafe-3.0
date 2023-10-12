const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://manasishewale9:Mxnxsi@cluster0.cncl2vo.mongodb.net/CafeMERN';
async function mongoDB() {
    try {
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
        const FoodItem = mongoose.model('FoodItem', new mongoose.Schema({}), 'food_items');

        // Use the Mongoose model to find all documents in the "food_items" collection
        // const data = await FoodItem.find({});
        // console.log(data);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = mongoDB;