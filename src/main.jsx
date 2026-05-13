import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';

const root = createRoot(document.getElementById('root'))
setInterval(() =>{
  root.render(
    <StrictMode>
      <Clock />
    </StrictMode>
  );
}, 1000);

