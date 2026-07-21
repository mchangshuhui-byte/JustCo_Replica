import React, { useState } from 'react';
import { WorkspaceLocation } from '../types';
import { WORKSPACES } from '../data';
import { MapPin, Search, Train, Users, Coffee, Calendar, Compass } from 'lucide-react';
import { motion } from 'motion/react';

interface LocationsViewProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setActiveTab: (tab: string) => void;
  setSelectedLocationId?: (id: string) => void;
  setSelectedCountry?: (country: string) => void;
}

export default function LocationsView({
  searchQuery,
  setSearchQuery,
  setActiveTab,
  setSelectedLocationId,
  setSelectedCountry,
}: LocationsViewProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const regions = ['All', 'Singapore', 'Australia', 'Japan', 'Korea', 'India', 'Malaysia'];

  const filteredWorkspaces = WORKSPACES.filter((ws) => {
    const matchesRegion = selectedRegion === 'All' || ws.country.toLowerCase() === selectedRegion.toLowerCase();
    const matchesSearch =
      ws.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ws.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ws.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ws.metroAccess.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const handleBookVisit = (ws: WorkspaceLocation) => {
    if (setSelectedLocationId && setSelectedCountry) {
      setSelectedLocationId(ws.id);
      setSelectedCountry(ws.country);
    }
    setActiveTab('book-tour');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="locations-view" className="bg-gray-50 min-h-screen py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header Text */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-justco-blue mb-3">LOCATIONS DIRECTORY</p>
          <h2 className="text-3xl md:text-4xl font-bold text-justco-dark mb-4 tracking-tight">
            Find Your Nearest Premium Workspace
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Explore 40+ grade-A commercial workspace towers across Asia Pacific's key business centers.
          </p>
        </div>

        {/* Search and Regional Filter Controls */}
        <div className="bg-white rounded-custom border border-gray-100 p-6 shadow-sm mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Regional Filter Buttons */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-bold text-justco-dark uppercase tracking-wider mr-2 hidden sm:inline">Country:</span>
              {regions.map((region) => {
                const isActive = selectedRegion === region;
                return (
                  <button
                    id={`region-btn-${region}`}
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-justco-blue text-white'
                        : 'bg-gray-100 text-justco-dark hover:bg-gray-200/70'
                    }`}
                  >
                    {region}
                  </button>
                );
              })}
            </div>

            {/* Quick Search */}
            <div className="relative w-full lg:w-80">
              <input
                id="workspace-search-inline"
                type="text"
                placeholder="Search by city or station..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-custom text-sm focus:outline-none focus:ring-2 focus:ring-justco-blue focus:border-justco-blue"
              />
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Dynamic Results Status Banner */}
        <div className="flex items-center justify-between mb-6 text-xs text-gray-500 px-1">
          <p>
            Showing <strong>{filteredWorkspaces.length}</strong> available center{filteredWorkspaces.length === 1 ? '' : 's'}{' '}
            {selectedRegion !== 'All' ? `in ${selectedRegion}` : ''}
          </p>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-justco-blue hover:underline font-bold cursor-pointer"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Grid of Workspaces */}
        {filteredWorkspaces.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorkspaces.map((ws, idx) => (
              <motion.article
                id={`workspace-card-${ws.id}`}
                key={ws.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                className="bg-white rounded-custom overflow-hidden shadow-xs hover-lift border border-gray-100 flex flex-col"
              >
                {/* Space Image */}
                <div className="h-52 w-full overflow-hidden relative">
                  <img
                    alt={ws.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    src={ws.image}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 text-justco-dark font-bold text-[10px] uppercase py-1 px-2.5 rounded-sm shadow-xs tracking-wider">
                    {ws.country}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-justco-dark mb-2 tracking-tight line-clamp-1">{ws.name}</h3>
                  <p className="text-xs text-gray-500 mb-4 flex items-center space-x-1.5 leading-relaxed">
                    <MapPin className="w-3.5 h-3.5 text-justco-blue flex-shrink-0" />
                    <span className="line-clamp-1">{ws.address}</span>
                  </p>

                  <div className="space-y-2.5 py-4 my-4 border-y border-gray-100 flex-grow">
                    {/* Metro transit info */}
                    <div className="flex items-center space-x-2 text-xs text-gray-600 font-medium">
                      <Train className="w-4 h-4 text-justco-blue flex-shrink-0" />
                      <span className="line-clamp-1">{ws.metroAccess}</span>
                    </div>

                    {/* Capacity info */}
                    <div className="flex items-center space-x-2 text-xs text-gray-600">
                      <Users className="w-4 h-4 text-justco-blue flex-shrink-0" />
                      <span>{ws.capacity}</span>
                    </div>
                  </div>

                  {/* Amenities tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1.5">
                      {ws.amenities.map((am, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-600 text-[10px] py-1 px-2 rounded-sm font-semibold tracking-wide"
                        >
                          {am}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-auto pt-4 flex items-center space-x-3">
                    <button
                      id={`book-visit-btn-${ws.id}`}
                      onClick={() => handleBookVisit(ws)}
                      className="flex-1 bg-justco-dark hover:bg-justco-dark/95 text-white font-bold py-2.5 px-4 rounded-custom text-center uppercase text-xs tracking-wider transition cursor-pointer"
                    >
                      Book Tour
                    </button>
                    <button
                      onClick={() => handleBookVisit(ws)}
                      className="px-4 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-500 font-semibold rounded-custom text-xs uppercase tracking-wider transition cursor-pointer"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-custom border border-gray-100 shadow-xs">
            <Compass className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-justco-dark mb-2">No locations match your filters</h3>
            <p className="text-gray-400 text-sm max-w-sm mx-auto mb-6">
              We couldn't find any centers matching your query "{searchQuery}". Try modifying your search or select a different region.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('All');
              }}
              className="px-6 py-2.5 bg-justco-blue hover:bg-justco-blue/90 text-white text-xs font-bold uppercase tracking-wider rounded-custom transition cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
