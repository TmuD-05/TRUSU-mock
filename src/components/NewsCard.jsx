import React from 'react';
import { Calendar } from 'lucide-react';

export default function NewsCard({ article }) {
  const { title, categoryDisplay, excerpt, date, type, image, link } = article;

  return (
    <article className="bg-white rounded-none border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
      {/* Top Banner / Image */}
      <div>
        {type === 'photo' && image && (
          <div className="w-full h-44 overflow-hidden bg-gray-100">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
            />
          </div>
        )}

        {type === 'amnesty' && (
          <div className="w-full h-32 bg-[#fff200] p-4 flex items-center justify-between border-b border-gray-100">
            <div className="font-extrabold text-black text-sm tracking-tighter leading-tight font-sans">
              AMNESTY<br />INTERNATIONAL
            </div>
            {/* Candle with barbed wire icon */}
            <svg 
              className="w-12 h-12 text-black" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.8"
            >
              <path d="M12 2v3m-2-1.5l4 0M11 6h2v12h-2z" />
              <path d="M9 10l6 3M15 10l-6 3M9 14l6 3M15 14l-6 3" />
              <circle cx="12" cy="3" r="1" fill="currentColor" />
            </svg>
          </div>
        )}

        {type === 'student-caucus' && (
          <div className="w-full h-32 bg-[#fafafa] p-4 flex flex-col items-center justify-center border-b border-gray-100">
            <div className="flex items-center gap-2">
              {/* Radial dots emblem */}
              <div className="w-8 h-8 rounded-full border-2 border-dashed border-amber-500 flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              </div>
              <div className="text-left font-bold text-gray-800 text-sm leading-tight">
                Student<br /><span className="text-amber-600">Caucus</span>
              </div>
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="p-4">
          <p className="text-[11px] font-semibold text-teal-600 uppercase tracking-wide mb-1">
            {categoryDisplay}
          </p>
          <h3 className="font-bold text-sm text-gray-900 leading-snug line-clamp-2 hover:text-[#33b882] transition-colors cursor-pointer mb-2">
            {title}
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-3">
            {excerpt}
          </p>
          <a 
            href={link} 
            className="text-xs font-semibold text-teal-600 hover:text-teal-700 underline decoration-teal-600/40 underline-offset-2"
          >
            Read More
          </a>
        </div>
      </div>

      {/* Date metadata at bottom */}
      <div className="px-4 py-2.5 border-t border-gray-100 bg-gray-50/50 flex items-center gap-1.5 text-[11px] text-gray-500">
        <Calendar size={12} className="text-gray-400" />
        <span>{date}</span>
      </div>
    </article>
  );
}
