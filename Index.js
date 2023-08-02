const Express = require("express")
const mongoose = require("mongoose");

let data = require("./data/data");
const App = Express();
let cors = require("cors");
App.use(cors());
let bodyparser = require("body-parser");
App.use(bodyparser.json());
App.use("/",data)

// App.use('/uploads', Express.static('./uploads'));
mongoose.connect("mongodb+srv://sathishcharyssc:wnVp7CxJRXMHmQ3g@cluster0.oavc5fw.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongodb connected successfully");
})
.catch((err)=>{
    console.log(err);
})
App.listen(300,()=>console.log("server running 300"));