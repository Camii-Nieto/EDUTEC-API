const mongoose = require('mongoose');
const uri = "mongodb+srv://EDUTEC:4944208@cluster0.kena6.mongodb.net/edutec?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});