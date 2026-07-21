import React, { useState, useEffect } from 'react';
import { TourBooking } from '../types';
import { WORKSPACES } from '../data';
import { Check, Calendar, Clock, MapPin, Users, Trash2, ShieldCheck, Mail, ClipboardCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookTourViewProps {
  bookings: TourBooking[];
  onAddBooking: (booking: TourBooking) => void;
  onCancelBooking: (id: string) => void;
  selectedWorkspaceType: string;
  setSelectedWorkspaceType: (type: string) => void;
  selectedLocationId: string;
  setSelectedLocationId: (id: string) => void;
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
}

export default function BookTourView({
  bookings,
  onAddBooking,
  onCancelBooking,
  selectedWorkspaceType,
  setSelectedWorkspaceType,
  selectedLocationId,
  setSelectedLocationId,
  selectedCountry,
  setSelectedCountry,
}: BookTourViewProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [teamSize, setTeamSize] = useState(1);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:00 AM');
  const [submitted, setSubmitted] = useState(false);

  // Filter locations by country
  const countryOptions = Array.from(new Set(WORKSPACES.map((w) => w.country)));
  const filteredLocations = WORKSPACES.filter((w) => w.country === selectedCountry);

  // Set default values if empty or changed
  useEffect(() => {
    if (!selectedCountry && countryOptions.length > 0) {
      setSelectedCountry('Singapore');
    }
  }, []);

  useEffect(() => {
    if (filteredLocations.length > 0) {
      // If selected location doesn't belong to current country, update it to first location of current country
      const hasMatch = filteredLocations.some((w) => w.id === selectedLocationId);
      if (!hasMatch) {
        setSelectedLocationId(filteredLocations[0].id);
      }
    }
  }, [selectedCountry, filteredLocations, selectedLocationId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !date) return;

    const newBooking: TourBooking = {
      id: `tour-${Date.now()}`,
      name,
      email,
      company,
      teamSize,
      workspaceType: selectedWorkspaceType || 'Coworking',
      country: selectedCountry,
      locationId: selectedLocationId,
      date,
      timeSlot,
    };

    onAddBooking(newBooking);
    setSubmitted(true);

    // Reset inputs
    setName('');
    setEmail('');
    setCompany('');
    setTeamSize(1);
    setDate('');
    setTimeSlot('10:00 AM');

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const getWorkspaceDetails = (locId: string) => {
    return WORKSPACES.find((w) => w.id === locId);
  };

  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
  ];

  return (
    <div id="book-tour-view" className="bg-gray-50 min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-justco-blue mb-3">BOOK A VISIT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-justco-dark mb-4 tracking-tight">
            Schedule Your Tour & Strategy Consultation
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Pick your closest Premium office center, choose a convenient date, and our space experts will guide you through custom plans and enterprise solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Booking Form Card (Left/Main) */}
          <div className="lg:col-span-7 bg-white rounded-custom border border-gray-100 p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-justco-dark mb-6 flex items-center space-x-2">
              <ClipboardCheck className="w-5 h-5 text-justco-blue" />
              <span>Request Personal Tour Booking</span>
            </h3>

            {submitted ? (
              <motion.div
                id="booking-submitted-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-100 rounded-custom p-8 text-center text-emerald-800"
              >
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="text-xl font-bold mb-2">Tour Request Confirmed!</h4>
                <p className="text-sm text-emerald-700 leading-relaxed mb-4">
                  We have saved your reservation details to your system portfolio below. A JustCo Community Coordinator will send a confirmation and calendar invitation to your email shortly.
                </p>
                <div className="text-xs text-emerald-600 bg-white/70 py-2 px-4 rounded-md inline-block">
                  A verification code has been dispatched to your email inbox.
                </div>
              </motion.div>
            ) : (
              <form id="tour-booking-form" onSubmit={handleSubmit} className="space-y-5">
                {/* 2 Column Country and Location Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Country *
                    </label>
                    <select
                      id="tour-country-select"
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-custom text-sm focus:outline-none focus:ring-1 focus:ring-justco-blue focus:border-justco-blue text-gray-700 font-semibold"
                    >
                      {countryOptions.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Target Workspace Center *
                    </label>
                    <select
                      id="tour-location-select"
                      value={selectedLocationId}
                      onChange={(e) => setSelectedLocationId(e.target.value)}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-custom text-sm focus:outline-none focus:ring-1 focus:ring-justco-blue focus:border-justco-blue text-gray-700 font-semibold"
                    >
                      {filteredLocations.map((loc) => (
                        <option key={loc.id} value={loc.id}>
                          {loc.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Workspace type and Team Size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Interested Solutions *
                    </label>
                    <select
                      id="tour-solution-select"
                      value={selectedWorkspaceType}
                      onChange={(e) => setSelectedWorkspaceType(e.target.value)}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-custom text-sm focus:outline-none focus:ring-1 focus:ring-justco-blue focus:border-justco-blue text-gray-700 font-semibold"
                    >
                      <option value="Private Offices">Private Offices</option>
                      <option value="Coworking">Coworking / Desking</option>
                      <option value="Meeting Rooms & Event Spaces">Meeting Rooms & Events</option>
                      <option value="Virtual Offices">Virtual Offices</option>
                      <option value="SuperPass">SuperPass</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Estimated Team Size *
                    </label>
                    <input
                      id="tour-team-size-input"
                      type="number"
                      min={1}
                      max={500}
                      value={teamSize}
                      onChange={(e) => setTeamSize(parseInt(e.target.value) || 1)}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-custom text-sm focus:outline-none focus:ring-1 focus:ring-justco-blue focus:border-justco-blue text-gray-700"
                    />
                  </div>
                </div>

                {/* Date and Time slots */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Preferred Date *
                    </label>
                    <input
                      id="tour-date-input"
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-custom text-sm focus:outline-none focus:ring-1 focus:ring-justco-blue focus:border-justco-blue text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Available Time Slot *
                    </label>
                    <select
                      id="tour-timeslot-select"
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-custom text-sm focus:outline-none focus:ring-1 focus:ring-justco-blue focus:border-justco-blue text-gray-700 font-semibold"
                    >
                      {timeSlots.map((ts) => (
                        <option key={ts} value={ts}>
                          {ts}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <hr className="border-gray-100 my-2" />

                {/* Personal Info */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Contact Full Name *
                    </label>
                    <input
                      id="tour-name-input"
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-custom text-sm focus:outline-none focus:ring-1 focus:ring-justco-blue focus:border-justco-blue text-gray-700"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        id="tour-email-input"
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-custom text-sm focus:outline-none focus:ring-1 focus:ring-justco-blue focus:border-justco-blue text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                        Company Name (Optional)
                      </label>
                      <input
                        id="tour-company-input"
                        type="text"
                        placeholder="Acme Corp"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-custom text-sm focus:outline-none focus:ring-1 focus:ring-justco-blue focus:border-justco-blue text-gray-700"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    id="submit-booking-btn"
                    type="submit"
                    className="w-full bg-justco-blue hover:bg-justco-blue/95 text-white font-bold py-3.5 px-6 rounded-custom uppercase text-xs tracking-wider transition duration-200 shadow-xs hover:shadow-md cursor-pointer"
                  >
                    Request Booking Confirmation
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Guidelines Sidebar (Right/Sidebar) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Value Added Banner */}
            <div className="bg-justco-dark text-white p-6 rounded-custom shadow-xs border border-neutral-800">
              <h4 className="text-lg font-bold mb-3 flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-justco-blue" />
                <span>JustCo Visit Protocol</span>
              </h4>
              <ul className="space-y-4 text-xs text-gray-300">
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-justco-blue flex-shrink-0 mt-0.5" />
                  <span><strong>Instant Coordinator Assignment:</strong> Our center executive will be dedicated to tour you around the workspaces.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-justco-blue flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Pressure Guarantee:</strong> We outline all customizable private layout schemes and transparent pricing directly with no hidden fees.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-justco-blue flex-shrink-0 mt-0.5" />
                  <span><strong>Complimentary Day-Pass:</strong> Book a tour and enjoy full access to our coworking hot-desking zones for the rest of that day!</span>
                </li>
              </ul>
            </div>

            {/* Selection Highlight Card */}
            {selectedLocationId && (
              <div className="bg-white p-6 rounded-custom border border-gray-100 shadow-xs">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Selected Workspace Preview</h4>
                {(() => {
                  const ws = getWorkspaceDetails(selectedLocationId);
                  if (!ws) return <p className="text-xs text-gray-400">Select a center above to view details</p>;
                  return (
                    <div id="booking-location-preview" className="space-y-3">
                      <div className="h-32 rounded-custom overflow-hidden">
                        <img
                          alt={ws.name}
                          className="w-full h-full object-cover"
                          src={ws.image}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <h5 className="font-bold text-justco-dark text-base">{ws.name}</h5>
                      <p className="text-xs text-gray-500 flex items-center space-x-1">
                        <MapPin className="w-3.5 h-3.5 text-justco-blue flex-shrink-0" />
                        <span>{ws.address}</span>
                      </p>
                      <div className="text-[11px] bg-gray-50 py-2 px-3 rounded-md text-gray-600 space-y-1">
                        <p><strong>Transit:</strong> {ws.metroAccess}</p>
                        <p><strong>Capacity:</strong> {ws.capacity}</p>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        </div>

        {/* My Scheduled Reservations Portfolio List */}
        <div className="mt-16 bg-white border border-gray-100 rounded-custom p-6 md:p-8 shadow-sm">
          <h3 className="text-xl font-bold text-justco-dark mb-6 flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-justco-blue" />
            <span>My Tour Schedule & Active Reservations</span>
          </h3>

          {bookings.length > 0 ? (
            <div className="overflow-x-auto">
              <table id="bookings-table" className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-xs text-gray-400 uppercase font-bold tracking-wider">
                    <th className="pb-3 pl-2">Name / Company</th>
                    <th className="pb-3">Location Center</th>
                    <th className="pb-3">Workspace Type</th>
                    <th className="pb-3">Scheduled Slot</th>
                    <th className="pb-3 text-right pr-2">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {bookings.map((b) => {
                    const ws = getWorkspaceDetails(b.locationId);
                    return (
                      <tr id={`booking-row-${b.id}`} key={b.id} className="text-sm text-gray-700 hover:bg-gray-50 transition">
                        <td className="py-4 pl-2">
                          <p className="font-bold text-justco-dark">{b.name}</p>
                          <p className="text-xs text-gray-400">{b.company || 'Individual Client'}</p>
                        </td>
                        <td className="py-4">
                          <p className="font-semibold text-gray-800">{ws ? ws.name : b.locationId}</p>
                          <p className="text-xs text-gray-400">{b.country}</p>
                        </td>
                        <td className="py-4">
                          <span className="bg-[#e0f6ff] text-justco-blue text-xs font-bold px-2 py-0.5 rounded-sm">
                            {b.workspaceType}
                          </span>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center space-x-1 text-xs">
                            <Calendar className="w-3.5 h-3.5 text-gray-400" />
                            <span>{b.date}</span>
                            <span className="text-gray-300">|</span>
                            <Clock className="w-3.5 h-3.5 text-gray-400" />
                            <span>{b.timeSlot}</span>
                          </div>
                        </td>
                        <td className="py-4 text-right pr-2">
                          <button
                            id={`cancel-booking-btn-${b.id}`}
                            onClick={() => onCancelBooking(b.id)}
                            className="p-2 text-rose-500 hover:text-rose-700 hover:bg-rose-50 transition rounded-full cursor-pointer"
                            title="Cancel Reservation"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div id="no-bookings-empty-state" className="text-center py-10 border border-dashed border-gray-200 rounded-custom bg-gray-50/50">
              <ClipboardCheck className="w-8 h-8 text-gray-300 mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-500">No scheduled tours found</p>
              <p className="text-xs text-gray-400 max-w-xs mx-auto mt-1 leading-relaxed">
                Use the quick consultation tour form above to secure an active visit slot at any JustCo location.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
