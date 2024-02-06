import React from "react";

import SchedulingImg from "../../images/scheduling-bg.jpg";
import TeamManagementImg from "../../images/users.jpg";
import AnalyticsImg from "../../images/analytics.jpg";

import "./LandingPage.scss";
import FeatureSection from "../utils/featureSection/FeatureSection";
import Icon from "../utils/icon/Icon";
export default function LandingPage() {
  const iconDim = 35;

  return (
    <div className="landing">
      <header className="landing__header">
        <h1 className="landing__title">BizBox</h1>
        <div className="landing__nav">
          <a href="/apps" className="landing__nav-link">
            <Icon
              name="app-grid"
              width={iconDim}
              height={iconDim}
              currentColor="#fff"
              viewBox="-3 -3 24 24"
            />
            Apps
          </a>

          <a href="/about" className="landing__nav-link">
            <Icon
              name="book"
              width={iconDim}
              height={iconDim}
              currentColor="#fff"
              viewBox="-3 -3 24 24"
            />
            About
          </a>

          <a href="/services" className="landing__nav-link">
            <Icon
              name="dollar-sign"
              width={iconDim}
              height={iconDim}
              currentColor="#fff"
              viewBox="-3 -3 24 24"
            />
            Plans
          </a>

          <a href="/login" className="landing__nav-link">
            <Icon
              name="user"
              width={iconDim}
              height={iconDim}
              currentColor="#fff"
              viewBox="-3 -3 24 24"
            />
            Login/Sign up
          </a>
        </div>
      </header>

      <main>
        <section className="landing__intro">
          <div className="landing__intro-content">
            <h2 className="landing__title">BizBox</h2>
            <p className="landing__subtitle">
              &emsp; is the ultimate business management platform. Streamline
              your operations, manage employees, and grow your customer base
              with our innovative software solutions. Say goodbye to clunky
              legacy systems and hello to the future of business management.
            </p>
          </div>
        </section>
        <div className="landing__feature-list">
          <FeatureSection
            title={"Scheduling"}
            description={
              "Create flexible employee schedules with customizable shift templates, drag and drop shift assignment, and automated attendance tracking. Easily configure rules for shift swapping, time off requests, and schedule notifications."
            }
            image={SchedulingImg}
          />
          <FeatureSection
            title={"Team Management"}
            description={
              "View detailed team member profiles with photos, contact information, skills, and more. Easily assign user roles and permissions to control access to sensitive data or actions. Track employee performance metrics over time including sales numbers, customer satisfaction ratings, task completion rates, and more to identify high and low performers."
            }
            image={TeamManagementImg}
          />
          <FeatureSection
            title={"Analytics"}
            description={
              "Track key metrics like sales, revenue, expenses, inventory, and more to gain actionable insights into business performance over time. Analyze trends, set benchmarks, and create visual reports to share with stakeholders. Integrate data from multiple sources to build a single source of truth. Identify opportunities for growth and optimization across all parts of your business. "
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
