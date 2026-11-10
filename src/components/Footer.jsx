import React from 'react';
import { Megaphone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full mt-16">
      {/* Call to action banner */}
      <div className="bg-[#2c3743] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-lg">
              <Megaphone size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-wide flex items-center gap-2">
                Get Involved with TRUSU!
              </h3>
              <p className="text-gray-300 text-sm mt-1 max-w-xl">
                Make a difference on campus and in the community! Join our volunteer team to support events, advocate for student rights, and connect with peers.
              </p>
            </div>
          </div>
          <button 
            type="button"
            className="bg-[#33b882] hover:bg-[#289b6c] text-white font-semibold px-6 py-2.5 rounded-full text-xs shadow-md transition-colors"
          >
            Volunteer Now
          </button>
        </div>
      </div>

      {/* Main footer credentials & student union info */}
      <div className="bg-[#1f2933] text-gray-400 text-xs py-8 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Thompson Rivers University Students' Union (TRUSU). Mock environment for COMP4210.</p>
          <p className="text-gray-500 text-[11px]">Authorized Academic Simulation • COMP4210 Ethical Hacking Project</p>
        </div>
      </div>
    </footer>
  );
}
