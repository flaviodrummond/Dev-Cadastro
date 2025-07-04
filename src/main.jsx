import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from "./Styles/GlobalStyle.js";
import { RouterProvider } from 'react-router-dom';
import router from './routes.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </StrictMode>,
)
