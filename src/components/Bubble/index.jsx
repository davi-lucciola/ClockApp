export const Bubble = (color) => {
  const bubbleRadius = Math.random() * 50;
  const bubble = document.createElement('span');

  bubble.className = 'bubble';
  bubble.style.width = 50 + bubbleRadius + 'px';
  bubble.style.height = 50 + bubbleRadius + 'px';
  bubble.style.boxShadow = `inset 0 0 10px ${color}`
  bubble.style.left = Math.random() * innerWidth + 'px';
  return bubble;
};

const createBubbles = (bubbles, color) => {
  const bubble = Bubble(color);
  bubbles.appendChild(bubble);
  setTimeout(() => bubble.remove(), 8000);
};

export const destroyBubbles = () => {
  const bubbles = document.querySelectorAll('.bubble');
  bubbles.forEach((bub) => {
    bub.remove();
  })
}

export const initBubbles = (color) => {
  const bubbles = document.getElementById('bubbles');
  return setInterval(() => createBubbles(bubbles, color), 100);
};
