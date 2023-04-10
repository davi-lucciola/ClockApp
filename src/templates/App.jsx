import { Component } from "react";
import { Cronometro } from "./Cronometro";


export class App extends Component {
  state = {
    timers: [],
    current_timer: 0,
  };

  render() {
    return (
      <main className="app">
        <Cronometro />
      </main>
    );
  }
}
