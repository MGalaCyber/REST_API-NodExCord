//=====================================| Import the Module |=====================================\\
const router = require("express").Router();


//=====================================| Redirect |=====================================\\
router.get("/", (req, res) => {
    req.logOut();
    res.redirect("/");
});

module.exports = router;