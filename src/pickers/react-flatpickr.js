import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

const ReactFlatpickr = ({ onChange, options = {} }) => {
  const [date, setDate] = useState(new Date());

  const handleChange = (selectedDates) => {
    setDate(selectedDates[0]);
    if (onChange) {
      onChange(selectedDates[0]);
    }
  };

  return (
    <Flatpickr
      value={date}
      onChange={handleChange}
      options={{
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        mode:"range",
        ...options,
      }}
    />
  );
};

export default ReactFlatpickr;