var express = require("express");
var router = express.Router();
-
    router.post("/check", function (req, res) {
        try {
            var missing = [];
            var responseMessage = "valid"
            for (rule of req.body.rules) {
            if (!(rule in req.body.data)) {
                    console.log("missing", rule)
                    missing.push(rule);
                }
            }
            if (missing.length) {
                responseMessage = "Your request has missing value(s) -" + missing.join();
                return res.json({ missing: missing, message: responseMessage })
            }
            else {
                return res.json({ message: responseMessage })
            }
        } catch (ex) {
            return res.status(400).send({ error: "Bad Request: Ensure you have you data and rules stated in your request" });
        }




    });

module.exports = router;