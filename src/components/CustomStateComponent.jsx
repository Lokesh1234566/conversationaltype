/* eslint-disable react/prop-types */
import React, { useState } from "react";

const statesOfIndia = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
];

const CustomStateComponent = ({ triggerNextStep }) => {
  const [selectedState, setSelectedState] = useState("");

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    // Trigger the next step with the selected state
    triggerNextStep({ value: state, label: state });
  };

  return (
    <div>
      <h3>Select Your State</h3>
      {statesOfIndia.map((state) => (
        <div key={state}>
          <input
            type="radio"
            id={state}
            name="state"
            value={state}
            checked={selectedState === state}
            onChange={handleStateChange}
          />
          <label htmlFor={state}>{state}</label>
        </div>
      ))}
    </div>
  );
};

export default CustomStateComponent;
