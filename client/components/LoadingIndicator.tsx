// components/LoadingIndicator.tsx
import React from 'react';

const LoadingIndicator: React.FC = () => {
  return (
    <div className="loading-container">
      <span className="loading loading-infinity loading-lg"></span>
    </div>
  );
};

export default LoadingIndicator;
