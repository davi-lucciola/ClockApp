import { Component } from 'react';
import { Visor } from '../../components/Visor';
import { TimeControl } from '../../components/TimeControl';
import './style.css'


export class Cronometro extends Component {
  state = {
    cronometer: null, 
    isRunning: false,
    currentTime: {
      minutes: '00',
      seconds: '00'
    }
  }

  formatTime = ({ minutes, seconds }) => {
    if (seconds < 10) {
      seconds = '0' + seconds
    }
    if (minutes < 10 && String(minutes).length == 1) {
      minutes = '0' + minutes;
    }

    return { minutes: minutes, seconds: seconds }
  }

  timer = () => {
    const { minutes, seconds } = this.state.currentTime;
    const newTime = {
      minutes: parseInt(minutes),
      seconds: parseInt(seconds) + 1
    };

    if (newTime.seconds == 60) {
      newTime.seconds = 0
      newTime.minutes = newTime.minutes + 1;
    }

    this.setState({ currentTime: this.formatTime(newTime) })
  }
  
  pause = () => {
    const { cronometer } = this.state;
    clearInterval(cronometer);
    this.setState({ isRunning: false })
  }

  play = () => {
    this.setState({ 
      cronometer: setInterval(() => this.timer(), 1000),
      isRunning: true
    });
  }

  reset = () => {
    this.pause();
    this.setState({ 
      currentTime: {minutes: '00', seconds: '00'},
      isRunning: false
    })
  }

  render() {
    const { isRunning, currentTime } = this.state; 

    const playPause = isRunning ? this.pause : this.play;
    const timeZero = currentTime.seconds == 0 && currentTime.minutes == 0; 

    return (
      <section className='cronometer'>
        <Visor horario={currentTime}/>
        <TimeControl 
          isRunning={isRunning}
          timeZero={timeZero}
          playPauseButton={playPause}
          resetCronometer={this.reset}/>
      </section>
    )
  }
}
