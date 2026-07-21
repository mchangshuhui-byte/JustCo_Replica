import React, { useState } from 'react';
import { Search, Globe, Menu, X, Calendar } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (activeTab !== 'locations' && activeTab !== 'solutions') {
      // Auto switch to locations to filter spaces
      setActiveTab('locations');
    }
  };

  const navItems = [
    { id: 'brands', label: 'Brands' },
    { id: 'locations', label: 'Locations' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'about', label: 'About Us' },
  ];

  return (
    <header id="main-header" className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick('solutions')}>
          <img
            id="logo-img"
            alt="JustCo Logo"
            className="h-12 w-auto object-contain transition-transform duration-200 hover:scale-105"
            src="https://lh3.googleusercontent.com/aida/AP1WRLvHjiL9gxrxQt7aZ_Ih-wysi6WO9ldlOex0y9FrIW_pacbhHFTSVHKz8j9BwLS348_sMtUwPF603luFZRR73KnMwcfgsiwcNk_CbnSFzzO-QMwiDxLNy5HcW8kiw00O7GwOpnPW--Jbn8gjqgkJyyhAAHLd1p0jJvUh4pLOhZdJDpeDxhD92bgtgJWRuMad92eYpkhIxN8wiDn08wrr_FRoqcdmOauzxxM_R99___MxMye5q_Y-7B6t7_0"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-wider">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                id={`nav-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-2 transition duration-200 border-b-2 font-bold cursor-pointer ${
                  isActive
                    ? 'text-justco-blue border-justco-blue'
                    : 'text-justco-dark border-transparent hover:text-justco-blue'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop Controls (Search, Booking, Language) */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Search bar */}
          <div className="flex items-center border border-gray-200 rounded-full px-4 py-1.5 w-64 bg-gray-50 focus-within:border-justco-blue focus-within:ring-1 focus-within:ring-justco-blue transition">
            <input
              id="search-input"
              className="bg-transparent border-none outline-none text-sm w-full p-0 text-gray-700 placeholder-gray-400 focus:ring-0"
              placeholder="Search workspaces..."
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
          </div>

          {/* Book Tour Button */}
          <button
            id="book-tour-header-btn"
            onClick={() => handleNavClick('book-tour')}
            className={`flex items-center space-x-1 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-custom transition duration-200 border cursor-pointer ${
              activeTab === 'book-tour'
                ? 'bg-justco-dark text-white border-justco-dark'
                : 'border-justco-blue text-justco-blue hover:bg-justco-blue/5'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Tour</span>
          </button>

          {/* Language Selector */}
          <div className="flex items-center text-sm font-semibold uppercase text-justco-dark cursor-pointer hover:text-justco-blue transition">
            <span>EN</span>
            <span className="mx-1 text-gray-300">|</span>
            <Globe className="w-5 h-5" />
          </div>
        </div>

        {/* Mobile controls & Menu toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <button
            id="book-tour-header-mobile-btn"
            onClick={() => handleNavClick('book-tour')}
            className="p-2 border border-justco-blue text-justco-blue rounded-full hover:bg-justco-blue/5"
            title="Book a Tour"
          >
            <Calendar className="w-4 h-4" />
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-justco-dark hover:text-justco-blue transition focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-drawer" className="md:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-4 shadow-lg absolute left-0 right-0 z-50">
          <div className="space-y-3 flex flex-col">
            {navItems.map((item) => (
              <button
                id={`mobile-nav-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left font-bold text-lg py-2 ${
                  activeTab === item.id ? 'text-justco-blue' : 'text-justco-dark'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              id="mobile-nav-book-tour"
              onClick={() => handleNavClick('book-tour')}
              className={`text-left font-bold text-lg py-2 flex items-center space-x-2 ${
                activeTab === 'book-tour' ? 'text-justco-blue' : 'text-justco-dark'
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span>Book a Tour</span>
            </button>
          </div>

          <div className="pt-4 border-t border-gray-100">
            {/* Search */}
            <div className="flex items-center border border-gray-200 rounded-full px-4 py-2 w-full bg-gray-50 mb-4">
              <input
                id="search-input-mobile"
                className="bg-transparent border-none outline-none text-sm w-full p-0 text-gray-700 focus:ring-0"
                placeholder="Search workspaces..."
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Search className="w-4 h-4 text-gray-400" />
            </div>

            <div className="flex items-center justify-between text-sm font-semibold text-justco-dark">
              <span>Select Language</span>
              <div className="flex items-center space-x-1">
                <span className="text-justco-blue">EN (English)</span>
                <Globe className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
