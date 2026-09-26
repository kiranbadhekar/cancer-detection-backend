const Appointment = require("../models/appointment");

// Create appointment
const createAppointment = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phoneNumber,
      age,
      gender,
      cancerType,
      date,
      specialist,
      additionalMessage,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !phoneNumber ||
      !age ||
      !gender ||
      !cancerType ||
      !date ||
      !specialist
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required appointment fields",
      });
    }

    const appointment = await Appointment.create({
      fullName,
      email,
      phoneNumber,
      age,
      gender,
      cancerType,
      date,
      specialist,
      additionalMessage,
    });

    res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      appointment,
    });
  } catch (error) {
    console.error("Appointment error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to book appointment",
      error: error.message,
    });
  }
};

// Get all appointments
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: appointments.length,
      appointments,
    });
  } catch (error) {
    console.error("Get appointments error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to get appointments",
      error: error.message,
    });
  }
};

// Get one appointment
const getAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    res.status(200).json({
      success: true,
      appointment,
    });
  } catch (error) {
    console.error("Get appointment error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to get appointment",
      error: error.message,
    });
  }
};

// Delete appointment
const deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(
      req.params.id
    );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Appointment deleted successfully",
    });
  } catch (error) {
    console.error("Delete appointment error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete appointment",
      error: error.message,
    });
  }
};

module.exports = {
  createAppointment,
  getAppointments,
  getAppointment,
  deleteAppointment,
};