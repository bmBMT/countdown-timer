import React from 'react'
import styles from './Modal.module.css'
import Button from '../Button/Button';

const Modal = ({children}) => {
  return (
      <div className={styles.myModal}>
          <div className={styles.myModalContent}>
              {children}
          </div>
      </div>
  );
};

export default Modal
