const router = require("express").Router();
const riderRoutes = require("./riders");
const parcelRoutes = require("./parcels");

router.use("/rider", riderRoutes);
router.use("/parcel", parcelRoutes);

module.exports = router;
