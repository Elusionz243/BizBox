import React from "react";

import "./FeatureSection.scss";
export default function FeatureSection({ title, description, image }) {
  return (
    <section className="feature-section">
      <div className="feature-section__image-card">
        <img src={image} alt="scheduling" className="feature-section__image" />
      </div>
      <div className="feature-section__content-container">
        <div className="feature-section__content-card">
          <h2 className="feature-section__title">{title}</h2>
          <p className="feature-section__description">{description}</p>
        </div>
      </div>
    </section>
  );
}
