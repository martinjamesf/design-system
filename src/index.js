// import '@babel/polyfill'; // If you're using polyfills
import React from 'react';
import ReactDOM from 'react-dom';
import LunaAppProvider from '@luna/react/dist/components/luna-app-provider';
// import App from './App';

// Import the main Sass entry point
import './index.scss';

ReactDOM.render(
  <LunaAppProvider appname='luna-app'>
    <App />
  </LunaAppProvider>,
  document.getElementById('root')
);
