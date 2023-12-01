// Nav.js
import React, { useEffect, useState } from 'react';

const Navbar = ({ navHref }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // waktu navbar
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = `${currentTime.getDate()}/${currentTime.getMonth() + 1
    }/${currentTime.getFullYear()} ~ ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;

  return (
    <nav className="bg-slate px-3 sm:px-4 dark:bg-gray-900 bg-gray-900 w-full z-20 top-0 left-0 dark:border-gray-600">
      <div className="flex h-14 items-center justify-between">
        <div className="flex items-center">
          <a href={navHref}>
            <div className="flex-shrink-0">
              <img
                src={process.env.PUBLIC_URL + "/avi.png"}
                alt="Logo"
                className="h-6 ml-4 sm:h-9 bg-white rounded-md"
              />
            </div>
          </a>
        </div>
        <p className="text-gray-500 text-sm">{formattedTime}</p>
      </div>
    </nav>
  );
};

export default Navbar;
