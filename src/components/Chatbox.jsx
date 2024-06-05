import React from "react";
import ChatBot from "react-simple-chatbot";
import steps from "./Steps";
const Chatbox = () => {
  const handleEnd = ({ steps, values }) => {
    // console.log("Selected option values:");
    steps.forEach((step) => {
      if (step.value !== undefined) {
        // console.log(step.id, values[step.id]);
      }
    });
  };
  return (
    <div>
      <ChatBot
        headerTitle="Welcome to Demo"
        steps={steps}
        handleEnd={handleEnd}
      />
    </div>
  );
};

export default Chatbox;
