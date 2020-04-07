var  express = require('express');
var router = express.Router();
import apictr = require("../controller/api")

router.post('/file_upload',async function(req,res,next){
    try{
        let result = await apictr.upload(req);
        if(result && result.code == 200) {
            console.log(result)
            res.send('success');
        }
    }catch(err) {
        res.send("err")
    }
})
router.get('/list',async function(req,res,next){
    try{
        let result =  await apictr.getList(req);
        if(result && result.length) {
            res.send(result);
        }
    }catch(err) {
        res.send("err")
    }
})
module.exports = router;