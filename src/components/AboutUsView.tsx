import React, { useState } from 'react';
import { LEADERS, CAREERS } from '../data';
import { Mail, Briefcase, Award, CheckCircle2, ChevronRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AboutUsView() {
  const [activeLeader, setActiveLeader] = useState<typeof LEADERS[0] | null>(null);
  const [selectedJob, setSelectedJob] = useState<typeof CAREERS[0] | null>(null);
  const [jobApplied, setJobApplied] = useState(false);
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantName, setApplicantName] = useState('');

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantEmail || !applicantName) return;
    setJobApplied(true);
    setTimeout(() => {
      setJobApplied(false);
      setSelectedJob(null);
      setApplicantEmail('');
      setApplicantName('');
    }, 3000);
  };

  return (
    <div id="about-view" className="bg-white">
      {/* Narrative Section */}
      <section className="bg-justco-dark text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-justco-blue mb-4">OUR STORY</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Redefining the Way the World Works</h2>
          <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-8">
            Founded in 2011 and headquartered in Singapore, JustCo is Asia-Pacific’s premier premium flexible workspace provider. We believe in crafting vibrant, high-productivity coworking centers where startups, medium businesses, and corporate heavyweights thrive in dynamic, fully serviced ecosystems.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
            <div>
              <p className="text-2xl md:text-4xl font-extrabold text-justco-blue">2011</p>
              <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase mt-1">Established</p>
            </div>
            <div>
              <p className="text-2xl md:text-4xl font-extrabold text-justco-blue">40+</p>
              <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase mt-1">Premium Centers</p>
            </div>
            <div>
              <p className="text-2xl md:text-4xl font-extrabold text-justco-blue">100k+</p>
              <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase mt-1">Global Members</p>
            </div>
            <div>
              <p className="text-2xl md:text-4xl font-extrabold text-justco-blue">8</p>
              <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase mt-1">Major Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-justco-blue mb-3">OUR CORE VALUE PILLARS</p>
            <h3 className="text-3xl font-bold text-justco-dark tracking-tight">How We Deliver Excellence</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-custom border border-gray-100 shadow-xs">
              <Award className="w-8 h-8 text-justco-blue mb-4" />
              <h4 className="text-lg font-bold text-justco-dark mb-2">Hospitality-First Spirit</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                We design and operate spaces with the precision of a luxury hotel. From a warm front-desk welcome to premium amenities, hospitality is in our DNA.
              </p>
            </div>
            <div className="bg-white p-8 rounded-custom border border-gray-100 shadow-xs">
              <CheckCircle2 className="w-8 h-8 text-justco-blue mb-4" />
              <h4 className="text-lg font-bold text-justco-dark mb-2">Enterprise-Grade Class</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Secure IT firewalls, high-definition teleconferencing systems, professional mail handling, and private soundproof meeting cabins build corporate confidence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-custom border border-gray-100 shadow-xs">
              <Briefcase className="w-8 h-8 text-justco-blue mb-4" />
              <h4 className="text-lg font-bold text-justco-dark mb-2">High-Engagement Ecosystems</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                We foster networks. Regular community mixers, masterclasses, and cross-border networking opportunities facilitate authentic growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Bios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-justco-blue mb-3">EXECUTIVE TEAM</p>
            <h3 className="text-3xl font-bold text-justco-dark tracking-tight">Meet Our Leadership</h3>
            <p className="text-gray-500 text-sm mt-3">
              Click on any leadership profile card to view detailed background and professional bios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERS.map((ldr, idx) => (
              <div
                id={`leader-card-${idx}`}
                key={idx}
                onClick={() => setActiveLeader(ldr)}
                className="bg-gray-50 rounded-custom border border-gray-100 overflow-hidden cursor-pointer hover-lift group"
              >
                <div className="h-72 overflow-hidden relative">
                  <img
                    alt={ldr.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={ldr.image}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                    <span className="text-xs text-white font-semibold flex items-center space-x-1">
                      <span>View Bio Profile</span>
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-justco-dark mb-1">{ldr.name}</h4>
                  <p className="text-xs font-bold text-justco-blue uppercase tracking-wider">{ldr.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Openings Board */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-justco-blue mb-3 font-sans">CAREERS AT JUSTCO</p>
            <h3 className="text-3xl font-bold text-justco-dark tracking-tight">Build the Future of Workspace with Us</h3>
            <p className="text-gray-500 text-sm mt-3">
              We are always on the lookout for bold thinkers, hospitality experts, and creative technologists.
            </p>
          </div>

          <div className="space-y-4">
            {CAREERS.map((job) => (
              <div
                id={`job-card-${job.id}`}
                key={job.id}
                className="bg-white p-6 rounded-custom border border-gray-100 shadow-xs flex flex-col sm:flex-row justify-between sm:items-center gap-4 transition hover:border-justco-blue/40"
              >
                <div>
                  <h4 className="text-lg font-bold text-justco-dark">{job.title}</h4>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-gray-500">
                    <span className="font-semibold text-justco-blue">{job.department}</span>
                    <span className="text-gray-300">|</span>
                    <span>{job.location}</span>
                    <span className="text-gray-300">|</span>
                    <span className="bg-gray-100 px-2 py-0.5 rounded-sm font-semibold">{job.type}</span>
                  </div>
                </div>
                <button
                  id={`apply-btn-${job.id}`}
                  onClick={() => setSelectedJob(job)}
                  className="bg-justco-blue hover:bg-justco-blue/90 text-white font-bold py-2 px-5 rounded-custom text-xs uppercase tracking-wider transition self-start sm:self-auto cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leader Bio Modal */}
      <AnimatePresence>
        {activeLeader && (
          <div
            id="leader-modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={() => setActiveLeader(null)}
          >
            <motion.div
              id="leader-modal-container"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-custom shadow-2xl max-w-xl w-full overflow-hidden border border-gray-100"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-56 md:h-auto overflow-hidden">
                  <img
                    alt={activeLeader.name}
                    className="w-full h-full object-cover"
                    src={activeLeader.image}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 md:p-8 md:w-2/3">
                  <h3 className="text-xl md:text-2xl font-bold text-justco-dark mb-1">{activeLeader.name}</h3>
                  <p className="text-xs font-bold text-justco-blue uppercase tracking-wider mb-4">{activeLeader.role}</p>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6">
                    {activeLeader.bio}
                  </p>
                  <button
                    onClick={() => setActiveLeader(null)}
                    className="w-full sm:w-auto bg-justco-dark hover:bg-justco-dark/95 text-white font-bold py-2 px-6 rounded-custom uppercase text-xs tracking-wider transition cursor-pointer"
                  >
                    Close Profile
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Job Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div
            id="job-modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              id="job-modal-container"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-custom shadow-2xl max-w-md w-full p-6 md:p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-justco-dark mb-1">Apply for Position</h3>
              <p className="text-xs text-justco-blue font-semibold mb-6">{selectedJob.title} — {selectedJob.location}</p>

              {jobApplied ? (
                <div id="job-applied-success" className="text-center py-8">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-4">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="font-bold text-justco-dark mb-1">Application Submitted!</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Thank you for applying. Our talent acquisition team will review your credentials and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form id="job-apply-form" onSubmit={handleApplySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      id="applicant-name-input"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-custom text-sm focus:outline-none focus:ring-1 focus:ring-justco-blue focus:border-justco-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      id="applicant-email-input"
                      type="email"
                      required
                      placeholder="jane.doe@company.com"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-custom text-sm focus:outline-none focus:ring-1 focus:ring-justco-blue focus:border-justco-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Cover Letter Summary
                    </label>
                    <textarea
                      id="applicant-cover-input"
                      rows={3}
                      placeholder="Why do you want to join JustCo? Briefly describe your hospitality or business experience..."
                      className="w-full p-3 border border-gray-200 rounded-custom text-sm focus:outline-none focus:ring-1 focus:ring-justco-blue focus:border-justco-blue resize-none"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                    <button
                      id="job-submit-btn"
                      type="submit"
                      className="flex-1 bg-justco-blue hover:bg-justco-blue/95 text-white font-bold py-3 px-6 rounded-custom uppercase text-xs tracking-wider transition cursor-pointer"
                    >
                      Submit Application
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedJob(null)}
                      className="flex-1 border border-gray-200 text-gray-500 hover:bg-gray-50 font-semibold py-3 px-6 rounded-custom uppercase text-xs tracking-wider transition cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
