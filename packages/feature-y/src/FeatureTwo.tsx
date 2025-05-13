// Feature A goes hereimport React from 'react';
import Button from 'ui-components';    // Using button component from ui-components
import { formatDate } from "utils";  // Correct path using alias

const FeatureTwo: React.FC = () => {
  const currentDate = formatDate(new Date());

  const handleClick = () => {
    alert('Feature Y Button clicked!');
  };

  return (
    <div className="p-4">
      <h2>Feature Two</h2>
      <p>Current Date: {currentDate}</p>
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
};

export default FeatureTwo;
