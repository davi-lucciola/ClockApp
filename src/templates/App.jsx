import { Component } from "react";
import { Cronometro } from "./Cronometro";
import { Relogio } from "./Relogio";
import { Button } from "../components/Button";
import "../styles/menu.css";

export class App extends Component {
  state = {
    timers: [<Cronometro />, <Relogio />],
    current_timer: 0,
  };

  switchMenu = (menuIndex) => {
    this.setState({ current_timer: menuIndex });
  };

  render() {
    const { timers, current_timer } = this.state;

    return (
      <main className="app">
        <header className="menu">
          <Button
            id="cronometer-menu"
            content="Cronometer"
            onClick={() => this.switchMenu(0)}
          />
          <Button id="watch-menu" 
            content="Watch" 
            onClick={() => this.switchMenu(1)}  
          />
        </header>
        {timers[current_timer]}
      </main>
    );
  }
}
