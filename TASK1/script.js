window.onload = function () {

    const words = ["Developer", "Designer","Programmer","Data Analyst"];
    let wordIndex = 0;
    let charIndex = 0;
    let typing = true;
    const typedText = document.getElementById("typed-text");
    const cursor = document.getElementById("cursor");

    function typeWriter() {
      const currentWord = words[wordIndex];

      if (typing) {
        typedText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
          typing = false;
          setTimeout(typeWriter, 1200);
          return;
        }
      } else {
        typedText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          typing = true;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(typeWriter, 300);
          return;
        }
      }

      setTimeout(typeWriter, typing ? 100 : 50);
    }

    typeWriter();


    const starfield = document.querySelector('.starfield');
    const numStars = 150;

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');

      const size = Math.random() * 3 + 2;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;

      const duration = Math.random() * 40 + 20;
      const speedX = (Math.random() - 0.5) * 60;
      const speedY = (Math.random() - 0.5) * 60;
      const animationName = `moveStar${i}`;

      const styleSheet = document.styleSheets[0];
      const keyframes = `
        @keyframes ${animationName} {
          0% { transform: translate(0, 0); }
          100% { transform: translate(${speedX * duration}px, ${speedY * duration}px); }
        }
      `;

      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

      star.style.animation = `${animationName} ${duration}s linear infinite, twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`;

      starfield.appendChild(star);
    }
  };