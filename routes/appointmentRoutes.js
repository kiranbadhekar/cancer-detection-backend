const express = require("express");

const {
  createAppointment,
  getAppointments,
  getAppointment,
  deleteAppointment,
} = require("../controllers/appointmentController");

const router = express.Router();

// Create appointment
router.post("/", createAppointment);

// Get all appointments
router.get("/", getAppointments);

// Get one appointment
router.get("/:id", getAppointment);


// Delete appointment
router.delete("/:id", deleteAppointment);



module.exports = router;