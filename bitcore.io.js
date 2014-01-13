var express=require("express");
try { 
  var config=require("./config");
} catch (e) {
  var config=require("./config.default");
}

var app=express();

app.set("env", config.env);
app.set("port", config.port);
app.use(express.static(__dirname+"/public"));

app.listen(config.port, function(){
  console.log("Listening on port " + config.port);
});
