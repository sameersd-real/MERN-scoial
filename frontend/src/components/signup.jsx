import { useState } from "react";
import './signup.css'

function TagInput({ label, placeholder, items, setItems }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const value = e.target.value.trim();

      if (value && !items.includes(value)) {
        setItems([...items, value]);
        e.target.value = "";
      }
    }
  };

  const removeTag = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="col-12">
      <label className="form-label">{label}</label>

      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
      />

      <div className="mt-2">
        {items.map((item, index) => (
          <span
            key={index}
            className="badge bg-primary me-2 mb-2"
            style={{ fontSize: "14px" }}
          >
            {item}
            <button
              type="button"
              style={{
                border: "none",
                background: "transparent",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => removeTag(index)}
            >
              {" "}
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    regdNo: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
    college: "",
    branch: "",
    year: "",
    longTermGoal: "",
    profilePhoto: null,
  });

  const [interests, setInterests] = useState([]);
  const [careerGoals, setCareerGoals] = useState([]);
  const [skills, setSkills] = useState([]);
  const [currentGoals, setCurrentGoals] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const data = {
      ...formData,
      interests,
      careerGoals,
      skills,
      currentGoals,
      profilePhoto: formData.profilePhoto
        ? formData.profilePhoto.name
        : null,
    };

    try {
    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    console.log(result);
    if (response.ok) {
      alert("Profile saved successfully");
    }
    } catch (error) {
      console.error(error);
    }
    // console.log(data);
    // console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div className="total-container">
      <div className="form-part">
        <h1>Signup</h1>

        <a href="/">Already have an account?</a>

        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label className="form-label">Name *</label>
            <input
              type="text"
              className="form-control"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Registration No *</label>
            <input
              type="text"
              className="form-control"
              name="regdNo"
              pattern="^\d{2}[a-zA-Z]{3}\d{4}$"
              required
              value={formData.regdNo}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Username *</label>
            <input
              type="text"
              className="form-control"
              name="username"
              pattern="^[a-zA-Z0-9_]+$"
              required
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">College Email *</label>
            <input
              type="email"
              className="form-control"
              name="email"
              pattern="^[a-zA-Z]+\.\d{2}[a-zA-Z]{3}\d{4}@vitapstudent\.ac\.in$"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Password *</label>
            <input
              type="password"
              className="form-control"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Confirm Password *</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className="col-12">
            <label className="form-label">Bio</label>
            <textarea
              className="form-control"
              rows="3"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">College</label>
            <input
              type="text"
              className="form-control"
              name="college"
              value={formData.college}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label className="form-label">Branch</label>
            <select
              className="form-select"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
            >
              <option value="">Select Branch</option>
              <option>CSE</option>
              <option>Integrated M.Tech</option>
              <option>IT</option>
              <option>ECE</option>
              <option>EEE</option>
              <option>Mechanical</option>
              <option>Civil</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">Year</label>
            <select
              className="form-select"
              name="year"
              value={formData.year}
              onChange={handleChange}
            >
              <option value="">Select Year</option>
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>
          </div>

          <TagInput
            label="Interests & Goals"
            placeholder="Add items (e.g. AI, Web Development, Startup)"
            items={interests}
            setItems={setInterests}
          />

          <TagInput
            label="Career Goals"
            placeholder="Add career goals"
            items={careerGoals}
            setItems={setCareerGoals}
          />

          <TagInput
            label="Skills Being Learned"
            placeholder="Type a skill and press Enter"
            items={skills}
            setItems={setSkills}
          />

          <TagInput
            label="Current Goals"
            placeholder="Add current goals"
            items={currentGoals}
            setItems={setCurrentGoals}
          />

          <div className="col-12">
            <label className="form-label">Long-term Goal</label>
            <input
              type="text"
              className="form-control"
              name="longTermGoal"
              placeholder="Add long-term goal"
              value={formData.longTermGoal}
              onChange={handleChange}
            />
          </div>

          <div className="col-12">
            <label className="form-label">Profile Photo</label>
            <input
              type="file"
              className="form-control"
              name="profilePhoto"
              accept="image/*"
              onChange={handleChange} //check this out
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </div>

      <div className="rightside">
        <img src="#" alt="logo" />
      </div>
    </div>
  );
}