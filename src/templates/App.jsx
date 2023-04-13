import { Component } from "react";
import { Cronometro } from "./Cronometro";
import { Relogio } from "./Relogio";
import { Button } from "../components/Button";
import "../styles/menu.css";

export class App extends Component {
  state = {
    timers: [<Cronometro />, <Relogio />],
    current_menu: 0,
  };

  switchMenu = (menuIndex) => {
    this.setState({ current_menu: menuIndex });
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
  };

  render() {
    const { timers, current_menu } = this.state;

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
        {timers[current_menu]}
      </main>
    );
  }
}
