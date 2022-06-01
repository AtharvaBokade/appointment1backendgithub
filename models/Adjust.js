const mongoose = require('mongoose');

const AdjustSchema = new mongoose.Schema({
    time1: {
        type: String,
    },
    time2: {
        type: String,
    },
    time3: {
        type: String,
    },
    time4: {
        type: String,
    },
    time5: {
        type: String,
    },
    
    cancel_status:{

        type: String,
        require: true,
    },
    
    
});

const Data1 = mongoose.model("Data1",AdjustSchema);
module.exports = Data1;