import React, { useRef } from "react";
import Modal from "./UI/Modal/Modal";
import Button from "./UI/Button/Button";
import Input from "./UI/Input/Input";

const TimeForm = ({ setVisible, setTime, setIsCompleted }) => {
  const daysRef = useRef();
  const hoursRef = useRef();
  const minsRef = useRef();
  const secRef = useRef();

  function save() {
    const dd = daysRef.current.value * 24 * 3600 * 1000;
    const hh = hoursRef.current.value * 3600 * 1000;
    const mins = minsRef.current.value * 60000;
    const seconds = secRef.current.value * 1000;

    setTime(dd + hh + mins + seconds);
    setVisible(false);
    setIsCompleted(false);
  }

  return (
    <Modal>
      <form>
        <div style={{ display: "flex", gap: "4px", marginBottom: 10 }}>
          <Input ref={daysRef} placeholder="dd" />
          <Input ref={hoursRef} placeholder="h" />
          <Input ref={minsRef} placeholder="min" />
          <Input ref={secRef} placeholder="sec" />
        </div>
        <Button type="submit" onClick={save}>
          Save
        </Button>
      </form>
    </Modal>
  );
};

export default TimeForm;
