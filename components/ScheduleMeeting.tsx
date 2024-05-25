import React, { useState } from "react";
import CustomCalendar from "./Calendar";

const ScheduleMeeting: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h2>Schedule a Meeting</h2>
      <CustomCalendar
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
      />
      <div>
        <h3>Selected Date</h3>
        <p>{selectedDate.toDateString()}</p>
      </div>
    </div>
  );
};

export default ScheduleMeeting;
