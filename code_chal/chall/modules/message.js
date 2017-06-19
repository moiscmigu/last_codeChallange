var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();
var mongoose = require('mongoose');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
mongoose.connect("localhost:/27017/messageBoard");
var messageSchema = new mongoose.Schema(
    {
        name:String, message:String
    });
var messageModel = mongoose.model("messageModel", messageSchema);


router.post('/', function(req, res) {
    console.log('post url hit');
    var message = {
        name: req.body.name,
        message: req.body.message
    };
    var messageNew = new messageModel(message);
    console.log(messageNew);
    messageNew.save();


    res.send("got it");

});

router.get('/', function(req, res) {
    messageModel.find().then(function(respond) {
        res.send(respond);
    });
});






module.exports = router;
