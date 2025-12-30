import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PageTitle from "./ui/PageTitle.tsx";
import MainPage from "./ui/MainPage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <PageTitle/>
      <MainPage/>
  </StrictMode>,
)
