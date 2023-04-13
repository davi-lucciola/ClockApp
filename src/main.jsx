import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './templates/App'
import { Bubble } from './components/Bubble'
import './styles/global-styles.css'
import './styles/bubbles.css'


const Root = document.getElementById('root');
const bubbles = document.getElementById('bubbles')

export const createBubbles = () => {
  const bubble = Bubble();
  bubbles.appendChild(bubble);
  setTimeout(() => bubble.remove(), 8000)
}

setInterval(createBubbles, 100);

ReactDOM.createRoot(Root).render(<App/>);
