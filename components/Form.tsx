// import React from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // export default function Form() {
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const formData = new FormData(e.target);
// //     const formId = 1655; // Assuming you have the form ID
// //     formData.append("_wpcf7_unit_tag", "wpcf7-f" + formId + "-123"); // Adding the _wpcf7_unit_tag parameter
// //     const reqOptions = {
// //       method: "POST",
// //       body: formData,
// //     };
// //     const req = await fetch(
// //       "https://www.ramzikarkoub.com/wp-json/contact-form-7/v1/contact-forms/1655/feedback",
// //       reqOptions
// //     );
// //     const response = await req.json();
// //     console.log(response);
// //     if (response.status === "mail_sent") {
// //       toast.success(response.message);
// //     } else {
// //       toast.error("Form submission failed. Please try again.");
// //     }
// //   };
// export default function Form() {
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const formId = 1655; // Assuming you have the form ID
//     formData.append("_wpcf7_unit_tag", "wpcf7-f" + formId + "-123"); // Adding the _wpcf7_unit_tag parameter
//     const reqOptions = {
//       method: "POST",
//       body: formData,
//     };
//     const req = await fetch(
//       "https://www.ramzikarkoub.com/wp-json/contact-form-7/v1/contact-forms/1655/feedback",
//       reqOptions
//     );
//     const response = await req.json();
//     console.log(response);
//     if (response.status === "mail_sent") {
//       console.log("zebu");
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-5">
//         <label
//           htmlFor="name"
//           className="mb-3 block text-base font-medium text-[#07074D]"
//         >
//           Full Name
//         </label>
//         <input
//           type="text"
//           name="your-name"
//           id="name"
//           placeholder="Full Name"
//           className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//         />
//       </div>
//       <div className="mb-5">
//         <label
//           htmlFor="email"
//           className="mb-3 block text-base font-medium text-[#07074D]"
//         >
//           Email Address
//         </label>
//         <input
//           type="email"
//           name="your-email"
//           id="email"
//           placeholder="example@domain.com"
//           className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//         />
//       </div>
//       <div className="mb-5">
//         <label
//           htmlFor="subject"
//           className="mb-3 block text-base font-medium text-[#07074D]"
//         >
//           Subject
//         </label>
//         <input
//           type="text"
//           name="your-subject"
//           id="subject"
//           placeholder="Enter your subject"
//           className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//         />
//       </div>
//       <div className="mb-5">
//         <label
//           htmlFor="message"
//           className="mb-3 block text-base font-medium text-[#07074D]"
//         >
//           Message
//         </label>
//         <textarea
//           rows={4}
//           name="your-message"
//           id="message"
//           placeholder="Type your message"
//           className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//         ></textarea>
//       </div>
//       <div>
//         <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// }

import React, { useState } from "react";
import { Button, Snackbar, TextField } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import SuccessAlert from "./SuccessAlert";
import FailAlert from "./FailAlert";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
    setOpenError(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Form data is valid, proceed with submission
    // Your form submission logic here
    console.log("Form submitted successfully!");

    setOpenSuccess(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Full Name
        </label>
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
          className="w-full rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
        >
          Submit
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
