import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList'

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <CommentList />
  </StrictMode>
);
// setInterval(() =>{
//   root.render(
//     <StrictMode>
//       <Clock />
//     </StrictMode>
//   );
// }, 1000);

