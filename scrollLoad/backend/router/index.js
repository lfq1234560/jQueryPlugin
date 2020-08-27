let express=require("express");
let homeRouter=require("./home");
let router=express.Router();
router.use("/home",homeRouter);
module.exports=router;