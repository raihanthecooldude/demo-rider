const createError = require("../../../lib/utils/createError");
const {
  getValidRiderList,
  getTotalCollectedAmount,
} = require("../../../lib/services/ParcelServices");

const getValidRiderListController = async (req, res, next) => {
  try {
    const result = await getValidRiderList(req, res);

    return res.status(200).json(result);
  } catch (err) {
    next(createError(404, "Not found!"));
  }
};

const getTotalCollectedAmountController = async (req, res, next) => {
  try {
    const result = await getTotalCollectedAmount(req, res);

    return res.status(200).json(result);
  } catch (err) {
    next(createError(404, "Not found!"));
  }
};

module.exports = {
  getValidRiderListController,
  getTotalCollectedAmountController,
};
