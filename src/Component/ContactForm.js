import React, { useState } from "react";
import "./Style/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }
    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email format";
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length > 100) {
      newErrors.message = "Message cannot exceed 100 characters";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLScni87x6JDyREWq7OQRcefJfqFd8-5Mji5_pP9gtv-LeI4sTg/viewform?usp=headerResponse"; // Replace with your form action URL

    const formBody = new URLSearchParams({
      "entry.1234567890": formData.fullName, // Replace with Google Form fields
      "entry.2345678901": formData.email,
      "entry.3456789012": formData.phone,
      "entry.4567890123": formData.address,
      "entry.5678901234": formData.message,
    });

    try {
      await fetch(formURL, {
        method: "POST",
        body: formBody,
        mode: "no-cors", // Required for Google Forms submission
      });
      alert("Form submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Submission failed", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Get in Touch</h2>

        <div className="form-group">
          <input
            type="text"
            name="fullName"
            placeholder="Your Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="address"
            placeholder="Your Address (Optional)"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <textarea
            name="message"
            placeholder="How can we help?"
            value={formData.message}
            onChange={handleChange}
            maxLength={100}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
