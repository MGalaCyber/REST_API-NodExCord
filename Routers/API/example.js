//=====================================| Import the Module |=====================================\\
const router = require("express").Router();


//=====================================| Redirect |=====================================\\
router.get("/example", async function(req, res) {
    const query = req.query.text; // https://(urlsite)/api/example?text=YOUR_TEXT_HERE

    if (query === undefined) return res.status(404).json({
        status: 404,
        message: "Please input the query!"
    });

    res.status(200).json({
        status: 200,
        message: `You input ${query}`
    });
});

module.exports = router;