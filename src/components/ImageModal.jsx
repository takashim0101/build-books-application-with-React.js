import React from "react"; 
import styles from "./ImageModal.module.css"; 

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.closeButton} onClick={onClose}>
          &times;
        </span>
        <img src={imageSrc} alt="Enlarged" className={styles.enlargedImage} />
      </div>
    </div>
  );
};

export default ImageModal;

