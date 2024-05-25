import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "../styles/Calendar.module.css";

interface Lesson {
  date: Date;
  time: string;
}

interface CalendarProps {
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
  availableDates: Lesson[];
}

const ChangeScheduleCalendar: React.FC<CalendarProps> = ({
  selectedDate,
  onDateChange,
  availableDates,
}) => {
  const [value, setValue] = useState<Date | null>(new Date());

  const isAvailableDate = (date: Date) => {
    return availableDates.some(
      (lesson) =>
        lesson.date instanceof Date &&
        date.toDateString() === lesson.date.toDateString()
    );
  };

  const getAvailableTime = (date: Date) => {
    const lesson = availableDates.find(
      (lesson) =>
        lesson.date instanceof Date &&
        date.toDateString() === lesson.date.toDateString()
    );
    return lesson ? lesson.time : null;
  };

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month" && isAvailableDate(date)) {
      return <p>{getAvailableTime(date)} - 수업</p>;
    }
    return null;
  };

  const tileDisabled = ({ date, view }: { date: Date; view: string }) => {
    const today = new Date();
    const isToday =
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate();
    return view === "month" && !isAvailableDate(date) && !isToday;
  };

  return (
    <div className={styles.calendarContainer}>
      <Calendar
        onChange={(value) => {
          setValue(value as Date | null);
          onDateChange(value as Date | null);
        }}
        value={value}
        locale="ko-KR"
        tileContent={tileContent}
        tileDisabled={tileDisabled}
        className={styles.reactCalendar}
      />
    </div>
  );
};

export default ChangeScheduleCalendar;
