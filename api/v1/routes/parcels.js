const router = require("express").Router();
const {
  getNoRiderParcelCountController,
} = require("../controllers/ParcelController");

router.get("/no-rider-count", getNoRiderParcelCountController);

module.exports = router;
