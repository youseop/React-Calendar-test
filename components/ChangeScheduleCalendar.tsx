import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "../styles/Calendar.module.css";
import TimeSelectionModal from "./TimeSelectionModal";

interface Lesson {
  date: Date;
  time: string;
}

interface CalendarProps {
  availableDates: Lesson[];
}

const ChangeScheduleCalendar: React.FC<CalendarProps> = ({
  availableDates,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  const isAvailableDate = (date: Date) => {
    return availableDates.some(
      (lesson) => date.toDateString() === lesson.date.toDateString()
    );
  };

  const getAvailableTimes = (date: Date) => {
    return availableDates
      .filter((lesson) => date.toDateString() === lesson.date.toDateString())
      .map((lesson) => lesson.time);
  };

  const handleDateClick = (date: Date) => {
    if (isAvailableDate(date)) {
      setSelectedDate(date);
      setAvailableTimes(getAvailableTimes(date));
      setShowModal(true);
    }
  };

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month" && isAvailableDate(date)) {
      return <p>{date.getDate()}</p>;
    }
    return null;
  };

  const tileDisabled = ({ date, view }: { date: Date; view: string }) => {
    return view === "month" && !isAvailableDate(date);
  };

  return (
    <div className={styles.calendarContainer}>
      <Calendar
        onChange={(value) => handleDateClick(value as Date)}
        value={selectedDate}
        locale="ko-KR"
        tileContent={tileContent}
        tileDisabled={tileDisabled}
        className={styles.reactCalendar}
      />
      <TimeSelectionModal
        show={showModal}
        onClose={() => setShowModal(false)}
        availableTimes={availableTimes}
      />
    </div>
  );
};

export default ChangeScheduleCalendar;
