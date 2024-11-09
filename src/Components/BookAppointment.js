import React from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
    <div className="ba-image-content">
      <img src={Doctor} alt="ChatGPT App" className="ba-image1" />
    </div>
  
    <div className="ba-text-content">
      <h3 className="ba-title">
        <span>Why Choose ChatGPT</span>
      </h3>
      <p className="ba-description">
        Discover the benefits of using ChatGPT for all your conversational AI needs. Whether it's for personal assistance, creative brainstorming, or problem-solving, ChatGPT offers expert-level communication tailored to your needs.
      </p>
  
      <p className="ba-checks ba-check-first">
        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Advanced AI Conversations
      </p>
      <p className="ba-checks">
        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> 24/7 Availability
      </p>
      <p className="ba-checks">
        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Personalized Responses
      </p>
      <p className="ba-checks ba-check-last">
        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Seamless User Experience
      </p>
  
      <button
        className="text-appointment-btn"
        type="button"
        onClick={handleBookAppointmentClick}
      >
        <FontAwesomeIcon icon={faCalendarCheck} /> Start Chat
      </button>
    </div>
  </div>
  
  );
}

export default BookAppointment;
