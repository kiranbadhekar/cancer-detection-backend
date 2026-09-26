const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },

    age: {
      type: Number,
      required: true,
      min: 1,
      max: 120,
    },

    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Others"],
    },

    cancerType: {
      type: String,
      required: true,
      enum: [
        "Lung Cancer",
        "Breast Cancer",
        "Oral Cancer",
        "Colon Cancer",
        "Prostate Cancer",
        "Cervical Cancer",
        "Others",
      ],
    },

    date: {
      type: Date,
      required: true,
    },

    specialist: {
      type: String,
      required: true,
      trim: true,
    },

    additionalMessage: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Appointment = mongoose.model(
  "Appointment",
  appointmentSchema
);

module.exports = Appointment;