import React, { useState } from 'react';
import { Solution } from '../types';
import { SOLUTIONS } from '../data';
import { Check, ArrowRight, X, Info, Shield, HelpCircle, MapPin, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SolutionsViewProps {
  setActiveTab: (tab: string) => void;
  setSelectedWorkspaceType?: (type: string) => void;
}

export default function SolutionsView({ setActiveTab, setSelectedWorkspaceType }: SolutionsViewProps) {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [exploreSelection, setExploreSelection] = useState<string>('Please select *');
  const [superPassModalOpen, setSuperPassModalOpen] = useState(false);

  const handleLearnMore = (sol: Solution) => {
    setSelectedSolution(sol);
  };

  const handleBookRedirect = (workspaceType: string) => {
    if (setSelectedWorkspaceType) {
      setSelectedWorkspaceType(workspaceType);
    }
    setActiveTab('book-tour');
    setSelectedSolution(null);
    setSuperPassModalOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Recommendations based on selected option
  const getExploreRecommendation = () => {
    switch (exploreSelection) {
      case 'private office for my team.':
        return {
          title: 'Private Offices',
          price: 'From $450/mo per desk',
          desc: 'Your team gets a fully private, keycard-secured office suite with custom enterprise layout configurations, premium acoustic insulation, and unlimited corporate lounge access.',
          match: '98% match for your business',
          amenities: ['Secure Private Suite', 'Free Meeting Hours', 'Ergonomic Desks', 'Housekeeping Included'],
          actionType: 'Private Offices'
        };
      case 'work desk occasionally.':
        return {
          title: 'Coworking / Hot Desking',
          price: 'From $180/mo',
          desc: 'Access vibrant communal breakout lounges, creative booths, and focus desks across any of our prime CBD locations with high-speed Wi-Fi and complimentary barista café bars.',
          match: '95% match for individuals & remote teams',
          amenities: ['Vibrant Communal Spaces', 'High-Speed Wi-Fi', 'Complimentary Craft Coffee', 'Networking Events'],
          actionType: 'Coworking'
        };
      case 'space for a meeting / event.':
        return {
          title: 'Meeting Rooms & Event Spaces',
          price: 'From $45/hour',
          desc: 'Equipped with state-of-the-art AV devices, Polycom video-conferencing, writable glass boards, and on-demand premium catering setup to impress your prospects.',
          match: '92% match for workshops, pitches & conferences',
          amenities: ['Interactive Smartboards', 'Bilingual IT Support', 'Configurable Layouts', 'Professional Receptionist'],
          actionType: 'Meeting Rooms & Event Spaces'
        };
      case 'business address.':
        return {
          title: 'Virtual Offices',
          price: 'From $35/mo',
          desc: 'Instantly register your business in prestigious grade-A CBD office towers. Receive professional mail handling, scanning options, and custom call answering solutions.',
          match: '99% match for virtual presence',
          amenities: ['CBD Commercial Address', 'Secure Mail Forwarding', 'Professional Receptionist', 'On-Demand Access'],
          actionType: 'Virtual Offices'
        };
      default:
        return null;
    }
  };

  const recommendation = getExploreRecommendation();

  return (
    <div id="solutions-view" className="bg-white">
      {/* Hero Banner Section */}
      <section id="solutions-hero" className="relative">
        <div className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[480px] overflow-hidden relative">
          <img
            alt="JustCo Workspace Banner"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida/AP1WRLtObEOHf6JJpeH48-mcZ571wZhM1AyXEPNFVK32TyfVc89BJemCogIPn4swwziony_ClZJLT6rtOmkkKI2iPdzrUgkk8BV_tXGGAnR-ZzZX2gqebrHMrBsG7dtLQTKVj4qjG5gjngFOel_gVuoohUpfPEo0i1lThL8eHup6eqlb6KnsyevMtq3ROpEJI1KeadFNr-6cQBXddelC6zsprgCm5l4V3I5xHAJ06zeGyaIxK1-ydrL7qYJst-c"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>
      </section>

      {/* Introductory Section */}
      <section id="solutions-intro" className="max-w-4xl mx-auto text-center py-12 md:py-16 px-4">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 md:mb-4">OUR SOLUTIONS</p>
        <h1 className="text-3xl md:text-5xl font-bold text-justco-dark mb-4 md:mb-6 leading-tight font-sans tracking-tight">
          Flexible Workspaces & Office Space Solutions Across Asia-Pacific
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          JustCo is Asia’s leading flexible workspace partner for private offices, coworking, meeting spaces and virtual offices across Asia Pacific.
        </p>
      </section>

      {/* Solutions Cards Grid */}
      <section id="solutions-grid" className="max-w-7xl mx-auto px-4 md:px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOLUTIONS.map((sol) => (
            <article
              id={`solution-card-${sol.id}`}
              key={sol.id}
              className="bg-surface-container-low rounded-custom overflow-hidden flex flex-col hover-lift border border-gray-100"
            >
              <div className="h-64 overflow-hidden relative group">
                <img
                  alt={sol.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={sol.image}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-justco-dark/80 text-white font-semibold text-xs py-1 px-3 rounded-full backdrop-blur-xs">
                  {sol.pricing.split(' ')[0]} {sol.pricing.split(' ')[1]}
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-justco-dark mb-3 tracking-tight">{sol.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm sm:text-base">
                  {sol.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200/50">
                  <span className="text-xs font-bold text-justco-blue tracking-wider uppercase">Starting Price: {sol.pricing}</span>
                  <button
                    onClick={() => handleLearnMore(sol)}
                    className="inline-flex items-center space-x-1 bg-justco-blue text-white font-bold py-2.5 px-6 rounded-custom uppercase text-xs tracking-wider hover:bg-justco-blue/90 transition duration-200 cursor-pointer"
                  >
                    <span>LEARN MORE</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* SuperPass Row - Highlight Access Pass */}
        <div
          id="superpass-card"
          className="mt-12 bg-[#e3f4fc] rounded-custom overflow-hidden flex flex-col md:flex-row hover-lift border border-[#bce4f5]"
        >
          <div className="md:w-1/2 relative min-h-[250px] md:min-h-auto">
            <div className="absolute top-4 left-4 bg-[#00a651] text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider z-10">
              MEMBERS ONLY
            </div>
            <img
              alt="SuperPass"
              className="w-full h-full object-cover min-h-[250px] md:min-h-full"
              src="https://lh3.googleusercontent.com/aida/AP1WRLvlMYy1xMYnMNEnNv425CCBwSCUhVKOwmk9DbPzUSi2swjsSlm_M8x7trDLyHlJn53l90UhrC5KN6q2pAzpRevz6LyR8LcGmGI89eWqGTRG6EEXda3DEZ_WHsCa2jmMuTzSbIU4izesSExwUyaNnYPx_9DY0IabHWtW37gVn08Ur3HOnlQRm3m9diCEN0WkGwyTfLxszoNJLz2NFlci_uwIOIX3Yl6vnhn-cr9QcbtVta5HHN8XXojqfcE"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <p className="text-xs font-bold text-justco-dark uppercase mb-2 tracking-widest">ADD-ON BENEFITS</p>
            <h3 className="text-3xl font-bold text-justco-dark mb-4 tracking-tight">SuperPass</h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">
              A credit-based access pass for members — use it to book hot desks and meeting rooms across our network for extra flexibility. Perfect for hybrid setups.
            </p>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSuperPassModalOpen(true)}
                className="inline-block bg-justco-blue text-white font-bold py-3 px-8 rounded-custom uppercase text-xs tracking-wider hover:bg-justco-blue/90 transition duration-200 cursor-pointer"
              >
                LEARN MORE
              </button>
              <button
                onClick={() => handleBookRedirect('SuperPass')}
                className="inline-flex items-center space-x-1 text-justco-dark font-bold text-xs tracking-wider uppercase hover:text-justco-blue transition"
              >
                <span>Purchase Pass</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Explorer interactive widget */}
      <section id="solutions-explorer" className="bg-[#edf9ff] py-16 md:py-20 border-y border-[#d2f0ff]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-justco-dark mb-3 tracking-tight">Explore Our Workspace Solutions</h2>
          <p className="text-gray-600 mb-10 text-sm sm:text-base">
            Tell us what you’re trying to do — we’ll point you to the best option instantly.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <label className="text-lg md:text-xl font-bold text-justco-dark flex-shrink-0">I need a</label>
            <div className="relative w-full md:w-80">
              <select
                id="explore-select"
                value={exploreSelection}
                onChange={(e) => setExploreSelection(e.target.value)}
                className="w-full p-4 pr-10 border border-gray-200 rounded-custom appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-justco-blue focus:border-justco-blue text-gray-700 font-semibold shadow-xs"
              >
                <option value="Please select *">Please select *</option>
                <option value="private office for my team.">private office for my team.</option>
                <option value="work desk occasionally.">work desk occasionally.</option>
                <option value="space for a meeting / event.">space for a meeting / event.</option>
                <option value="business address.">business address.</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                <span className="text-xs">▼</span>
              </div>
            </div>
          </div>

          {/* Interactive Recommendation Panel */}
          <AnimatePresence mode="wait">
            {recommendation && (
              <motion.div
                id="recommendation-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="mt-8 bg-white p-6 md:p-8 rounded-custom text-left border border-[#bce4f5] shadow-md max-w-2xl mx-auto"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#e2f6ff] text-justco-blue font-bold text-[10px] uppercase py-1 px-2.5 rounded-sm tracking-wider">
                    RECOMENDED MATCH
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 py-1 px-2.5 rounded-sm">
                    {recommendation.match}
                  </span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-justco-dark mb-1">{recommendation.title}</h4>
                <p className="text-xs font-bold text-justco-blue tracking-wider mb-4 uppercase">{recommendation.price}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{recommendation.desc}</p>
                
                <h5 className="text-xs font-bold text-justco-dark tracking-wider uppercase mb-3">Core Included Benefits:</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {recommendation.amenities.map((am, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-gray-600">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{am}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleBookRedirect(recommendation.actionType)}
                    className="w-full sm:w-auto bg-justco-dark hover:bg-justco-dark/95 text-white font-bold py-3 px-8 rounded-custom uppercase text-xs tracking-wider transition cursor-pointer"
                  >
                    Book Consultation
                  </button>
                  <button
                    onClick={() => {
                      const foundSol = SOLUTIONS.find(s => s.title.toLowerCase().includes(recommendation.title.split(' ')[0].toLowerCase()));
                      if (foundSol) {
                        setSelectedSolution(foundSol);
                      }
                    }}
                    className="text-justco-blue font-bold text-xs tracking-wider uppercase hover:underline flex items-center space-x-1 cursor-pointer"
                  >
                    <span>View All Amenities</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Why JustCo Section */}
      <section id="why-justco" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-justco-dark text-center mb-16 tracking-tight">Why JustCo?</h2>
          
          {/* Major Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-6 flex items-center justify-center bg-[#edf9ff] rounded-full text-justco-blue border border-[#d2f0ff]">
                <Globe className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-justco-dark mb-3 leading-snug tracking-tight">Prime CBD<br />Locations</h4>
              <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                Premium Grade-A buildings in key commercial districts across major Asia-Pacific economic centers.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-6 flex items-center justify-center bg-[#edf9ff] rounded-full text-justco-blue border border-[#d2f0ff]">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-justco-dark mb-3 leading-snug tracking-tight">Flexible To Start,<br />Easy To Scale</h4>
              <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                Upgrade, expand, downsize, or add locations dynamically as your business requirements evolve.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-6 flex items-center justify-center bg-[#edf9ff] rounded-full text-justco-blue border border-[#d2f0ff]">
                <Info className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-justco-dark mb-3 leading-snug tracking-tight">Move-In Ready,<br />Professionally-Run</h4>
              <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                Fully serviced offices with on-site IT help, mail handling, reception services and premium amenities.
              </p>
            </div>
          </div>

          {/* Checklist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border-t border-gray-100 pt-16">
            <div className="flex items-start space-x-4">
              <div className="p-1 bg-emerald-50 rounded-full text-emerald-500 flex-shrink-0">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h5 className="font-bold text-justco-dark mb-1 tracking-tight text-base">Trusted Workspace Partner</h5>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Chosen by high-growth startups, regional SMEs, and Fortune 500 corporate brands across industries.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-1 bg-emerald-50 rounded-full text-emerald-500 flex-shrink-0">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h5 className="font-bold text-justco-dark mb-1 tracking-tight text-base">Meeting-Ready On Demand</h5>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Book boardrooms, collaborative workshops, or soundproof phone cabins instantly via the JustCo mobile app.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-1 bg-emerald-50 rounded-full text-emerald-500 flex-shrink-0">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h5 className="font-bold text-justco-dark mb-1 tracking-tight text-base">Complete Workspace Portfolio</h5>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Your single partner for hot desking, dedicated suites, creative event halls, and prestigious virtual mailing.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-1 bg-emerald-50 rounded-full text-emerald-500 flex-shrink-0">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h5 className="font-bold text-justco-dark mb-1 tracking-tight text-base">Fast And Easy – From Search To Move-In</h5>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Browse and secure your premium layout online, sign contract papers digitally, and move in next business day.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-1 bg-emerald-50 rounded-full text-emerald-500 flex-shrink-0">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h5 className="font-bold text-justco-dark mb-1 tracking-tight text-base">Built For Productive Days</h5>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Ergonomically designed layouts, micro-filtered water taps, focus desks, quiet corners, and business-grade secure internet.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-1 bg-emerald-50 rounded-full text-emerald-500 flex-shrink-0">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h5 className="font-bold text-justco-dark mb-1 tracking-tight text-base">A Community That Helps You Grow</h5>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Unlock access to curated networking mixers, business masterclasses, and dynamic cross-border professional meetups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Details Modal */}
      <AnimatePresence>
        {selectedSolution && (
          <div
            id="solution-modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
            onClick={() => setSelectedSolution(null)}
          >
            <motion.div
              id="solution-modal-container"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-custom shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-100"
            >
              <div className="relative h-60 w-full">
                <img
                  alt={selectedSolution.title}
                  className="w-full h-full object-cover"
                  src={selectedSolution.image}
                  referrerPolicy="no-referrer"
                />
                <button
                  id="close-solution-modal"
                  onClick={() => setSelectedSolution(null)}
                  className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white text-justco-dark hover:text-justco-blue rounded-full transition shadow-md cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 bg-justco-blue text-white text-xs font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider">
                  {selectedSolution.pricing}
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-justco-dark mb-2 tracking-tight">
                  {selectedSolution.title}
                </h3>
                <p className="text-justco-blue text-sm font-semibold mb-6 italic">
                  {selectedSolution.tagline}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {selectedSolution.description}
                </p>

                <h4 className="text-xs font-bold text-justco-dark tracking-widest uppercase mb-4">
                  What is included in this package:
                </h4>
                <ul className="space-y-3.5 mb-8">
                  {selectedSolution.features.map((feat, index) => (
                    <li key={index} className="flex items-start space-x-3 text-xs md:text-sm text-gray-600">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-6 border-t border-gray-100">
                  <button
                    onClick={() => handleBookRedirect(selectedSolution.title)}
                    className="flex-1 bg-justco-blue hover:bg-justco-blue/95 text-white font-bold py-3.5 px-6 rounded-custom uppercase text-xs tracking-wider transition text-center cursor-pointer"
                  >
                    Book A Tour Now
                  </button>
                  <button
                    onClick={() => setSelectedSolution(null)}
                    className="flex-1 border border-gray-200 hover:bg-gray-50 text-gray-600 font-semibold py-3.5 px-6 rounded-custom uppercase text-xs tracking-wider transition text-center cursor-pointer"
                  >
                    Back to Solutions
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SuperPass Add-On Modal */}
      <AnimatePresence>
        {superPassModalOpen && (
          <div
            id="superpass-modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={() => setSuperPassModalOpen(false)}
          >
            <motion.div
              id="superpass-modal-container"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-custom shadow-2xl max-w-lg w-full overflow-hidden border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8 bg-gradient-to-br from-[#e3f4fc] to-[#bde6f7] relative">
                <button
                  id="close-superpass-modal"
                  onClick={() => setSuperPassModalOpen(false)}
                  className="absolute top-4 right-4 p-1.5 bg-white/90 hover:bg-white text-justco-dark hover:text-justco-blue rounded-full transition shadow-xs cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <span className="bg-[#00a651] text-white text-[9px] font-bold px-2.5 py-0.5 rounded-sm uppercase tracking-wider">
                  MEMBERS ONLY
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-justco-dark mt-3 mb-2">JustCo SuperPass</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The ultimate credit-based hybrid pass. Share workspace credits across your team or use them flexibly month-to-month to book workspaces on-demand.
                </p>
              </div>

              <div className="p-6 md:p-8">
                <h4 className="text-xs font-bold text-justco-dark tracking-widest uppercase mb-4">
                  SuperPass Key Advantages:
                </h4>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3 text-xs md:text-sm text-gray-600">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <div>
                      <strong className="text-justco-dark">Cross-Border Network Access:</strong> Book desking spaces across Singapore, Japan, Australia, or Korea seamlessly.
                    </div>
                  </li>
                  <li className="flex items-start space-x-3 text-xs md:text-sm text-gray-600">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <div>
                      <strong className="text-justco-dark">Share Credits with Teammates:</strong> Central corporate dash allows assigning credits to team members dynamically.
                    </div>
                  </li>
                  <li className="flex items-start space-x-3 text-xs md:text-sm text-gray-600">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <div>
                      <strong className="text-justco-dark">Roll-over unused credits:</strong> Any unused coworking space tokens roll over to the next billing cycle.
                    </div>
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-6 border-t border-gray-100">
                  <button
                    onClick={() => handleBookRedirect('SuperPass')}
                    className="flex-1 bg-justco-blue hover:bg-justco-blue/95 text-white font-bold py-3 px-6 rounded-custom uppercase text-xs tracking-wider transition text-center cursor-pointer"
                  >
                    Buy SuperPass Now
                  </button>
                  <button
                    onClick={() => setSuperPassModalOpen(false)}
                    className="flex-1 border border-gray-200 hover:bg-gray-50 text-gray-500 font-semibold py-3 px-6 rounded-custom uppercase text-xs tracking-wider transition text-center cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
