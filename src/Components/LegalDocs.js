import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          ChatGPT <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
          Welcome to ChatGPT+, your trusted AI platform. Our mission is to provide personalized, interactive, and insightful conversations powered by cutting-edge AI technology. By using our platform, you agree to the terms outlined in our Privacy Policy and Terms of Service.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          Your privacy is our priority. Our Privacy Policy explains how we collect, store, and use your data when interacting with ChatGPT+. We are committed to ensuring your data is secure and that we handle it with the utmost confidentiality.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
          By using ChatGPT+, you agree to our Terms of Service. These terms outline the rules and guidelines for using our platform, including acceptable usage and responsibilities. Understanding these terms will ensure a seamless experience for all users.
        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
          ChatGPT+ provides AI-powered conversations for a wide range of topics. While our AI can offer helpful insights, it does not replace professional advice in fields like healthcare, legal matters, or critical issues. Always seek expert advice when needed.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
          ChatGPT+ is designed to assist you in a wide range of tasks, from answering questions to generating creative content. Simply ask anything, and our AI will respond with the best possible answers based on its training. Please note that while the AI is powerful, it is not perfect, and responses should be verified for accuracy in critical scenarios.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2023-2024 ChatGPT+. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
