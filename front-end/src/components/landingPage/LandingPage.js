import React from "react";

import SchedulingImg from "../../images/scheduling-bg.jpg";
import TeamManagementImg from "../../images/users.jpg";
import AnalyticsImg from "../../images/analytics.jpg";

import "./LandingPage.scss";
import FeatureSection from "../utils/featureSection/FeatureSection";
export default function LandingPage() {
  return (
    <div className="landing">
      <header className="landing__header">
        <h1 className="landing__title">BizBox</h1>
        <div className="landing__nav">
          <a href="/apps" className="landing__nav-link">
            Apps
          </a>

          <a href="/about" className="landing__nav-link">
            About
          </a>

          <a href="/services" className="landing__nav-link">
            Services
          </a>

          <a href="/login" className="landing__nav-link">
            Login/Signup
          </a>
        </div>
      </header>

      <main>
        <section className="landing__intro">
          <div className="landing__intro-content">
            <h2 className="landing__title">BizBox</h2>
            <p className="landing__subtitle">
              &emsp;&emsp; is the ultimate business management platform.
              Streamline your operations, manage employees, and grow your
              customer base with our innovative software solutions. Say goodbye
              to clunky legacy systems and hello to the future of business
              management.
            </p>
          </div>
        </section>
        <div className="landing__feature-sections">
          <FeatureSection
            title={"Scheduling"}
            description={
              "Create flexible schedules, easily assign shifts, and accurately track attendance with our user-friendly interface."
            }
            image={SchedulingImg}
          />
          <FeatureSection
            title={"Team Management"}
            description={
              "View team profiles, assign roles and permissions, and track performance."
            }
            image={TeamManagementImg}
          />
          <FeatureSection
            title={"Analytics"}
            description={
              "Track key metrics, analyze sales and traffic, and improve your business insights."
            }
            image={AnalyticsImg}
          />
        </div>
      </main>

      <footer className="landing__footer">
        &copy; {new Date().getFullYear()} BizBox
      </footer>
    </div>
  );
}
