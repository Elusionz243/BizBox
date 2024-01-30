import React from "react";

import "./FeatureCard.scss";
export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <p className="feature-card__icon">{icon}</p>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </div>
  );
}
