import React, { useState, useRef } from "react";

const ScrollToExample = () => {
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef(null); // Reference to the new content

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setShowContent(true); // Show the content

    // Scroll slightly to the bottom
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div style={{ padding: "20px", height: "100vh" }}>
      <h1>Submit to Reveal Content</h1>

      {/* Form Section */}
      <form onSubmit={handleSubmit}>
        <label>
          Enter something:
          <input type="text" placeholder="Type here..." required />
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* Content to Show After Submit */}
      {showContent && (
        <div ref={contentRef} style={{ marginTop: "50px" }}>
          <h2>🎉 Here is the hidden content!</h2>
          <p>This content is revealed after form submission.</p>
        </div>
      )}
    </div>
  );
};

export default ScrollToExample;
