import { useState } from "react";
import "../styles/adoptionform.css";

const AdoptionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    reasonForAdoption: "",
    experienceWithPets: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^(?:\+91|91)?\d{10}$/;

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email Address is required.";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Please enter a valid email address.";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required.";
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = "Please enter a valid Indian phone number.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.reasonForAdoption.trim()) newErrors.reasonForAdoption = "Reason for Adoption is required.";
    if (!formData.experienceWithPets.trim()) newErrors.experienceWithPets = "Experience with Pets is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Stop form submission if validation fails
    console.log(formData);
    setSubmitted(true);
  };

  if (submitted) {
    return <div className="success-message">Thank you for your submission!</div>;
  }

  return (
    <div className="adoption-form-container">
      <h1>Adopt a Pet</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="e.g., +91 9876543210"
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
          {errors.address && <p className="error">{errors.address}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="reasonForAdoption">Reason for Adoption</label>
          <textarea
            id="reasonForAdoption"
            name="reasonForAdoption"
            value={formData.reasonForAdoption}
            onChange={handleChange}
            required
          ></textarea>
          {errors.reasonForAdoption && <p className="error">{errors.reasonForAdoption}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="experienceWithPets">Experience with Pets</label>
          <textarea
            id="experienceWithPets"
            name="experienceWithPets"
            value={formData.experienceWithPets}
            onChange={handleChange}
            required
          ></textarea>
          {errors.experienceWithPets && <p className="error">{errors.experienceWithPets}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdoptionForm;
