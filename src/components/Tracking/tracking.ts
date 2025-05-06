// export interface TrackingData {
//     country?: string;
//     city?: string;
//     visitDate: string;
//     page: string;
//     browserInfo: {
//       userAgent: string;
//       platform: string;
//       language: string;
//     };
//     scrollPercent: number;
//     sessionDuration: number; // in milliseconds
//     clickEvents: string[];   // Array of clicked element labels
//   }
  

  export interface TrackingData {
    country?: string;
    city?: string;
    region?:string;
    location?:string;
    postal?:string;
    visitDate: string;
    page: string;
    browserInfo: {
      userAgent: string;
      platform: string;
      language: string;
    };
    scrollPercent: number;
    sessionDuration: number; // in milliseconds
    clickEvents: string[];   // Array of clicked element labels
  }
