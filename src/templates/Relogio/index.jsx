import { useState } from "react";
import { Visor } from "../../components/Visor";
import './style.css'

const getDateTime = () => {
  const now = new Date().toLocaleTimeString().split(':');
  return {
    hour: now[0],
    minutes: now[1],
    seconds: now[2],
  };
};

export const Relogio = () => {
  const [time, setTime] = useState(getDateTime())

  setInterval(() => {
    setTime(getDateTime())
  }, 1000)

  return (
    <section className="watch">
      <Visor horario={time} />
    </section>
  );
};
