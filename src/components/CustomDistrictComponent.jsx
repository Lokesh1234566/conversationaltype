/* eslint-disable react/prop-types */
import React, { useState } from "react";

const districtsOfKarnataka = [
  "Bagalkot",
  "Ballari (Bellary)",
  "Belagavi (Belgaum)",
  "Bengaluru Rural",
  "Bengaluru Urban",
  "Bidar",
  "Chamarajanagar",
  "Chikballapur",
  "Chikkamagaluru (Chikmagalur)",
  "Chitradurga",
  "Dakshina Kannada",
  "Davanagere",
  "Dharwad",
  "Gadag",
  "Hassan",
  "Haveri",
  "Kalaburagi (Gulbarga)",
  "Kodagu",
  "Kolar",
  "Koppal",
  "Mandya",
  "Mysuru (Mysore)",
  "Raichur",
  "Ramanagara",
  "Shivamogga (Shimoga)",
  "Tumakuru (Tumkur)",
  "Udupi",
  "Uttara Kannada (Karwar)",
  "Vijayapura (Bijapur)",
  "Yadgir",
];

const CustomDistrictComponent = ({ triggerNextStep }) => {
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleDistrictChange = (event) => {
    const district = event.target.value;
    setSelectedDistrict(district);
    // Trigger the next step with the selected state
    triggerNextStep({ value: district, label: district });
  };
  return (
    <div>
      <h3>Select Your District in Karnataka</h3>
      {districtsOfKarnataka.map((district) => (
        <div key={district}>
          <input
            type="radio"
            id={district}
            name="district"
            value={district}
            checked={selectedDistrict === district}
            onChange={handleDistrictChange}
          />
          <label htmlFor={district}>{district}</label>
        </div>
      ))}
    </div>
  );
};

export default CustomDistrictComponent;
