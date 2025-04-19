import React from "react";

const NoScrollExample = () => {
  return (
    <div style={{ height: "150vh", padding: "20px" }}>
      <h1>Without scrollTo() Functionality</h1>
      <p>This page does not scroll automatically.</p>
      <img className='h-[200px] w-[100px]' src='../assets/WhatsApp Image 2024-08-24 at 10.04.47_52f57d61 porfolio.jpg' alt='' />
      <button onClick={() => alert("No scrolling here!")}>Click Me</button>
      <div style={{ marginTop: "100vh" }}>
        <h2>Bottom of Page 📄</h2>
      </div>
    </div>
  );
};

export default NoScrollExample;
