/* eslint-disable react/prop-types */
import React, { useState } from "react";

const CustomDateComponent = (props) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
  };

  const handleNext = () => {
    if (selectedDate === null) {
      alert("Please select your date of birth.");
    } else {
      props.triggerNextStep({ value: selectedDate }); // Pass selected date to parent
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="date"
        value={selectedDate || ""}
        onChange={handleDateChange}
        pattern="dd/MM/yyyy"
        placeholder="Select date of birth"
      />
      <button
        onClick={handleNext}
        className="mt-4 bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default CustomDateComponent;
