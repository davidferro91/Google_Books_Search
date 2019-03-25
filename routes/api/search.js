const router = require("express").Router();
const googleBooksController = require("../../controllers/googlebooksController");

// Matches with "/api/search/:query"
router
  .route("/:query")
  .get(googleBooksController.search);

module.exports = router;
