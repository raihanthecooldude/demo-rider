const Parcel = require("../../models/Parcel");

const getNoRiderParcelCount = async (req, res) => {
  const count = await Parcel.find({rider: {$exists: false}})
    .count()
    .exec();
  return {count};
};

const mapParcelToRider = async ({riders, parcels}) => {
  let validRiders = [];
  riders.map((riderElem) => {
    let parcelDetails = [];
    parcels.filter((parcelElem) => {
      if (riderElem._id === parcelElem.rider) {
        parcelDetails.push({parcelId: parcelElem._id.toString()});
      }
    });

    validRiders.push({
      riderName: riderElem._id,
      parcelCount: riderElem.parcelCount,
      parcelDetails,
    });

    return;
  });

  return validRiders;
};

const getValidRiderList = async (req, res) => {
  const riders = await Parcel.aggregate([
    {
      $match: {
        rider: {
          $exists: true,
          $ne: null,
        },
      },
    },
    {
      $group: {
        _id: "$rider",
        parcelCount: {$count: {}},
      },
    },
    {$match: {parcelCount: {$lte: 10}}},
  ]).exec();

  const riderNames = riders.map((elem) => elem._id);

  const parcels = await Parcel.find({rider: riderNames}).select("_id rider");

  const validRiders = mapParcelToRider({riders, parcels});
  return validRiders;
};

const getTotalCollectedAmount = async (req, res) => {
  const result = await Parcel.aggregate([
    {
      $match: {
        rider: {
          $exists: true,
          $ne: null,
        },
      },
    },
    {
      $group: {
        _id: "$rider",
        totalCollectedAmount: {$sum: "$amount"},
      },
    },
    {$sort: {totalCollectedAmount: -1}},
  ]).exec();

  const riderWithAmount = result.map((elem) => {
    return {
      riderName: elem._id,
      totalCollectedAmount: elem.totalCollectedAmount,
    };
  });

  return riderWithAmount;
};

module.exports = {
  getNoRiderParcelCount,
  getValidRiderList,
  getTotalCollectedAmount,
};
