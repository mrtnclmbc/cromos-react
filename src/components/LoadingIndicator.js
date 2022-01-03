import React from 'react';

const LoadingIndicator = () => {
  return(
    <>
      <div className="h-screen w-screen z-50 flex justify-center items-center">
        <div class="flex items-center justify-center space-x-2 animate-pulse">
          <div class="w-6 h-6 bg-red-400 rounded-full"></div>
          <div class="w-6 h-6 bg-red-400 rounded-full"></div>
          <div class="w-6 h-6 bg-red-400 rounded-full"></div>
        </div>
      </div>
    </>
  )
}

export default LoadingIndicator;
