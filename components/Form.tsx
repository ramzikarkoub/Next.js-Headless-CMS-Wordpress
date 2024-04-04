import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button, TextField } from "@mui/material";
import SuccessAlert from "./SuccessAlert";
import FailAlert from "./FailAlert";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission status

  const handleClose = () => {
    setOpenSuccess(false);
    setOpenError(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const errors: FormErrors = {};

    // Check if name is empty
    if (!formData.name.trim()) {
      errors.name = "Name is required";
      valid = false;
    }

    // Check if email is empty and has valid format
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
      valid = false;
    }

    // Check if subject is empty
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
      valid = false;
    }

    // Check if message is empty
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Form data is valid, proceed with submission
    setIsSubmitting(true); // Set isSubmitting to true
    console.log("Form submitted successfully!");

    // Simulate submission delay
    setTimeout(() => {
      setOpenSuccess(true);
      setIsSubmitting(false); // Reset isSubmitting after submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 2000); // Change 2000 to your desired delay in milliseconds
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="name"
          label="Full Name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleInputChange}
          error={!!formErrors.name}
          helperText={formErrors.name}
          fullWidth
          margin="normal"
        />
        <TextField
          type="email"
          name="email"
          label="Email Address"
          placeholder="example@domain.com"
          value={formData.email}
          onChange={handleInputChange}
          error={!!formErrors.email}
          helperText={formErrors.email}
          fullWidth
          margin="normal"
        />
        <TextField
          type="text"
          name="subject"
          label="Subject"
          placeholder="Enter your subject"
          value={formData.subject}
          onChange={handleInputChange}
          error={!!formErrors.subject}
          helperText={formErrors.subject}
          fullWidth
          margin="normal"
        />
        <TextField
          multiline
          rows={4}
          name="message"
          label="Message"
          placeholder="Type your message"
          value={formData.message}
          onChange={handleInputChange}
          error={!!formErrors.message}
          helperText={formErrors.message}
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          className="hover:shadow-form rounded-md bg-gray-900  hover:bg-gray-700 py-3 px-8 text-base text-white outline-none mt-5"
          // disabled={isSubmitting} // Disable button while submitting
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
      {openSuccess && (
        <div className="mt-5">
          <SuccessAlert handleClose={handleClose} />
        </div>
      )}
      {openError && <FailAlert handleClose={handleClose} />}
    </div>
  );
}
