import React, { useState } from "react";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    let isValid = true;
    let newErrors = {
      email: "",
      password: "",
    };

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

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      alert("Sign-In Successful!");
      setFormData({
        email: "",
        password: "",
      });
      setErrors({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="signin-form">
      <h1>Sign in to your account</h1>
      <p className="subtitle">Access your account to explore more</p>

      <button className="google-button">
        <img
          src="https://img.icons8.com/color/48/000000/google-logo.png"
          alt="Google"
        />
        Sign in with Google
      </button>

      <p className="divider">
        <span>or</span>
      </p>

      <form onSubmit={handleSubmit}>
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

        {/* Submit Button */}
        <button type="submit" className="signin-button">
          Sign In
        </button>
      </form>

      <p className="signup-link">
        Don't have an account? <a href="/Signup">Sign up</a>
      </p>
    </div>
  );
};

export default SignInForm;
