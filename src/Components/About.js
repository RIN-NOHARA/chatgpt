import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to ChatGPT, your trusted AI assistant for providing insightful
          answers, creative inspiration, and practical solutions. Whether you need
          help drafting a document, coding assistance, or just a friendly conversation,
          ChatGPT is here to make your experience more productive and enjoyable.
        </p>

        <h4 className="about-text-title">How We Help You</h4>

        <SolutionStep
          title="Ask Your Question"
          description="Type in any question or topic, and ChatGPT will provide clear,
          thoughtful, and informative responses tailored to your needs."
        />

        <SolutionStep
          title="Collaborate in Real Time"
          description="Engage in an interactive session where ChatGPT assists with writing,
          editing, brainstorming, coding, and more, ensuring a seamless and intuitive
          experience."
        />

        <SolutionStep
          title="Achieve Your Goals"
          description="From creative writing to complex problem-solving, ChatGPT delivers
          solutions and insights that help you accomplish your tasks efficiently and
          effectively."
        />
      </div>
    </div>
  );
}

export default About;
