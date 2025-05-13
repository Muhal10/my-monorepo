import React from 'react';
import 'styles/index.css';  // Vite will bundle and inject the CSS

import FeatureOne from 'feature-x/src/FeatureOne';  // Existing feature-x
import FeatureTwo from 'feature-y/src/FeatureTwo';  // New feature-y

const App: React.FC = () => {
  return (
    <div>
      <h1>Hello from App! ✅</h1>
      <FeatureOne />
      <FeatureTwo /> {/* New feature from feature-y */}

    </div>
  );
};

export default App;
