//=====================================| Import the Module |=====================================\\
const router = require("express").Router();


//=====================================| Utils |=====================================\\
const { isAuthorized } = require("../Utils/function");


//=====================================| Redirect |=====================================\\
router.get("/", isAuthorized, (req, res) => {
    res.status(200).render("dashboard", {
        userAvatar: `https://cdn.discordapp.com/avatars/${req.user.userID}/${req.user.userAvatar}.png`,
        userName: req.user.userDisplayName,
        userMail: req.user.userEmail
    });
});

module.exports = router;