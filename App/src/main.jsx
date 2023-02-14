import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { AuthContextProvider } from './context/authContext';
import { PostProvider } from './context/postContext'
import { DarkModeContextProvider } from './context/darkModeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthContextProvider>
        <PostProvider>
          <App />
        </PostProvider>
      </AuthContextProvider>
  </React.StrictMode>,
);
