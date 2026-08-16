 const words = ["Frontend Developer", "Backend Developer", "AI-Assisted Developer", "Full Stack Developer"];
 
  const typedEl = document.getElementById('typed-text');
  const cursorEl = document.getElementById('cursor');
 
  const TYPE_SPEED = 95;       // ms per character when typing
  const DELETE_SPEED = 60;     // ms per character when deleting
  const PAUSE_AFTER_TYPE = 1200; // pause once a word is fully typed
  const PAUSE_AFTER_DELETE = 300; // pause once a word is fully deleted
 
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;
 
  function tick() {
    const currentWord = words[wordIndex];
 
    if (!deleting) {
      charIndex++;
      typedEl.textContent = currentWord.slice(0, charIndex);
 
      if (charIndex === currentWord.length) {
        deleting = true;
        setTimeout(tick, PAUSE_AFTER_TYPE);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    } else {
      charIndex--;
      typedEl.textContent = currentWord.slice(0, charIndex);
 
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(tick, PAUSE_AFTER_DELETE);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    }
  }
 
  setTimeout(tick, 600);