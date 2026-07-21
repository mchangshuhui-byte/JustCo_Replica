import React from 'react';
import { Sparkles, Smile, Star, Building2, UserCheck, ArrowRight } from 'lucide-react';

interface BrandsViewProps {
  setActiveTab: (tab: string) => void;
}

export default function BrandsView({ setActiveTab }: BrandsViewProps) {
  return (
    <div id="brands-view" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Brand Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-justco-blue mb-3">OUR BRAND PORTFOLIO</p>
          <h2 className="text-3xl md:text-4xl font-bold text-justco-dark mb-4 tracking-tight">
            Unique Workspace Concepts for Every Professional
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            JustCo operates three distinct brand concepts customized to match different working styles, organizational goals, and professional spirits.
          </p>
        </div>

        {/* Brands Showcase Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* THE COLLECTIVE */}
          <div className="bg-[#1a1a1a] text-white p-8 md:p-10 rounded-custom border border-neutral-800 flex flex-col justify-between hover-lift min-h-[420px]">
            <div>
              <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-full flex items-center justify-center text-amber-500 mb-6">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-wide font-mono uppercase text-amber-500">THE COLLECTIVE</h3>
              <p className="text-neutral-400 text-xs font-semibold tracking-wider uppercase mb-6">ULTRA-PREMIUM ELITE COWORKING</p>
              <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                Highly bespoke, luxury workspace sanctuaries designed exclusively for high-profile business leaders, venture capitalists, and top executive consultants. Enjoy private boardrooms with acoustic-grade paneling, premium whiskey bars, and dedicated concierge lifestyle assistance.
              </p>
            </div>
            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-400">By Invitation / Private Inquiry</span>
              <button
                onClick={() => setActiveTab('book-tour')}
                className="text-amber-500 hover:text-amber-400 font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 transition cursor-pointer"
              >
                <span>Inquire</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* JustCo */}
          <div className="bg-white text-justco-dark p-8 md:p-10 rounded-custom border border-gray-100 flex flex-col justify-between hover-lift min-h-[420px] shadow-sm relative overflow-hidden ring-1 ring-justco-blue/25">
            <div className="absolute top-0 right-0 bg-justco-blue text-white text-[9px] font-bold px-4 py-1 uppercase tracking-widest rounded-bl-sm">
              Flagship Brand
            </div>
            <div>
              <div className="w-12 h-12 bg-justco-blue/10 border border-justco-blue/20 rounded-full flex items-center justify-center text-justco-blue mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black mb-2 tracking-tight text-justco-blue uppercase">JustCo</h3>
              <p className="text-gray-400 text-xs font-bold tracking-wider uppercase mb-6">PREMIUM FLEXIBLE WORKSPACES</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Our core flagship brand. Highly styled, fully serviced coworking hubs, private office suites, virtual mailboxes, and enterprise custom designs. Featuring biophilic break lounges, community baristas, high-speed corporate IT infrastructure, and regular cross-border business networking.
              </p>
            </div>
            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-400 font-semibold">Available in 40+ Locations</span>
              <button
                onClick={() => setActiveTab('locations')}
                className="text-justco-blue hover:text-justco-dark font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 transition cursor-pointer"
              >
                <span>Browse spaces</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* the boring office */}
          <div className="bg-[#fcf8f2] text-neutral-800 p-8 md:p-10 rounded-custom border border-orange-200 flex flex-col justify-between hover-lift min-h-[420px]">
            <div>
              <div className="w-12 h-12 bg-orange-100 border border-orange-200 rounded-full flex items-center justify-center text-orange-600 mb-6">
                <Smile className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-tight text-orange-700 lowercase font-mono">the boring office</h3>
              <p className="text-orange-600 text-xs font-bold tracking-wider uppercase mb-6">CREATIVE PLAYGROUND FOR BUILDERS</p>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                Don't let the name fool you. It is a highly creative, quirky workspace tailored for software developers, product designers, game builders, and copywriters. Styled with industrial brutalism, writable whiteboard tables, private pod capsules, gaming corners, and bottomless custom-brewed tea.
              </p>
            </div>
            <div className="pt-6 border-t border-orange-200 flex items-center justify-between">
              <span className="text-xs text-neutral-500 font-semibold">Quirky & Creative</span>
              <button
                onClick={() => setActiveTab('book-tour')}
                className="text-orange-700 hover:text-orange-800 font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 transition cursor-pointer"
              >
                <span>Book a desk</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Concept Highlight Footer */}
        <div className="bg-gray-50 border border-gray-100 p-8 rounded-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-[#e0f6ff] text-justco-blue rounded-full">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-justco-dark">Need an enterprise bespoke workspace?</h4>
              <p className="text-sm text-gray-500 max-w-xl mt-1 leading-relaxed">
                Our custom design-and-build services allow companies to configure entire floors or buildings to match their corporate guidelines, branding, and workflows precisely.
              </p>
            </div>
          </div>
          <button
            onClick={() => setActiveTab('book-tour')}
            className="w-full md:w-auto bg-justco-dark hover:bg-justco-dark/95 text-white font-bold py-3 px-8 rounded-custom text-center uppercase text-xs tracking-wider transition cursor-pointer"
          >
            Request Custom Build
          </button>
        </div>
      </div>
    </div>
  );
}
