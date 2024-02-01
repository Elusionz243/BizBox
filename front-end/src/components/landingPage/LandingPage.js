import React from "react";

import FeatureCard from "../utils/featureCard/FeatureCard";
import Icon from "../utils/icon/Icon";

import "./LandingPage.scss";
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
          <p className="landing__subtitle">
            <strong className="landing__hero">BizBox</strong> is the ultimate
            business management platform. Streamline your operations, manage
            employees, and grow your customer base with our innovative software
            solutions. Say goodbye to clunky legacy systems and hello to the
            future of business management.
          </p>
        </section>
        <section className="landing__scheduling">
          <h2 className="landing__scheduling-title">Scheduling</h2>
          <p className="landing__scheduling-description">
            Create and manage schedules, assign shifts, and track attendance.
          </p>
        </section>
        <section className="landing__features">
          <div className="landing__features-grid">
            <FeatureCard
              icon={<Icon name="calendar" />}
              title="Scheduling"
              description="Create and manage schedules, assign shifts, and track attendance."
            />
            <FeatureCard
              icon={<Icon name="users" />}
              title="Team Management"
              description="View team profiles, assign roles and permissions, and track performance."
            />
            <FeatureCard
              icon={<Icon name="chart-bar" />}
              title="Analytics"
              description="Track key metrics, analyze sales and traffic, and improve your business insights."
            />
          </div>
        </section>
      </main>

      <footer className="landing__footer">
        &copy; {new Date().getFullYear()} Store Name
      </footer>
    </div>
  );
}
