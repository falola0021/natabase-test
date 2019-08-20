// require("dotenv").config();

var  express               = require("express");
var  app                   = express();
app.use(express.json());
var  q1Routes              = require("./route/q1");
var  q2Routes              =require("./route/q2");
app.use("/q1",q1Routes);
app.use("/q2",q2Routes);

app.listen(3000 , function(){ console.log("app is working");});






