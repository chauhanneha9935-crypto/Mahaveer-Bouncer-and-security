import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout & Core Global UI Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopWrapper from './components/ScrollToTopWrapper';

// Separated Standalone Page Views (All safely referencing the components folder)
import HomePage from './components/HomePage'; 
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import BookingForm from './components/BookingForm';
import ContactUs from './components/ContactUs';
import Gallery from './components/Gallery'; // Added Gallery component for the new route

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTopWrapper>
        <div className="font-sans antialiased text-slate-100 min-h-screen bg-neutral-950 flex flex-col justify-between pt-20">
          
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/why-choose-us" element={<WhyChooseUs />} />
              <Route path="/inquiry" element={<BookingForm />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </ScrollToTopWrapper>
    </BrowserRouter>
  );
}