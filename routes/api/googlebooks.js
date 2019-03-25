const router = require("express").Router();
const googleBooksController = require("../../controllers/googlebooksController");

// Matches with "/api/googlebooks"
router.route("/")
  .get(googleBooksController.findAll)
  .post(googleBooksController.create);

// Matches with "/api/googlebooks/:id"
router
  .route("/:id")
  .get(googleBooksController.findById)
  .put(googleBooksController.update)
  .delete(googleBooksController.remove);

module.exports = router;