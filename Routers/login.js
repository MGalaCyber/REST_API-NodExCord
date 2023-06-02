//=====================================| Import the Module |=====================================\\
const router = require("express").Router();
const Passport = require("passport");


//=====================================| Redirect |=====================================\\
router.get("/discord", Passport.authenticate("discord", {
    scope: JSON.parse(process.env.SCOPE)
}));
router.get("/discord/callback", Passport.authenticate("discord", {
    failureRedirect: "/"

}), (req, res) => {
    res.redirect("/dashboard");
});

module.exports = router;