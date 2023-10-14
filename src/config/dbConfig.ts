//import { Server } from "http";

const mongoose = require ('mongoose');

const  dbconfig = 'mongodb+srv://tiagomagalhaes:QA9NlT1WrUaZnTeE@cluster0.ztshb4o.mongodb.net/managements?retryWrites=true&w=majority';

const connection = mongoose.connect(dbconfig,{
    useNewurlParser:true,
    useUnifieldtopology:true,

});

module.exports = connection;
