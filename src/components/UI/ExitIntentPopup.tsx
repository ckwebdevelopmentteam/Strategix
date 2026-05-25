'use client';

import { useState, useEffect } from 'react';

export default function ExitIntentPopup() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show after 20 seconds
    const timer = setTimeout(() => {
      if (!dismissed) {
        window.dispatchEvent(new CustomEvent('open-lead-modal'));
        setDismissed(true);
      }
    }, 20000);

    // Exit-intent: mouse leaves viewport from top
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        window.dispatchEvent(new CustomEvent('open-lead-modal'));
        setDismissed(true);
      }
    };

    document.addEventListener('mouseleave', onMouseLeave);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [dismissed]);

  return null;
}
