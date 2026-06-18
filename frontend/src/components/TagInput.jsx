import { useState } from "react";

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

    interests: [],
    careerGoals: [],
    skills: [],
    currentGoals: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const updateTags = (field, values) => {
    setFormData((prev) => ({
      ...prev,
      [field]: values,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(formData);
  };

  return (
    <div className="total-container">
      <div className="form-part">
        <h1>Signup</h1>

        <form className="row g-3" onSubmit={handleSubmit}>
          <BasicInfo
            formData={formData}
            handleChange={handleChange}
          />

          <AcademicInfo
            formData={formData}
            handleChange={handleChange}
          />

          <GoalsSection
            formData={formData}
            updateTags={updateTags}
            handleChange={handleChange}
          />

          <ProfilePhoto handleChange={handleChange} />

          <div className="col-12">
            <button className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}