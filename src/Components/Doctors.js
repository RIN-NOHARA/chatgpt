import React from "react";

function Doctors() {
  return (
    <div className="ollama-models-section" id="ollama-models">
      <div className="ollama-title-content">
        <h3 className="ollama-title">
          <span>Explore Ollama AI Models</span>
        </h3>

        <p className="ollama-description">
          Discover the diverse range of Ollama AI models designed for various applications in natural language processing, problem-solving, and more. Each model offers unique capabilities for different tasks, ensuring you find the perfect fit for your needs.
        </p>
      </div>

      <div className="ollama-cards-content">
        <div className="ollama-model-card">
          <div className="ollama-model-info">
            <h4 className="ollama-model-name">Ollama GPT-3</h4>
            <p className="ollama-model-description">
              A highly versatile language model capable of understanding and generating human-like text. Perfect for content generation, customer service, and more.
            </p>
            <div className="ollama-model-features">
              <h5>Key Features:</h5>
              <ul>
                <li>Text Generation</li>
                <li>Language Understanding</li>
                <li>Conversational AI</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ollama-model-card">
          <div className="ollama-model-info">
            <h4 className="ollama-model-name">Ollama CodeX</h4>
            <p className="ollama-model-description">
              An advanced model for code generation, capable of interpreting and generating high-quality code in multiple programming languages.
            </p>
            <div className="ollama-model-features">
              <h5>Key Features:</h5>
              <ul>
                <li>Code Generation</li>
                <li>Bug Fixing</li>
                <li>Code Suggestions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ollama-model-card">
          <div className="ollama-model-info">
            <h4 className="ollama-model-name">Ollama Chat</h4>
            <p className="ollama-model-description">
              A specialized conversational model built for seamless interactions in customer support, virtual assistants, and chatbot applications.
            </p>
            <div className="ollama-model-features">
              <h5>Key Features:</h5>
              <ul>
                <li>Chatbot Integration</li>
                <li>Conversational AI</li>
                <li>Customer Support</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ollama-model-card">
          <div className="ollama-model-info">
            <h4 className="ollama-model-name">Ollama Vision</h4>
            <p className="ollama-model-description">
              A model designed to handle image-related tasks such as object recognition, image captions, and more.
            </p>
            <div className="ollama-model-features">
              <h5>Key Features:</h5>
              <ul>
                <li>Image Recognition</li>
                <li>Object Detection</li>
                <li>Visual Analysis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* New Ollama Model - Ollama Assistant */}
        <div className="ollama-model-card">
          <div className="ollama-model-info">
            <h4 className="ollama-model-name">Ollama Assistant</h4>
            <p className="ollama-model-description">
              A powerful AI assistant designed for task management, scheduling, and daily productivity, capable of interacting with users through voice and text.
            </p>
            <div className="ollama-model-features">
              <h5>Key Features:</h5>
              <ul>
                <li>Task Management</li>
                <li>Smart Scheduling</li>
                <li>Voice and Text Interaction</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <style jsx="true">{`
        .ollama-models-section {
          padding: 80px 0;
          background-color: #f4f7fc;
          text-align: center;
        }

        .ollama-title-content {
          margin-bottom: 40px;
        }

        .ollama-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2c3e50;
        }

        .ollama-description {
          font-size: 1.1rem;
          margin-bottom: 50px;
          color: #7f8c8d;
          line-height: 1.6;
        }

        .ollama-cards-content {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 30px;
        }

        .ollama-model-card {
          background-color: #fff;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          width: 300px;
          text-align: left;
          padding: 30px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #e1e5eb;
        }

        .ollama-model-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
        }

        .ollama-model-name {
          font-size: 1.4rem;
          font-weight: 600;
          color: #1e8ffd;
          margin-bottom: 10px;
        }

        .ollama-model-description {
          font-size: 1rem;
          color: #34495e;
          margin-bottom: 20px;
        }

        .ollama-model-features {
          margin-top: 10px;
          font-size: 0.95rem;
          color: #34495e;
        }

        .ollama-model-features h5 {
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 8px;
        }

        .ollama-model-features ul {
          list-style-type: none;
          padding: 0;
        }

        .ollama-model-features li {
          margin: 6px 0;
          color: #7f8c8d;
        }

        .ollama-model-card:nth-child(odd) {
          background-color: #ecf0f1;
        }

        .ollama-model-card:nth-child(even) {
          background-color: #f9f9f9;
        }
      `}</style>
    </div>
  );
}

export default Doctors;
