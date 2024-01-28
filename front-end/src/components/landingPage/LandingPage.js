import React from "react";

import "./LandingPage.scss";
export default function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-page__header">
        <h1 className="landing-page__title">BizBox</h1>
        <ul className="landing-page__navigation">
          <li>
            <a href="/apps" className="landing-page__navigation-link">
              Apps
            </a>
          </li>
          <li>
            <a href="/about" className="landing-page__navigation-link">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="landing-page__navigation-link">
              Services
            </a>
          </li>
          <li>
            <a href="/login" className="landing-page__navigation-link">
              Login/Signup
            </a>
          </li>
        </ul>
      </header>

      <main>
        <p className="landing-page__subtitle">
          BizBox is the ultimate business management platform. Streamline your
          operations, manage employees, and grow your customer base with our
          innovative software solutions. Say goodbye to clunky legacy systems
          and hello to the future of business management.
        </p>
      </main>

      <footer className="landing-page__footer">
        &copy; {new Date().getFullYear()} Store Name
      </footer>
    </div>
  );
}
