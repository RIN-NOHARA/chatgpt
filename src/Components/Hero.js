import React, { useEffect, useState } from "react";
import ChatGPTImage from "../Assets/chatgpt-image.png"; // Replace with appropriate image for ChatGPT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleExploreChatClick = () => {
    navigate("/chat"); // Navigate to a page for starting a chat with ChatGPT
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">🤖 Unlock the Power of AI</p>
          <h2 className="text-title">
            Chat with ChatGPT and explore endless possibilities
          </h2>
          <p className="text-description">
            Engage with ChatGPT for personalized answers, creative ideas, and coding assistance. Whether you're looking for information, brainstorming, or solving problems, ChatGPT is your intelligent assistant.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleExploreChatClick}
          >
            <FontAwesomeIcon icon={faCommentDots} /> Start Chat
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>1M+</p>
              <p>Conversations Daily</p>
            </div>

            <div className="text-stats-container">
              <p>100+</p>
              <p>Topics Covered</p>
            </div>

            <div className="text-stats-container">
              <p>24/7</p>
              <p>Available Assistance</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={ChatGPTImage} alt="ChatGPT" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
