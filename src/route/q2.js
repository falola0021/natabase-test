var express= require("express");
var router= express.Router();
-
router.post("/check", function(req,res){
    try {
    var data = req.body.data
    let toDelete = req.body.item
     if(toDelete in data){
         delete data[toDelete]
         return res.json(data);
     }
     return res.send("attribute not found")

    } catch (ex) {
        return res.status(400).send({ error: "Bad Request: Ensure you have you the rules stated in your request" });
    }


});

module.exports = router;