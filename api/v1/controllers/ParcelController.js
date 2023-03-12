const createError = require("../../../lib/utils/createError");
const {getNoRiderParcelCount} = require("../../../lib/services/ParcelServices");

const getNoRiderParcelCountController = async (req, res, next) => {
  try {
    const result = await getNoRiderParcelCount(req, res);

    return res.status(200).json(result);
  } catch (err) {
    next(createError(404, "Not found!"));
  }
};

module.exports = {getNoRiderParcelCountController};
