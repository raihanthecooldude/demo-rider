const {Schema, model} = require("mongoose");

const ParcelSchema = Schema(
  {
    rider: {
      type: String,
    },
    weight: {
      type: Number,
      required: [true, "++ weight is required in parcel Schema"],
    },
    zone: {
      type: String,
      required: [true, "++ zone is required in parcel Schema"],
    },
    amount: {
      type: Number,
      required: [true, "++ amount is required in parcel Schema"],
    },
  },
  {
    timestamps: true,
  }
);

const ParcelModel = model("Parcel", ParcelSchema);
module.exports = ParcelModel;
