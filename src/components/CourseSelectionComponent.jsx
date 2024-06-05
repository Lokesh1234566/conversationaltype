/* eslint-disable react/prop-types */
import React, { useState } from "react";

const CourseSelectionComponent = ({ triggerNextStep }) => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleCourseChange = (event) => {
    const course = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedCourses([...selectedCourses, course]);
    } else {
      setSelectedCourses(selectedCourses.filter((c) => c !== course));
    }
  };

  const handleDone = () => {
    triggerNextStep({
      value: selectedCourses.join(", "),
      label: selectedCourses.join(", "),
    });
  };

  return (
    <div>
      <h3>Please Select</h3>
      <label>
        <input
          type="checkbox"
          value="Vata"
          onChange={handleCourseChange}
          checked={selectedCourses.includes("Vata")}
        />
        Vata
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Pitta"
          onChange={handleCourseChange}
          checked={selectedCourses.includes("Pitta")}
        />
        Pitta
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Kapha"
          onChange={handleCourseChange}
          checked={selectedCourses.includes("Kapha")}
        />
        Kapha
      </label>
      <br />

      {/* Add more checkboxes for other courses as needed */}
      <button onClick={handleDone}>Done</button>
    </div>
  );
};

export default CourseSelectionComponent;
