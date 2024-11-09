import React from "react";

function DoctorCard({ name, description, features }) {
  return (
    <div className="ollama-model-card">
      <div className="ollama-model-info">
        <h4 className="ollama-model-name">{name}</h4>
        <p className="ollama-model-description">{description}</p>
        <div className="ollama-model-features">
          <h5>Key Features:</h5>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
