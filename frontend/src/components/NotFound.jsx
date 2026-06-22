import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-dark text-white vh-100 d-flex align-items-center justify-content-center">
      <div className="card shadow text-center p-4" style={{ maxWidth: "500px" }}>
        <div className="card-body">
          <h1 className="display-1 fw-bold text-danger">404</h1>

          <h3 className="card-title mb-3">
            Page Not Found
          </h3>

          <p className="card-text text-muted mb-4">
            The page you are looking for does not exist yet.
          </p>

          <Link to="/home" className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}