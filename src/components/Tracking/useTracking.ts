// import { useRouter } from 'next/router';
// import { useEffect, useRef, useState } from 'react';
// import { TrackingData } from './tracking';

// export const useUserTracking = () => {
//   const router = useRouter();
//   const [clickEvents, setClickEvents] = useState<string[]>([]);
//   const startTimeRef = useRef<number>(Date.now());
//   const maxScrollRef = useRef<number>(0);
//   const [geoInfo, setGeoInfo] = useState({ country: 'Unknown', city: 'Unknown' });

//   // Fetch geolocation (country, city)
//   useEffect(() => {
//     // fetch('https://ipapi.co/json/')
//     fetch('https://ipinfo.io/json?token=7b56f78de85d8e')
//       .then(res => res.json())
//       .then(data => {
//         setGeoInfo({
//           country: data.country || 'Unknown',
//           city: data.city || 'Unknown',
//         });
//       })
//       .catch(() => {
//         setGeoInfo({ country: 'Unknown', city: 'Unknown' });
//       });
//   }, []);

//   // Track clicks
//   useEffect(() => {
//     const handleClick = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       const label =
//         target.getAttribute('aria-label') ||
//         target.innerText?.trim() ||
//         target.tagName;
//       setClickEvents(prev => [...prev, label]);
//     };

//     window.addEventListener('click', handleClick);
//     return () => window.removeEventListener('click', handleClick);
//   }, []);

//   // Track scroll depth
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolled = window.scrollY + window.innerHeight;
//       const total = document.body.scrollHeight;
//       const percent = (scrolled / total) * 100;
//       if (percent > maxScrollRef.current) {
//         maxScrollRef.current = percent;
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Send data before user leaves
//   useEffect(() => {
//     const handleBeforeUnload = (event:any) => {
//       const sessionDuration = Date.now() - startTimeRef.current;

//       const trackingData: TrackingData = {
//         country: geoInfo.country,
//         city: geoInfo.city,
//         visitDate: new Date().toISOString(),
//         page: router.pathname,
//         browserInfo: {
//           userAgent: navigator.userAgent,
//           platform: navigator.platform,
//           language: navigator.language,
//         },
//         scrollPercent: maxScrollRef.current,
//         sessionDuration,
//         clickEvents,
//       };


//     // axios.post('http://localhost:4000/tracking',trackingData)
//     const blob = new Blob([JSON.stringify(trackingData)], {
//         type: 'application/json',
//       });
  
//       // navigator.sendBeacon('https://it-augmentation-server.vercel.app/tracking', blob);
//       navigator.sendBeacon('http://localhost:4000/tracking', blob);
//     };

//     window.addEventListener('beforeunload', handleBeforeUnload);
//     return () => window.removeEventListener('beforeunload', handleBeforeUnload);
//   }, [clickEvents]);
// };



// -------------

function getCountryName(countryCode:string) {
  try {
    // Ensure the country code is uppercase and a string
    const code = countryCode.toUpperCase();
    const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
    const countryName = regionNames.of(code);
    return countryName || 'Unknown Country';
  } catch (error) {
    console.error('Error resolving country name:', error);
    return 'Unknown Country';
  }
}

import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { TrackingData } from './tracking';

export const useUserTracking = () => {
  const router = useRouter();
  const [clickEvents, setClickEvents] = useState<string[]>([]);
  const startTimeRef = useRef<number>(Date.now());
  const maxScrollRef = useRef<number>(0);
  const [geoInfo, setGeoInfo] = useState({ country: 'Unknown', city: 'Unknown', region: 'Unknown', location:'Unknown', postal: 'Unknown' });
  const hasSentRef = useRef(false);

  const isMobile = typeof window !== 'undefined' && /Mobi|Android|iPhone/i.test(navigator.userAgent);

  const sendTrackingData = () => {
    if (hasSentRef.current) return;
    hasSentRef.current = true;

    const sessionDuration = Date.now() - startTimeRef.current;

    const trackingData: TrackingData = {
      country: getCountryName(geoInfo.country),
      city: geoInfo.city,
      location: geoInfo.location,
      postal: geoInfo.postal,
      region: geoInfo.region,
      visitDate: new Date().toISOString(),
      page: router.pathname,
      browserInfo: {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
      },
      scrollPercent: maxScrollRef.current,
      sessionDuration,
      clickEvents,
    };

    const blob = new Blob([JSON.stringify(trackingData)], {
      type: 'application/json',
    });

    navigator.sendBeacon('https://it-augmentation-server.vercel.app/tracking', blob);
    // navigator.sendBeacon('http://localhost:4000/tracking', blob);
  };

  // Fetch geolocation (country, city)
  // useEffect(() => {
  //   fetch('https://ipapi.co/json/')
  //     .then(res => res.json())
  //     .then(data => {
  //       setGeoInfo({
  //         country: data.country_name || 'Unknown',
  //         city: data.city || 'Unknown',
  //       });
  //     })
  //     .catch(() => {
  //       setGeoInfo({ country: 'Unknown', city: 'Unknown' });
  //     });
  // }, []);


  // ipinfo json data

  // "ip": "103.171.108.59",
  // "city": "Karur",
  // "region": "Tamil Nadu",
  // "country": "IN",
  // "loc": "10.9577,78.0810",
  // "org": "AS141525 Inet Communication Internet Service Provider",
  // "postal": "639102",
  // "timezone": "Asia/Kolkata"

    // Fetch geolocation (country, city)
    useEffect(() => {
      // fetch('https://ipapi.co/json/')
      fetch('https://ipinfo.io/json?token=7b56f78de85d8e')
        .then(res => res.json())
        .then(data => {
          setGeoInfo({
            country: data.country || 'Unknown',
            city: data.city || 'Unknown',
            location:data.loc || 'Unknown',
            postal: data.postal || 'Unknown',
            region:data.region || 'Unknown'
          });
        })
        .catch(() => {
          setGeoInfo({ country: 'Unknown', city: 'Unknown',location:'Unknown',
            postal:'Unknown',
            region:'Unknown' });
        });
    }, []);


  // Track clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const label =
        target.getAttribute('aria-label') ||
        target.innerText?.trim() ||
        target.tagName;
      setClickEvents(prev => [...prev, label]);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.body.scrollHeight;
      const percent = (scrolled / total) * 100;
      if (percent > maxScrollRef.current) {
        maxScrollRef.current = percent;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Send tracking on unload/visibility change
  useEffect(() => {
    const handleBeforeUnload = () => {
      sendTrackingData();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendTrackingData();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [clickEvents,geoInfo]);

  // On mobile, trigger tracking after 30 seconds
  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => {
        sendTrackingData();
      }, 30000); // 30 seconds

      return () => clearTimeout(timer);
    }
  }, [isMobile]);
};
