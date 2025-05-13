import React from 'react';
import FeatureOne from 'feature-x/FeatureOne';
import FeatureTwo from 'feature-y/FeatureTwo';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h1>Hello from App!</h1>
    <FeatureOne />
    <FeatureTwo />
  </React.StrictMode>
);
