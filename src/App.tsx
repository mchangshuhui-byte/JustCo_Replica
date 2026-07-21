import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SolutionsView from './components/SolutionsView';
import LocationsView from './components/LocationsView';
import AboutUsView from './components/AboutUsView';
import BrandsView from './components/BrandsView';
import BookTourView from './components/BookTourView';
import FloatingConcierge from './components/FloatingConcierge';
import { TourBooking } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('solutions');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Shared scheduler pre-fills
  const [selectedWorkspaceType, setSelectedWorkspaceType] = useState<string>('Coworking');
  const [selectedLocationId, setSelectedLocationId] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('Singapore');

  // Bookings list stored in LocalStorage for persistence
  const [bookings, setBookings] = useState<TourBooking[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('justco_bookings');
      if (stored) {
        setBookings(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load bookings from localStorage:', e);
    }
  }, []);

  const handleAddBooking = (newBooking: TourBooking) => {
    const updated = [newBooking, ...bookings];
    setBookings(updated);
    try {
      localStorage.setItem('justco_bookings', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save bookings to localStorage:', e);
    }
  };

  const handleCancelBooking = (id: string) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    try {
      localStorage.setItem('justco_bookings', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save bookings to localStorage:', e);
    }
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'solutions':
        return (
          <SolutionsView
            setActiveTab={setActiveTab}
            setSelectedWorkspaceType={setSelectedWorkspaceType}
          />
        );
      case 'locations':
        return (
          <LocationsView
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setActiveTab={setActiveTab}
            setSelectedLocationId={setSelectedLocationId}
            setSelectedCountry={setSelectedCountry}
          />
        );
      case 'about':
        return <AboutUsView />;
      case 'brands':
        return <BrandsView setActiveTab={setActiveTab} />;
      case 'book-tour':
        return (
          <BookTourView
            bookings={bookings}
            onAddBooking={handleAddBooking}
            onCancelBooking={handleCancelBooking}
            selectedWorkspaceType={selectedWorkspaceType}
            setSelectedWorkspaceType={setSelectedWorkspaceType}
            selectedLocationId={selectedLocationId}
            setSelectedLocationId={setSelectedLocationId}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        );
      default:
        return (
          <SolutionsView
            setActiveTab={setActiveTab}
            setSelectedWorkspaceType={setSelectedWorkspaceType}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans antialiased selection:bg-justco-blue/20 selection:text-justco-dark">
      {/* Top sticky navigation bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main active view content wrapper */}
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* Main Footer layout */}
      <Footer setActiveTab={setActiveTab} />

      {/* Interactive Floating widgets for quick assistance */}
      <FloatingConcierge activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
