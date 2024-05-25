import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "../styles/Calendar.module.css";

interface Lesson {
  day: string;
  time: string;
}

interface CalendarProps {
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
  lessons: Lesson[];
}

const CustomCalendar: React.FC<CalendarProps> = ({
  selectedDate,
  onDateChange,
  lessons,
}) => {
  const [value, setValue] = useState<Date | null>(new Date());

  const getDayIndex = (day: string) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days.indexOf(day);
  };

  const isLessonDay = (date: Date) => {
    return lessons.some((lesson) => date.getDay() === getDayIndex(lesson.day));
  };

  const getLessonTime = (date: Date) => {
    const lesson = lessons.find(
      (lesson) => date.getDay() === getDayIndex(lesson.day)
    );
    return lesson ? lesson.time : null;
  };

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month" && isLessonDay(date)) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return <p>{date < today ? "완료" : `${getLessonTime(date)} - 수업`}</p>;
    }
    return null;
  };

  const tileDisabled = ({ date, view }: { date: Date; view: string }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const isToday =
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate();
    return view === "month" && !isLessonDay(date) && !isToday;
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

export default CustomCalendar;
