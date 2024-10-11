import React from 'react'
import { DatePicker } from 'antd'

export const DateTimeSelector = ({ onDateChange }) => {
    const handleChange = (date, dateString) => {
      onDateChange(dateString);
    };
  
    return <DatePicker showTime onChange={handleChange} />;
  };