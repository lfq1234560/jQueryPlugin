let express=require("express");
let allRouter=require("./router/index");
let app=express();
app.use(express.static("./"));
app.use(allRouter);
app.listen(4000,()=>{
    console.log("服务器开启");
})
