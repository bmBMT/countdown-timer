import React, { forwardRef } from 'react'
import styles from './Input.module.css'

const Input = forwardRef((props, ref) => {
  return (
    <input ref={ref} inputMode='numeric' type='number' className={styles.input} {...props} />
  )
});

export default Input
