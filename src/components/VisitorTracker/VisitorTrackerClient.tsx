'use client';

import { useEffect, useRef } from 'react';
import { trackVisitor } from '@/utils/visitorTracker';

export default function VisitorTrackerClient() {
  const tracked = useRef(false);

  useEffect(() => {
    if (!tracked.current) {
      tracked.current = true;
      trackVisitor();
    }
  }, []);

  return null;
}
