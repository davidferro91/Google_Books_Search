const router = require("express").Router();
const googleBookRoutes = require("./googlebooks");
const searchRoutes = require("./search");

// Google Book Routes
router.use("/googlebooks", googleBookRoutes);
router.use("/search", searchRoutes)

module.exports = router;