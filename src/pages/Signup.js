import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    termsAccepted: "",
  });

  const validateForm = () => {
    let isValid = true;
    let newErrors = {
      name: "",
      email: "",
      password: "",
      termsAccepted: "",
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    // Terms validation
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must agree to the terms and conditions";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      alert("Account Created Successfully!");
      setFormData({
        name: "",
        email: "",
        password: "",
        termsAccepted: false,
      });
      setErrors({
        name: "",
        email: "",
        password: "",
        termsAccepted: "",
      });
    }
  };

  return (
    <div className="signup-form">
      <h1>Create your account</h1>
      <p className="subtitle">Let's get started with your 30 days free trial</p>

      <button className="google-button">
        <img
          src="https://img.icons8.com/color/48/000000/google-logo.png"
          alt="Google"
        />
        Login with Google
      </button>

      <p className="divider">
        <span>or</span>
      </p>

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="form-group">
          <label>Name*</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label>Email*</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label>Password*</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        {/* Terms Checkbox */}
        <div className="terms">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <label>I agree to all Terms, Privacy Policy, and Fees</label>
        </div>
        {errors.termsAccepted && (
          <p className="error">{errors.termsAccepted}</p>
        )}

        {/* Submit Button */}
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>

      <p className="login-link">
        Already have an account? <a href="/Signin">Log in</a>
      </p>
    </div>
  );
};

export default SignupForm;
