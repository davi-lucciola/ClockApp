import { useState } from "react";
import { Visor } from "../../components/Visor";
import './style.css'

const getDateTime = () => {
  let [today, now] = new Date().toLocaleString().split(',')
  now = now.split(':')
  today = today.split('/')
  return {
    now: {
      hour: now[0],
      minutes: now[1],
      seconds: now[2],
    },
    today: {
      day: today[0],
      mounth: today[1],
      year: today[2]
    }
  };
};

const Data = ({ data }) => {
  return (
    <div className="data" >
      {data.day + "-" + data.mounth  + "-" + data.year}
    </div>
  )
}

export const Relogio = () => {
  const [time, setTime] = useState(getDateTime())

  setInterval(() => {
    setTime(getDateTime())
  }, 1000)

  return (
    <section className="watch">
      <Visor horario={time["now"]} />
      <Data data={time["today"]}/>
    </section>
  );
};
