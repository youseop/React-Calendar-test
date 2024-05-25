import React from "react";
import styles from "../styles/Modal.module.css";

interface TimeSelectionModalProps {
  show: boolean;
  onClose: () => void;
  availableTimes: string[];
}

const TimeSelectionModal: React.FC<TimeSelectionModalProps> = ({
  show,
  onClose,
  availableTimes,
}) => {
  if (!show) {
    return null;
  }

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <h2>Select a Time</h2>
        {availableTimes.length > 0 ? (
          availableTimes.map((time, index) => (
            <button key={index} className={styles.timeButton}>
              {time}
            </button>
          ))
        ) : (
          <p>No available times.</p>
        )}
        <button onClick={onClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
};

export default TimeSelectionModal;
