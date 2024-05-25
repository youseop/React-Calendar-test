import React from "react";
import ChangeScheduleCalendar from "../components/ChangeScheduleCalendar";
import styles from "../styles/Schedule.module.css";

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
  return (
    <div className={styles.schedule}>
      <h1>Change Schedule</h1>
      <ChangeScheduleCalendar availableDates={availableDates} />
    </div>
  );
};

export default SchedulePage;
