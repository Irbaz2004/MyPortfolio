import React, { useState } from "react";
import emailjs from "emailjs-com";
import { TextField, Snackbar, Alert } from "@mui/material";
import { ArrowOutwardOutlined } from "@mui/icons-material";
import "../Style/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [alert, setAlert] = useState({
    open: false,
    type: "", // "success" or "error"
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_rslxdkn"; // Replace with your EmailJS service ID
    const templateID = "template_j24r6bq"; // Replace with your EmailJS template ID
    const userID = "MjL5Pfz0eAneD01Ry"; // Replace with your EmailJS user ID

    emailjs
      .send(
        serviceID,
        templateID,
        {
          fullname: formData.fullname,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        userID
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setAlert({
          open: true,
          type: "success",
          message: "Message sent successfully!",
        });
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        setAlert({
          open: true,
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      });
  };

  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    <>
      <div className="contacts">
        <div className="contact-content">
          <h4>Get In Touch</h4>
          <h2 className="contact-h2">
            Let's Talk For Your <span>Next Projects</span>
          </h2>
          <p>
            Feel free to reach out if you have any questions or need further
            assistance. We are always here to help!
          </p>
          <div className="contact-experince">
            <div className="icon">
              <ArrowOutwardOutlined fontSize="large"/>
            </div>
            <p>1+ Year of experience</p>
          </div>
          <div className="contact-experince">
            <div className="icon">
              <ArrowOutwardOutlined fontSize="large" />
            </div>
            <p>10+ Projects completed</p>
          </div>
          <div className="contact-experince">
            <div className="icon">
              <ArrowOutwardOutlined fontSize="large" />
            </div>
            <p>10+ Clients served</p>
          </div>
          <div className="contact-experince">
            <div className="icon">
              <ArrowOutwardOutlined fontSize="large" />
            </div>
            <p>Custom Design Support</p>
          </div>
        </div>
        <form className="contact-input" onSubmit={handleSubmit}>
          <div className="input-row">
            <TextField
              id="fullname"
              label="Full Name"
              variant="outlined"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
            <TextField
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-row">
            <TextField
              id="phone"
              label="Phone Number"
              type="tel"
              variant="outlined"
              value={formData.phone}
              onChange={handleChange}
            />
            <TextField
              id="subject"
              label="Subject"
              variant="outlined"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <TextField
            id="message"
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="send-button">
            Send Message
          </button>
        </form>
      </div>
      <Snackbar
  open={alert.open}
  autoHideDuration={6000}
  onClose={handleCloseAlert}
  anchorOrigin={{ vertical: "top", horizontal: "center" }}
  sx={{
    "& .MuiAlert-filled": {
      backgroundColor: "black", // Set the background color to black
      color: "white", // Change text color to white for better contrast
    },
  }}
>
  <Alert
    onClose={handleCloseAlert}
    severity={alert.type}
    variant="filled"
    sx={{
      backgroundColor: "black", // Ensure the Alert itself is styled if required
      color: "white",
    }}
  >
    {alert.message}
  </Alert>
</Snackbar>

    </>
  );
}
