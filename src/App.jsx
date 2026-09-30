import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Enroll from './pages/Enroll';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Courses from './pages/Courses';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/enroll" element={<Enroll />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

