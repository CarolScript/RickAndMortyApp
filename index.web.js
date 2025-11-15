import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRegistry } from 'react-native';
import App from './app';

const rootElement = document.getElementById('root');

if (rootElement) {
  if (rootElement._reactRootContainer) {
    rootElement._reactRootContainer.unmount();
  }
  
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // Fallback if root element doesn't exist
  AppRegistry.registerComponent('main', () => App);
  AppRegistry.runApplication('main', {
    rootTag: document.getElementById('root'),
  });
}
