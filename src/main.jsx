import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'aos/dist/aos.css';
import ScrollingProvider from './Contexts/ScrollingContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ScrollingProvider>
    <App />
  </ScrollingProvider>,
)
