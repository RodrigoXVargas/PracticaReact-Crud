import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Crud from './views/Crud.tsx'
import DetailsCostume from './views/DetailsCostume.tsx'
import Navbar from './components/Navbar.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
    <Navbar />
      <Routes>
        

        <Route path="/" element={<App />} />
        <Route path="/crud" element={<Crud />} />
        <Route path="/crud/:id" element={<DetailsCostume />} />
        <Route path="*" element={<App />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
