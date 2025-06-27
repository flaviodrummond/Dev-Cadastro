import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from "./GlobalStyle.js";
import './index.css'
import Home from './Pages/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <Home />
  </StrictMode>,
)
