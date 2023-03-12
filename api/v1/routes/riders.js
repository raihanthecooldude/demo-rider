const router = require("express").Router();
const {
  getValidRiderListController,
  getTotalCollectedAmountController,
} = require("../controllers/RiderController");

router.get("/valid-rider", getValidRiderListController);
router.get("/total-collection", getTotalCollectedAmountController);

module.exports = router;
