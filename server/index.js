require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const Contact = require("./models/Contact");

console.log(
    "Mongo URI exists:",
    !!process.env.MONGODB_URI
);

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB Connected")
    })
    .catch((error) => {
        console.log("MONGODB CONNECTION ERROR:");
        console.log(error.message);
    });

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server Running");
});

app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const newContact = await Contact.create({
            name,
            email,
            message,
        });

    res.status(201).json({
        success: true,
        message: "Form submitted successfully",
        data: newContact,
    });
} catch (error) {
    console.log(error);

    res.status(500).json({
        success: false,
        message: error.message
    });
} 
});

app.get("/api/contact", async (req, res) => {
  try {
    const contacts = await Contact.find();

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.log("GET CONTACT ERROR:");
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});