import { Component } from "react";
import { Relogio } from "./Relogio";
import { Cronometro } from "./Cronometro";
import { Button } from "../components/Button";
import { initBubbles, destroyBubbles } from "../components/Bubble";
import '../styles/bubbles.css'
import "../styles/menu.css";

export class App extends Component {
  state = {
    timers: [<Cronometro />, <Relogio />],
    currentMenu: 0,
    bubbleColors: {
      0: 'orange',
      1: 'forestgreen'
    },
    bubbles: initBubbles('orange')
  };

  switchMenu = (menuIndex) => {
    const { bubbles, bubbleColors } = this.state;
    clearInterval(bubbles);
    destroyBubbles();

    const watch_menu = document.getElementById('watch-menu');
    const cronometer_menu = document.getElementById('cronometer-menu');

    switch (menuIndex) {
      case 1:
        cronometer_menu.className = ''
        watch_menu.className = 'current-menu'
        break;

      default:
        watch_menu.className = ''
        cronometer_menu.className = 'current-menu'
        break;
    }
    
    this.setState({ currentMenu: menuIndex, bubbles: initBubbles(bubbleColors[menuIndex])});
  };

  render() {
    const { timers, currentMenu } = this.state;

    return (
      <main className="app">
        <header className="menu">
          <Button
            id="cronometer-menu"
            content="Cronometer"
            className='current-menu'
            onClick={() => this.switchMenu(0)}
          />
          <Button id="watch-menu" 
            content="Watch" 
            onClick={() => this.switchMenu(1)}  
          />
        </header>
        {timers[currentMenu]}
      </main>
    );
  }
}
