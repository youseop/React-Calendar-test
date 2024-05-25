import React, { useState } from "react";

interface TimeSlot {
  day: string;
  time: string;
}

const availableTimeSlots: TimeSlot[] = [
  { day: "Monday", time: "10:00 AM" },
  { day: "Wednesday", time: "2:00 PM" },
  { day: "Friday", time: "4:00 PM" },
];

const TutorAvailability: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);

  const handleSelectSlot = (slot: TimeSlot) => {
    setSelectedSlot(slot);
  };

  return (
    <div>
      <h2>Select a Time Slot</h2>
      <ul>
        {availableTimeSlots.map((slot, index) => (
          <li key={index} onClick={() => handleSelectSlot(slot)}>
            {slot.day} at {slot.time}
          </li>
        ))}
      </ul>
      {selectedSlot && (
        <div>
          <h3>Selected Slot</h3>
          <p>
            {selectedSlot.day} at {selectedSlot.time}
          </p>
        </div>
      )}
    </div>
  );
};

export default TutorAvailability;
