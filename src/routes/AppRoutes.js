import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/About';
import Experience from '../pages/Experience';
import Main from '../pages/Main';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Education from '../pages/Education';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/education" element={<Education />} />
  </Routes>
);

export default AppRoutes;
