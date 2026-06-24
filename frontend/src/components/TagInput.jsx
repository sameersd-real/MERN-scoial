import { useState } from "react";
import './signup.css'

export default function TagInput({ label, placeholder, items, setItems }) {
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