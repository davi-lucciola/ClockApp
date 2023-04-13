import { Component } from "react";
import { Visor } from "../../components/Visor";
import { PlayPauseButton } from "../../components/PlayPauseButton";
import './style.css'


export class Cronometro extends Component {
  state = {
    isRunning: false,
    currentTime: {
      minutes: '00',
      seconds: '00'
    }
  }


  render() {
    const { isRunning, currentTime } = this.state; 


    return (
      <section className="cronometer">
        <Visor horario={currentTime}/>
        <PlayPauseButton isRunning={isRunning}/>
      </section>
    )
  }
}
