var  express = require('express');
var router = express.Router();
import apictr = require("../controller/api")

router.post('/file_upload',async function(req,res,next){
    try{
        await apictr.upload(req)
        res.send('success');
    }catch(err) {
        res.send("err")
    }
})
module.exports = router;