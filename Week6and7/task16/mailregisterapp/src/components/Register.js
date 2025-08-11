import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (form.name.length < 5) {
      newErrors.name = "Name must be at least 5 characters.";
    }

    if (!form.email.includes("@") || !form.email.includes(".")) {
      newErrors.email = "Email must be valid and contain '@' and '.'.";
    }

    if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("🎉 Registration Successful");
      console.log("Submitted Data:", form);
    }
  };

  return (
    <div className="register-container">
      <h2>📧 Mail Register Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="input-group">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@mail.com"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Minimum 8 characters"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
