import React from "react";

import "./FeatureCard.scss";

import scheduling from "../../../images/scheduling-bg.jpg";
import users from "../../../images/users.jpg";
export default function FeatureCard({ icon, title, description }) {
  // TODO: Add a feature card component that accepts an icon, title, and
  // description as props. The icon prop should be an element that is
  // rendered inside the card. The title and description props should be
  // rendered inside the card. The card should be styled with the
  // feature-card class. The card should have a background image that
  // matches the image at the top of this file.

  const images = {
    Scheduling: scheduling,
    "Team Management": users,
  };
  return (
    <div
      className="feature-card"
      style={{ backgroundImage: `url("${images[title]}")` }}
    >
      {/* <p className="feature-card__icon">{icon}</p> */}
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </div>
  );
}
