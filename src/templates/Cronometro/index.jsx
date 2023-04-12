import { Component } from "react";
import { Visor } from "../../components/Visor";
import { Button } from "../../components/Button";
import './style.css'

export class Cronometro extends Component {

  render() {
    return (
      <section className="cronometer">
        <h1> Cronometer </h1> 
        <Visor />
        <Button 
          className="play-button" 
          content={(<img src="/play-icon.png"/>)}/>
      </section>
    )
  }
}
