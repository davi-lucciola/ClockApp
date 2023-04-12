export const Bubble = () => {
    const bubbleRadius = Math.random() * 50;
    const bubble = document.createElement('span');

    bubble.className = 'bubble'
    bubble.style.width = 50 + bubbleRadius + 'px';
    bubble.style.height = 50 + bubbleRadius + 'px';
    bubble.style.left = Math.random() * (innerWidth - 20) + 'px';
    return bubble;
}

