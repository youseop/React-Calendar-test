import React, { useState } from "react";
import { useRouter } from "next/router";
import ChangeScheduleCalendar from "../components/ChangeScheduleCalendar";
import styles from "../styles/TimeSelectionModal.module.css";

const availableDates = [
  { date: new Date(2024, 4, 30, 9), time: "09:00" },
  { date: new Date(2024, 4, 30, 10), time: "10:00" },
  { date: new Date(2024, 4, 30, 11), time: "11:00" },
  { date: new Date(2024, 4, 30, 17), time: "17:00" },
  { date: new Date(2024, 4, 30, 18), time: "18:00" },
  { date: new Date(2024, 4, 31, 14), time: "14:00" },
  { date: new Date(2024, 4, 31, 15), time: "15:00" },
];

const SchedulePage: React.FC = () => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleSave = () => {
    // 일정 저장 로직을 추가하세요
    router.push("/");
  };

  return (
    <div className={styles.schedule}>
      <h1>Change Schedule</h1>
      <ChangeScheduleCalendar
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
        availableDates={availableDates}
      />
      <div className={styles.selectedDate}>
        <h2>Selected Date</h2>
        <p>{selectedDate ? selectedDate.toString() : "No date selected"}</p>
      </div>
      <button onClick={handleSave} className={styles.saveButton}>
        Save
      </button>
    </div>
  );
};

export default SchedulePage;
