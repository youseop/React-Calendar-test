import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Modal.module.css";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  lessonTime: string | null;
  onChangeSchedule: () => void;
}

const Modal: React.FC<ModalProps> = ({
  show,
  onClose,
  lessonTime,
  onChangeSchedule,
}) => {
  const router = useRouter();

  if (!show) {
    return null;
  }

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleChangeSchedule = () => {
    onClose();
    router.push("/schedule");
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <h2>Lesson Details</h2>
        {lessonTime ? (
          <>
            <p>Lesson Time: {lessonTime}</p>
            <button onClick={handleChangeSchedule}>Change Schedule</button>
          </>
        ) : (
          <p>No lesson scheduled.</p>
        )}
        <button onClick={onClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
