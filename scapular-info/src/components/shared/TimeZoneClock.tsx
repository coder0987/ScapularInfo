import { useState, useEffect } from 'react';

const TimezoneClock = ({ timeZone, setTimeZone } : {timeZone : string; setTimeZone: (timeZone: string) => void;}) => {
  // Major 24 timezones (starting with American timezones)
  const timeZoneOptions = [
    'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
    'America/Anchorage', 'Pacific/Honolulu', 'America/Argentina/Buenos_Aires',
    'Europe/London', 'Europe/Paris', 'Europe/Berlin', 'Europe/Madrid', 'Asia/Tokyo',
    'Asia/Seoul', 'Asia/Shanghai', 'Australia/Sydney', 'Africa/Johannesburg',
    'Asia/Kolkata', 'Asia/Dubai', 'Africa/Nairobi', 'Pacific/Auckland',
    'America/Sao_Paulo', 'America/Caracas', 'America/Toronto', 'America/Mexico_City'
  ];

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleTimezoneChange = (e) => {
    setTimeZone(e.target.value);
  };

  const formatTime = (time, timezone) => {
    const options = {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return new Intl.DateTimeFormat('en-US', options).format(time);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-xl rounded-lg">
      <div className="text-center text-lg mb-4">
        <p>
          <span className="text-gray-500"> {formatTime(currentTime, timeZone)}</span>
        </p>
      </div>

      <div className="text-center mt-6">
        <select
          id="timezone"
          value={timeZone}
          onChange={handleTimezoneChange}
          className="mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {timeZoneOptions.map((zone) => (
            <option key={zone} value={zone}>
              {zone.replace('_', ' ').replace('/', ', ')}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TimezoneClock;
