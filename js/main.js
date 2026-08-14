/* ==========================================================================
   ATHAR LANDING PAGE - INTERACTIONS & SCRIPTS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Set Current Year in Footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Web Audio Context for Tasbeeh Click Sound
  let audioCtx = null;
  const playClickSound = () => {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, audioCtx.currentTime); // Pitch
      osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.08); // Drop pitch
      
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch (e) {
      console.warn('Audio Context not allowed or supported yet', e);
    }
  };

  // Interactive Tasbeeh Widget
  const tasbeehWidget = document.getElementById('tasbeeh-widget');
  const tasbeehCount = document.getElementById('tasbeeh-count');
  const tasbeehTargetText = document.getElementById('tasbeeh-target-text');
  const tasbeehReset = document.getElementById('tasbeeh-reset');

  let count = 0;
  let target = 33;

  if (tasbeehWidget && tasbeehCount) {
    tasbeehWidget.addEventListener('click', (e) => {
      // Don't trigger if clicking reset button
      if (e.target.id === 'tasbeeh-reset') return;

      count++;
      playClickSound();

      // Trigger standard mobile vibration (haptic feedback) if supported
      if ('vibrate' in navigator) {
        navigator.vibrate(15);
      }

      // Check target threshold
      if (count > target) {
        // Toggle target between 33 and 99
        target = target === 33 ? 99 : 33;
        tasbeehTargetText.textContent = `الهدف: ${target}`;
        count = 1;
        // Stronger vibration on completing round
        if ('vibrate' in navigator) {
          navigator.vibrate([40, 50, 40]);
        }
      }

      tasbeehCount.textContent = count.toString().padStart(2, '0');
    });

    if (tasbeehReset) {
      tasbeehReset.addEventListener('click', (e) => {
        e.stopPropagation();
        count = 0;
        tasbeehCount.textContent = '00';
        if ('vibrate' in navigator) {
          navigator.vibrate([10, 10]);
        }
      });
    }
  }

  // Scroll Reveal Animation Setup
  const revealElements = document.querySelectorAll('.card, .hero-content, .hero-mockup, .demo-layout > *');
  
  const checkReveal = () => {
    const triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  };

  // Initial styling for reveal elements
  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(25px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  });

  // Scrollspy: highlight the nav link for the section currently in view.
  // The `active` class used to be hard-coded on "الرئيسية" and never moved, so
  // the nav gave no clue where you were once you started scrolling.
  const navLinks = Array.from(document.querySelectorAll('.nav-link[href^="#"]'));
  const sections = navLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const syncNav = () => {
    // A section counts as current once its top passes a third of the viewport,
    // which matches where the eye actually is rather than the very top edge.
    const marker = window.innerHeight / 3;
    let currentIndex = 0;

    sections.forEach((section, i) => {
      if (section.getBoundingClientRect().top <= marker) currentIndex = i;
    });

    navLinks.forEach((link, i) => {
      link.classList.toggle('active', i === currentIndex);
    });
  };

  // Run on load and scroll
  window.addEventListener('scroll', () => {
    checkReveal();
    syncNav();
  });
  checkReveal();
  syncNav();
});
