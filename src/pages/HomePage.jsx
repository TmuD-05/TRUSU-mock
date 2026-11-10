import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, ShieldAlert, ArrowRight, Users, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#2c3743] via-[#3b4854] to-[#2c3743] text-white py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-6">
              <Sparkles size={13} /> TRUSU Portal Mock
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">
              Welcome to the <span className="text-[#33b882]">TRUSU</span> Mock Platform
            </h1>
            <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-lg mb-8 leading-relaxed">
              This mock environment models the Thompson Rivers University Students' Union web portal for the COMP4210 Ethical Hacking project.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/news"
                className="bg-[#33b882] hover:bg-[#289b6c] text-white font-semibold px-6 py-3 rounded-full text-sm shadow-lg flex items-center gap-2 transition-all hover:scale-105"
              >
                <Newspaper size={16} />
                <span>Explore the News Page</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Informational Cards */}
        <section className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Active Working Module */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <Newspaper size={20} />
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">
                  TRUSU News Portal (Active)
                </h2>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Fully interactive mock of <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-800">trusu.ca/news/</code> with category filters, dynamic card listings, and responsive layout matching TRUSU branding.
                </p>
              </div>
              <Link 
                to="/news"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700"
              >
                Go to News Page <ArrowRight size={14} />
              </Link>
            </div>

            {/* Pentest Scope Context */}
            <div className="bg-white p-6 rounded-lg border border-amber-200 bg-amber-50/20 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                  <ShieldAlert size={20} />
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">
                  COMP4210 Pentest Scope
                </h2>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Testing focus: Unverified sender fields in the TRUSU Club Contact form (<code className="bg-amber-100/70 px-1 py-0.5 rounded text-amber-900">Send an Email</code>). Allows sender spoofing without authentication. Target for phase 2 simulation.
                </p>
              </div>
              <div className="text-xs font-semibold text-amber-700 flex items-center gap-1.5">
                <Users size={14} /> Target: TRUSU Cyber Security Club
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
