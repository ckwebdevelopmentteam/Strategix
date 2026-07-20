export interface VisitorData {
  timestamp: string;
  ip: string;
  country: string;
  state: string;
  city: string;
  timezone: string;
  browser: string;
  browserVersion: string;
  os: string;
  deviceType: string;
  screenResolution: string;
  language: string;
  referrer: string;
  currentUrl: string;
  sessionId: string;
  isNewVisitor: boolean;
}

const TRACKING_URL = 'https://script.google.com/macros/s/AKfycbxfXQqrk1HT0juHm9kVY-YuLVYLPCqWVCWXRZgLFumXCO90qq6NbDk9Jpt8pF6tEDMM/exec';
const DEBOUNCE_TIME = 30 * 60 * 1000; // 30 minutes

const generateSessionId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const getBrowserInfo = () => {
  const ua = navigator.userAgent;
  let browser = 'Unknown';
  let version = 'Unknown';

  if (/chrome|crios|crmo/i.test(ua)) {
    browser = 'Chrome';
    const match = ua.match(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i);
    if (match) version = match[1];
  } else if (/firefox|fxios/i.test(ua)) {
    browser = 'Firefox';
    const match = ua.match(/(?:firefox|fxios)\/(\d+(\.\d+)?)/i);
    if (match) version = match[1];
  } else if (/safari/i.test(ua) && !/chrome|crios|crmo/i.test(ua)) {
    browser = 'Safari';
    const match = ua.match(/version\/(\d+(\.\d+)?)/i);
    if (match) version = match[1];
  } else if (/msie|trident/i.test(ua)) {
    browser = 'IE';
  } else if (/edg/i.test(ua)) {
    browser = 'Edge';
    const match = ua.match(/edg\/(\d+(\.\d+)?)/i);
    if (match) version = match[1];
  }

  return { browser, version };
};

const getOS = () => {
  const ua = navigator.userAgent;
  if (/windows phone/i.test(ua)) return 'Windows Phone';
  if (/win/i.test(ua)) return 'Windows';
  if (/mac/i.test(ua)) return 'MacOS';
  if (/linux/i.test(ua)) return 'Linux';
  if (/android/i.test(ua)) return 'Android';
  if (/ipad|iphone|ipod/i.test(ua)) return 'iOS';
  return 'Unknown';
};

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'Tablet';
  }
  if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'Mobile';
  }
  return 'Desktop';
};

export const trackVisitor = async () => {
  try {
    if (typeof window === 'undefined') return; // Ensure client-side

    const now = Date.now();
    const lastTracked = localStorage.getItem('last_tracked_time');
    
    // Prevent duplicate entries within debounce window
    if (lastTracked && now - parseInt(lastTracked) < DEBOUNCE_TIME) {
      return; 
    }

    let sessionId = sessionStorage.getItem('visitor_session_id');
    let isNewVisitor = false;

    if (!sessionId) {
      sessionId = generateSessionId();
      sessionStorage.setItem('visitor_session_id', sessionId);
    }

    const returningUserMarker = localStorage.getItem('has_visited_before');
    if (!returningUserMarker) {
      isNewVisitor = true;
      localStorage.setItem('has_visited_before', 'true');
    }

    // Fetch IP and Location (using ipapi.co free tier)
    let locationData = { ip: 'Unknown', city: 'Unknown', region: 'Unknown', country_name: 'Unknown', timezone: 'Unknown' };
    try {
      const response = await fetch('https://ipapi.co/json/');
      if (response.ok) {
        locationData = await response.json();
      }
    } catch (e) {
      console.warn("Could not fetch location data:", e);
    }

    const { browser, version } = getBrowserInfo();

    const payload: VisitorData = {
      timestamp: new Date().toISOString(),
      ip: locationData.ip || 'Unknown',
      country: locationData.country_name || 'Unknown',
      state: locationData.region || 'Unknown',
      city: locationData.city || 'Unknown',
      timezone: locationData.timezone || 'Unknown',
      browser: browser,
      browserVersion: version,
      os: getOS(),
      deviceType: getDeviceType(),
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language || 'Unknown',
      referrer: document.referrer || 'Direct',
      currentUrl: window.location.href,
      sessionId: sessionId,
      isNewVisitor: isNewVisitor
    };

    // Send to Google Apps Script silently
    if (TRACKING_URL) {
        fetch(TRACKING_URL, {
            method: 'POST',
            mode: 'no-cors', // Essential for sending data silently without CORS issues to Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        }).catch(err => console.error("Tracking error:", err));
        
        // Update last tracked time
        localStorage.setItem('last_tracked_time', now.toString());
    } else {
        console.warn("Visitor Tracker: Web App URL not set. Data not sent.", payload);
    }

  } catch (error) {
    console.error("Failed to track visitor:", error);
  }
};
