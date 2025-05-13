import React from 'react';
import { formatDate } from 'utils';  // Using utility function
import Button from 'ui-components'; // if index exports default

const FeatureOne = () => {
  const currentDate = formatDate(new Date());

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="p-4">
      <h2>Feature One</h2>
      <p>Current Date: {currentDate}</p>
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
};

export default FeatureOne;
