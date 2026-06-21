import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/login",
      { method:"POST",headers:{"Content-Type":"application/json"},
      body: JSON.stringify({
        regdNo: loginData.regdNo,
        password: loginData.password,
      }),
    }
    )
    const data = await response.json();

    if (response.ok) {
      alert("Login successful");
        navigate("/profile");
      console.log(data.user);
    } else {
      alert(data.message);
    }
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