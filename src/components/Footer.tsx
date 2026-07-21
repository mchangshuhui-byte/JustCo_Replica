import { Linkedin, Facebook, ArrowUp } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-surface py-16 md:py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {/* Brand Social & Apps */}
          <div className="col-span-2 lg:col-span-1">
            <h6 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">FOLLOW US</h6>
            <div className="flex space-x-4 mb-10">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-justco-dark hover:text-justco-blue transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-justco-dark hover:text-justco-blue transition">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <h6 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">DOWNLOAD JUSTCO APP</h6>
            <div className="flex flex-col space-y-4">
              <a href="#" className="inline-block hover:opacity-80 transition">
                <img
                  alt="App Store"
                  className="h-8 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt5oAffdBrOMzDmklGQz8kuWX_VDj-iNkjeoNtqvwKDmPYwvH5HuzARyp1nekUaC4eb99dYoBuKJNWwKmgS8_uNmiJyg05jrs2h9QbZ7OoYD2wWiY9O51j8omIu87AmMKVVk3E_ikK6_UF7JTnY0MJOPhuLddXpNT7JFGVSs3wr_PxaqsJ6hK9vh5KLemkCUcvyALsbDts3e7PjBk466Xc_kAbqgZNXYGPgG4iRyQvuzGXIVQaSK5xoRm4PZHldwYVqehtAfMRb5Q"
                  referrerPolicy="no-referrer"
                />
              </a>
              <a href="#" className="inline-block hover:opacity-80 transition">
                <img
                  alt="Google Play"
                  className="h-8 object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn-kctszJJzlPNm6HOfyLyaKrKDvO1RvlZlgVN2yQbyZ56DmOciykrIZJ0k3_OgkYF3M2-5TNAASOWDo2XRD48ePw2vOd3YaM0Ict6okl7tIPKqoZ89cUCoqv162DRwe92onTKDh7fqfe92yb8WpptrweqN7G94i2Lwr0Itd9hqS9nhHy383atfzju_Ka8jt23o6O6D6q8WgWSmMofNqaZ9058ju3Uokv6S70hCLJWh6bWqbLBGP4teSu_0AltLZCRtbFX4BFP-iw"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h6 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">OUR BRANDS</h6>
            <ul className="text-sm space-y-4 text-justco-dark">
              <li>
                <button onClick={() => setActiveTab('brands')} className="hover:text-justco-blue cursor-pointer transition text-left font-semibold">
                  THE COLLECTIVE
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('brands')} className="hover:text-justco-blue cursor-pointer transition text-left font-semibold">
                  JustCo
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('brands')} className="hover:text-justco-blue cursor-pointer transition text-left font-semibold">
                  the boring office
                </button>
              </li>
              <li className="pt-4 font-bold border-t border-gray-200/50">Destination</li>
              <li>
                <button onClick={() => setActiveTab('brands')} className="hover:text-justco-blue cursor-pointer transition text-left">
                  JustCo Place
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">LOCATIONS</h6>
            <ul className="text-sm space-y-4 text-justco-dark">
              <li>
                <button onClick={() => setActiveTab('locations')} className="hover:text-justco-blue cursor-pointer transition text-left">
                  Australia
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('locations')} className="hover:text-justco-blue cursor-pointer transition text-left">
                  India
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('locations')} className="hover:text-justco-blue cursor-pointer transition text-left">
                  Japan
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('locations')} className="hover:text-justco-blue cursor-pointer transition text-left">
                  Korea
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('locations')} className="hover:text-justco-blue cursor-pointer transition text-left">
                  Malaysia
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('locations')} className="hover:text-justco-blue cursor-pointer transition text-left">
                  Singapore
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">SOLUTIONS</h6>
            <ul className="text-sm space-y-4 text-justco-dark">
              <li>
                <button onClick={() => setActiveTab('solutions')} className="hover:text-justco-blue cursor-pointer transition text-left">
                  Private Offices
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('solutions')} className="hover:text-justco-blue cursor-pointer transition text-left">
                  Coworking
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('solutions')} className="hover:text-justco-blue cursor-pointer transition text-left">
                  Meeting Rooms
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('solutions')} className="hover:text-justco-blue cursor-pointer transition text-left">
                  Virtual Offices
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('solutions')} className="hover:text-justco-blue cursor-pointer transition text-left text-justco-blue font-semibold">
                  SuperPass
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">COMPANY</h6>
            <ul className="text-sm space-y-4 text-justco-dark">
              <li>
                <button onClick={() => setActiveTab('about')} className="hover:text-justco-blue cursor-pointer transition text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('about')} className="hover:text-justco-blue cursor-pointer transition text-left">
                  Our Leadership
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('about')} className="hover:text-justco-blue cursor-pointer transition text-left">
                  Careers
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">POPULAR LINKS</h6>
            <ul className="text-sm space-y-4 text-justco-dark">
              <li>
                <button onClick={() => setActiveTab('book-tour')} className="hover:text-justco-blue cursor-pointer transition text-left font-bold text-justco-blue">
                  Book a Tour
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('about')} className="hover:text-justco-blue cursor-pointer transition text-left">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2026 JustCo. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 items-center">
            <a href="#" className="hover:text-justco-dark transition">Terms of Service</a>
            <a href="#" className="hover:text-justco-dark transition">Privacy Policy</a>
            <button
              onClick={scrollToTop}
              className="p-2 bg-gray-200 hover:bg-justco-blue hover:text-white transition rounded-full text-gray-600 flex items-center justify-center cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
