import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { HeroesApp } from './HeroesApp.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </StrictMode>
)
