import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../Styles/AppointmentForm.css";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [userName, setUserName] = useState("");
  const [userRating, setUserRating] = useState("default");
  const [userFeedback, setUserFeedback] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!userName.trim()) {
      errors.userName = "Please provide your name";
    } else if (userName.trim().length < 3) {
      errors.userName = "Name must be at least 3 characters";
    }

    if (userRating === "default") {
      errors.userRating = "Please provide a rating (1-5)";
    }

    if (!userFeedback.trim()) {
      errors.userFeedback = "Please provide your feedback";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setUserName("");
    setUserRating("default");
    setUserFeedback("");
    setFormErrors({});

    toast.success("Thank you for your feedback!", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        Feedback Form
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Share Your Feedback</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Your Name:
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            {formErrors.userName && <p className="error-message">{formErrors.userName}</p>}
          </label>

          <br />
          <label>
            Rating (1 to 5):
            <select
              value={userRating}
              onChange={(e) => setUserRating(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {formErrors.userRating && <p className="error-message">{formErrors.userRating}</p>}
          </label>

          <br />
          <label>
            Feedback:
            <textarea
              value={userFeedback}
              onChange={(e) => setUserFeedback(e.target.value)}
              required
            />
            {formErrors.userFeedback && <p className="error-message">{formErrors.userFeedback}</p>}
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            Submit Feedback
          </button>

          <p className="success-message" style={{display: isSubmitted ? "block" : "none"}}>
            Thank you! Your feedback has been submitted successfully.
          </p>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2023 FeedbackForm. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
