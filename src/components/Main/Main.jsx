import React, { useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets.js";
import { useGemini } from "../../context/SagittariusContext";

const Main = ({ setRecentPrompts }) => {
  const { sendPrompt } = useGemini();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);

  const stripMarkdown = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/\*(.*?)\*/g, "$1")
      .replace(/__(.*?)__/g, "$1")
      .replace(/_(.*?)_/g, "$1");
  };

  const formatResponse = (text) => {
    const cleanText = stripMarkdown(text);
    // Truncate to 600 characters
    return cleanText.length > 600 ? cleanText.slice(0, 600) + "..." : cleanText;
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    // Update recent prompts (max 5)
    setRecentPrompts(prev => {
      const updated = [...prev, input];
      if (updated.length > 5) updated.shift();
      return updated;
    });

    // Reset chat for new conversation
    setMessages([{ type: "user", text: input }]);
    setInput("");
    setIsCollapsed(true);
    setLoading(true);

    // Send prompt to AI
    const response = await sendPrompt(input);
    const truncatedResponse = formatResponse(response);

    setLoading(false);
    setMessages(prev => [...prev, { type: "ai", text: truncatedResponse }]);
  };

  const handleClearChat = () => {
    setMessages([]);
    setIsCollapsed(false);
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Sagittarius</p>
        <img src={assets.user_icon} alt="User" />
      </div>

      <div className="main-container">
        {!isCollapsed && (
          <>
            <div className="greet">
              <p><span>Hello, User.</span></p>
              <p>What would you like to learn today?</p>
            </div>

            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: thermodynamics</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm a calisthenic workout program for functionality</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        )}

        {messages.length > 0 && (
          <div className="clear-chat-wrapper">
            <button className="clear-chat-btn" onClick={handleClearChat}>
              Clear Chat
            </button>
          </div>
        )}

        <div className="chat-container">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.type === "ai" ? "ai" : "user"}`}>
              {msg.type === "ai" && (
                <img src={assets.user_icon} alt="AI" className="ai-icon" />
              )}
              <div className="chat-text">
                {msg.text.split("\n").map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </div>
            </div>
          ))}

          {loading && (
            <div className="chat-message ai">
              <img src={assets.user_icon} alt="AI" className="ai-icon" />
              <div className="chat-text typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your prompt here"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img
                src={assets.send_icon}
                alt="Send"
                onClick={handleSend}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <p className="bottom-info">
            Sagittarius may display inaccurate information about people, places, or facts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
