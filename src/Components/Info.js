import React from "react";
import InformationCard from "./InformationCard";
import { faRobot, faComments, faCode } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What ChatGPT Can Do</span>
        </h3>
        <p className="info-description">
          ChatGPT is here to enhance your productivity and creativity. Whether you're looking for quick answers, automating tasks, or just exploring AI-powered possibilities, our platform offers a range of services tailored to help you. Connect with ChatGPT for personalized assistance in many domains including writing, coding, learning, and more.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="AI Chat Assistance"
          description="ChatGPT provides personalized chat assistance, answering questions, engaging in conversations, and providing insights across various fields, from casual chats to technical queries."
          icon={faComments}
        />

        <InformationCard
          title="Code Generation & Debugging"
          description="ChatGPT can help you generate code, debug errors, and suggest improvements in real-time, making it the perfect tool for developers and coders."
          icon={faCode}
        />

        <InformationCard
          title="AI-Enhanced Creativity"
          description="Tap into the power of AI to brainstorm ideas, write stories, create content, and generate creative solutions to challenges. ChatGPT assists in boosting your creativity."
          icon={faRobot}
        />
      </div>
    </div>
  );
}

export default Info;
