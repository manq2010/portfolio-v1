import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/About';
import Experience from '../pages/Experience';
import Main from '../pages/Main';
import Projects from '../pages/Projects';
import ContactPage from '../pages/Contact';
import EducationPage from '../pages/Education';
// import SkillsPage from '../pages/Skills';
// import TestimonialsPage from '../pages/Testimonials';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/education" element={<EducationPage />} />
    {/* <Route path="/skills" element={<SkillsPage />} /> */}
    {/* <Route path="/testimonials" element={<TestimonialsPage />} /> */}
  </Routes>
);

export default AppRoutes;
