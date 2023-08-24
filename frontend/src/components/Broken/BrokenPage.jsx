import React from 'react';

const MaintenancePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <a href="/UserMobile" class="flex items-center">
            <img
              src={process.env.PUBLIC_URL + "/AVI.png"}
              alt="Logo"
              class="h-6 mr-3 sm:h-9"
            />
          </a>
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">What Are You Looking ? </h1>
      <p className="text-gray-700 text-base text-center md:text-xl lg:text-2xl mb-8">Please Contact The Developer</p>
     
      <a href="/UserMobile" class="flex items-center"><div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 border-4 border-gray-900 rounded-full animate-spin"></div></a>
      {/* <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">Page Under Maintenance</h1>
      <p className="text-gray-700 text-base text-center md:text-xl lg:text-2xl mb-8">We are currently performing maintenance on this page. Please check back soon!</p>
      <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 border-4 border-gray-900 rounded-full animate-spin"></div> */}
    </div>
  );
};

export default MaintenancePage;
