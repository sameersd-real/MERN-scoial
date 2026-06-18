import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [loginData, setLoginData] = useState({
    regdNo: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(loginData);
    console.log(JSON.stringify(loginData, null, 2));

    // Future backend call
    /*
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    */
  };

  return (
    <div className="form-section vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="mb-5">Login</h1>

      <Link to="/signup">Don't have an account?</Link>

      <div className="col-md-3">
        <form className="col g-3" onSubmit={handleSubmit}>
          <div className="col-md-12 mb-3">
            <label className="form-label">Registration No</label>
            <input
              type="text"
              className="form-control"
              name="regdNo"
              pattern="^\d{2}[a-zA-Z]{3}\d{4}$"
              required
              value={loginData.regdNo}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-12 mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              required
              value={loginData.password}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-12 mb-3">
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}