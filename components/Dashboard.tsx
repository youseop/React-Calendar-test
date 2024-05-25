import React, { useState } from "react";
import CustomCalendar from "../components/Calendar";
import Modal from "../components/Modal";
import styles from "../styles/Dashboard.module.css";

const lessons = [{ day: "Wednesday", time: "17:00" }];

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [showModal, setShowModal] = useState(false);
  const [lessonTime, setLessonTime] = useState<string | null>(null);

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

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      const lesson = lessons.find(
        (lesson) => date.getDay() === getDayIndex(lesson.day)
      );
      if (lesson) {
        setLessonTime(lesson.time);
      } else {
        setLessonTime(null);
      }
      setShowModal(true);
    }
  };

  const handleChangeSchedule = () => {
    console.log("Change schedule clicked");
    // 추가적인 로직을 구현하세요.
  };

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Student Dashboard</h1>
      <CustomCalendar
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
        lessons={lessons}
      />
      <div className={styles.selectedDate}>
        <h2>Selected Date</h2>
        <p>{selectedDate ? selectedDate.toDateString() : "No date selected"}</p>
      </div>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        lessonTime={lessonTime}
        onChangeSchedule={handleChangeSchedule}
      />
    </div>
  );
};

export default Dashboard;
