import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Search, 
  Calendar, 
  Newspaper,
  MapPin
} from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const isNewsActive = location.pathname === '/news';
  const isHomeActive = location.pathname === '/';

  return (
    <header className="w-full">
      {/* Top micro-bar */}
      <div className="bg-[#1f2933] text-gray-300 text-xs py-1.5 px-6 sm:px-12 flex justify-end items-center gap-4 border-b border-gray-700/50">
        <span className="font-semibold tracking-wider text-[11px] text-gray-300 flex items-center gap-1.5 cursor-default">
          <MapPin size={12} className="text-gray-400" /> CONTACT
        </span>
        <a href="tel:2508285289" className="hover:text-white transition-colors" title="Phone">
          <Phone size={13} />
        </a>
        <a href="mailto:info@trusu.ca" className="hover:text-white transition-colors" title="Email">
          <Mail size={13} />
        </a>
        <a href="#facebook" className="hover:text-white transition-colors" title="Facebook">
          <Facebook size={13} />
        </a>
        <a href="#instagram" className="hover:text-white transition-colors" title="Instagram">
          <Instagram size={13} />
        </a>
        <a href="#twitter" className="hover:text-white transition-colors" title="X">
          <span className="font-bold text-xs">𝕏</span>
        </a>
      </div>

      {/* Main Branding Header with Green & Charcoal Split */}
      <div className="relative bg-[#3b4854] overflow-hidden">
        {/* Diagonal Teal Green brand slice */}
        <div 
          className="absolute inset-y-0 left-0 w-2/5 sm:w-1/3 bg-[#33b882] z-0"
          style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="text-white flex items-center gap-2">
              <svg 
                className="w-10 h-10 fill-current text-white drop-shadow-sm" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 9l10 7 10-7-10-7zm0 10.5L4.5 7.5 12 4l7.5 3.5L12 12.5zM2 12l10 7 10-7-2-1.4-8 5.6-8-5.6L2 12zm0 4l10 7 10-7-2-1.4-8 5.6-8-5.6L2 16z"/>
              </svg>
              <div>
                <span className="text-3xl font-extrabold tracking-wider text-white">TRUSU</span>
                <p className="text-[9px] uppercase tracking-wider text-white/90 font-medium">Thompson Rivers University Students' Union</p>
              </div>
            </div>
          </Link>

          {/* Quick Action Pills */}
          <div className="flex items-center gap-3">
            <button 
              type="button"
              className="bg-[#e4ebf0] hover:bg-white text-gray-800 text-xs font-semibold px-4 py-2 rounded-full shadow-sm flex items-center gap-2 transition-all cursor-default"
            >
              <Calendar size={14} className="text-gray-600" />
              <span>Events Calendar</span>
            </button>
            <Link 
              to="/news"
              className="bg-[#e4ebf0] hover:bg-white text-gray-800 text-xs font-semibold px-4 py-2 rounded-full shadow-sm flex items-center gap-2 transition-all"
            >
              <Newspaper size={14} className="text-gray-600" />
              <span>Latest News</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Menu */}
      <nav className="bg-[#2c3743] border-t border-[#3b4854] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center text-xs font-medium">
          <div className="flex items-center overflow-x-auto scrollbar-none">
            {/* Clickable: Home */}
            <Link 
              to="/" 
              className={`px-4 py-2.5 transition-colors whitespace-nowrap ${
                isHomeActive 
                  ? 'bg-white text-gray-900 font-bold' 
                  : 'hover:text-emerald-400 text-gray-200'
              }`}
            >
              Home
            </Link>

            {/* Inactive links as per specifications */}
            <span className="px-4 py-2.5 text-gray-400 cursor-not-allowed whitespace-nowrap opacity-80" title="Link disabled for mock">
              About
            </span>
            <span className="px-4 py-2.5 text-gray-400 cursor-not-allowed whitespace-nowrap opacity-80" title="Link disabled for mock">
              Advocacy
            </span>
            <span className="px-4 py-2.5 text-gray-400 cursor-not-allowed whitespace-nowrap opacity-80" title="Link disabled for mock">
              Campus Life
            </span>
            <span className="px-4 py-2.5 text-gray-400 cursor-not-allowed whitespace-nowrap opacity-80" title="Link disabled for mock">
              Services
            </span>
            <span className="px-4 py-2.5 text-gray-400 cursor-not-allowed whitespace-nowrap opacity-80" title="Club form target in project scope">
              Clubs
            </span>
            <span className="px-4 py-2.5 text-gray-400 cursor-not-allowed whitespace-nowrap opacity-80" title="Link disabled for mock">
              Calendar
            </span>

            {/* Clickable: News */}
            <Link 
              to="/news" 
              className={`px-4 py-2.5 transition-colors whitespace-nowrap ${
                isNewsActive 
                  ? 'bg-white text-gray-900 font-bold' 
                  : 'hover:text-emerald-400 text-gray-200'
              }`}
            >
              News
            </Link>
          </div>

          <div className="px-3 py-2 text-emerald-400 hover:text-emerald-300 cursor-pointer">
            <Search size={15} />
          </div>
        </div>
      </nav>
    </header>
  );
}
