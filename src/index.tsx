import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';

export const Settings = {
  FoundPlacesAmount: 314
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App foundPlacesAmount={Settings.FoundPlacesAmount} />
  </React.StrictMode>
);
