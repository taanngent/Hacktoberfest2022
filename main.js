const express = require("express")
const app= express();
const path= require("path");
const hbs=require("hbs");
require("./db/conn");
const port= process.env.port || 3000;
const static_path = (path.join(__dirname,"../public"));
const templates_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");
app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",templates_path);
hbs.registerPartial(partials_path);
app.get("/",(req, res)=>{
    res.render("index");
}
)
app.get("/admin",(req,res)=>{
    res.render("admin")

})
app.listen(port,()=>{
      console.log('Server is running at port number'+port);
})
