const Contact = require("../models/contact");

// Create contact message
const createContact = async (req, res) => {
  try {
    const {
      name,
      email,
      subject,
      message,
    } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All contact fields are required",
      });
    }

    // Save contact message
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Your message has been sent successfully",
      contact: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        message: contact.message,
      },
    });
  } catch (error) {
    console.error("Contact error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send contact message",
      error: error.message,
    });
  }
};

// Get all contact messages
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: contacts.length,
      contacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get contact messages",
      error: error.message,
    });
  }
};

module.exports = {
  createContact,
  getContacts,
};