import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

const DateSelector = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    onDateChange(start, end);
  };

  return (
    <div className="bg-[#F0F8FF] p-4 rounded-md shadow-md text-center">
      <h2 className="text-lg font-semibold mb-2 text-blue-950">Select Date Range</h2>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        className="p-2 rounded-md border border-gray-700"
      />
    </div>
  );
};

export default DateSelector;
