let express = require("express");
let router = express.Router();
let query = require("../mysql/index");
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,PATCH,POST,GET,DELETE,OPTIONS");
    if (req.method == "OPTIONS") {
        res.sendStatus(200);
    } else {
        next();
    }
    ;
});
//接口1
router.get("/data1", async (req, res) => {
    try {
        var data = await query("SELECT * FROM  scrollimg");
    } catch (e) {
        console.log(e)
    }
    let result = "";
    if (data.length) {
        result = {
            data: data[0],
            msg: "success"
        }
    } else {
        result = {
            msg: "error"
        }
    }
    res.send(result);

});
//接口2
router.get("/data2", async (req, res) => {
    try {
        var data = await query("SELECT * FROM  scrollimg");
    } catch (e) {
        console.log(e)
    }
    let result = "";
    if (data.length) {
        result = {
            data: data[1],
            msg: "success"
        }
    } else {
        result = {
            msg: "error"
        }
    }
    res.send(result);

});
//接口3
router.get("/data3", async (req, res) => {
    try {
        var data = await query("SELECT * FROM  scrollimg");
    } catch (e) {
        console.log(e)
    }
    let result = "";
    if (data.length) {
        result = {
            data: data[1],
            msg: "success"
        }
    } else {
        result = {
            msg: "error"
        }
    }
    res.send(result);

});
module.exports = router;