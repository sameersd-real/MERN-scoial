import { useEffect, useState } from "react";
import "./Profile.css"
import Navbar from "./Navbar";
export default function Profile() {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setFormData(user);
    }
  }, []);

  return (
   <>
  <Navbar /> 
  <div className="bg-dark pt-5 pb-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card shadow">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">
              Profile
            </h2>
              <img
                    src="https://picsum.photos/200"
                    alt="Profile"
                    className="rounded-circle mx-auto d-block mb-3"
                    width="200"
                    height="200"
              />
            <div className="mb-3">
              <strong>Name:</strong>
              <p className="mb-0">{formData.name}</p>
            </div>
            <div className="mb-3">
              <strong>Bio:</strong>
              <p className="mb-0">{formData.bio}</p>
            </div>

            <div className="mb-3">
              <strong>Email:</strong>
              <p className="mb-0">{formData.email}</p>
            </div>

            <div className="mb-3">
              <strong>Username:</strong>
              <p className="mb-0">{formData.username}</p>
            </div>

            <div className="mb-3">
              <strong>Registration No:</strong>
              <p className="mb-0">{formData.regdNo}</p>
            </div>

            <div className="mb-3">
              <strong>College:</strong>
              <p className="mb-0">{formData.college}</p>
            </div>

            <div className="mb-3">
              <strong>Branch:</strong>
              <p className="mb-0">{formData.branch}</p>
            </div>

            <div className="mb-3">
              <strong>Year:</strong>
              <p className="mb-0">{formData.year}</p>
            </div>
              
            <div className="mb-3">
              <strong>skills:</strong>
              <ul>
                {formData.skills?.map((skills) => (
                  <li key={skills}>{skills}</li>
                ))}
              </ul>
            </div>
            <div className="mb-3">
              <strong>Interests:</strong>
              <ul>
                {formData.interests?.map((interest) => (
                  <li key={interest}>{interest}</li>
                ))}
              </ul>
            </div>
              
            <div className="mb-3">
              <strong>career Goals:</strong>
              <ul>
                {formData.careerGoals?.map((careerGoals) => (
                  <li key={careerGoals}>{careerGoals}</li>
                ))}
              </ul>
            </div>
              

          </div>
        </div>
      </div>
    </div>
  </div>
  </>
);
}