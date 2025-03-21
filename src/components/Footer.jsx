import { Facebook, Instagram, Mail, Phone, MapPin, ArrowRight, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white font-poppins">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:max-w-md">
              <h3 className="text-xl font-semibold mb-2">Blijf op de hoogte</h3>
              <p className="text-gray-400 text-sm">Ontvang updates over onze diensten en beveiligingtips.</p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-3 w-full">
                <input 
                  type="email" 
                  placeholder="E-mailadres" 
                  className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full sm:w-64"
                  aria-label="E-mailadres voor nieuwsbrief"
                />
                <button 
                  type="submit" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-4 py-2 rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <span>Aanmelden</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="space-y-6">
            <img
              src="https://beesafesecurity.nl/wp-content/uploads/2024/10/cropped-logo-black-1.png"
              alt="BeeSafe Security"
              className="h-16"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              BeeSafe Security levert representatieve beveiligingsoplossingen met een gastvrije aanpak voor bedrijven en evenementen in heel Nederland.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Snelle Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-yellow-500"></span>
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#home" className="hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#diensten" className="hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  Diensten
                </a>
              </li>
              <li>
                <a href="#over-ons" className="hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  Over ons
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  Vacatures
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Diensten
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-yellow-500"></span>
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#object" className="hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  Objectbeveiliging
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  Evenementenbeveiliging
                </a>
              </li>
              <li>
                <a href="#hospitality" className="hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  Hospitality Security
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              Contact
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-yellow-500"></span>
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>
                  <a href="tel:+31612345678" className="hover:text-yellow-400 transition-colors duration-300">
                    +31 6 12345678
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>
                  <a href="mailto:info@beesafesecurity.nl" className="hover:text-yellow-400 transition-colors duration-300">
                    info@beesafesecurity.nl
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>
                  Veenweg 46A<br />
                  3881 NK Putten
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                <span>
                  Ma - Vr: 9:00 - 17:00<br />
                  24/7 bereikbaar voor noodgevallen
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar with multiple sections */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} BeeSafe Security. Alle rechten voorbehouden.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <a href="/privacy" className="hover:text-yellow-400 transition-colors duration-300">Privacy Policy</a>
              <span>|</span>
              <a href="/terms" className="hover:text-yellow-400 transition-colors duration-300">Algemene Voorwaarden</a>
              <span>|</span>
              <a href="/cookies" className="hover:text-yellow-400 transition-colors duration-300">Cookie Beleid</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;