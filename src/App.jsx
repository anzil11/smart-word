import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import TranslationServices from './pages/TranslationServices';
import AttestationServices from './pages/AttestationServices';
import NotarizationServices from './pages/NotarizationServices';
import BusinessSetup from './pages/BusinessSetup';
import Drafting from './pages/Drafting';
import EmiratiPension from './pages/EmiratiPension';
import ServiceDetail from './pages/ServiceDetail';
import PrivacyPolicy from './pages/LegalPrivacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        
        {/* Services Master Directory */}
        <Route path="services" element={<Services />} />

        {/* Category Landing Pages */}
        <Route path="services/translation" element={<TranslationServices />} />
        <Route path="services/attestation" element={<AttestationServices />} />
        <Route path="services/notarization" element={<NotarizationServices />} />
        <Route path="services/business-setup" element={<BusinessSetup />} />
        <Route path="services/drafting" element={<Drafting />} />
        <Route path="services/emirati-pension" element={<EmiratiPension />} />

        {/* Dynamic Service Detail Page for every single Smart Word service */}
        <Route path="services/:category/:slug" element={<ServiceDetail />} />

        {/* Legal & Policy Pages */}
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="terms-conditions" element={<Terms />} />

        {/* 404 Fallback */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
