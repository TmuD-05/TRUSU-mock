import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NEWS_CATEGORIES, NEWS_ARTICLES } from '../data/newsData';
import NewsCard from '../components/NewsCard';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredArticles = selectedCategory 
    ? NEWS_ARTICLES.filter(item => item.categories.includes(selectedCategory))
    : NEWS_ARTICLES;

  const displayedArticles = filteredArticles.slice(0, visibleCount);

  const handleToggleCategory = (category) => {
    setSelectedCategory(prev => prev === category ? null : category);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        {/* News Hero Banner (matches TRUSU screenshot dark slate header) */}
        <section className="bg-[#3b4854] text-white py-12 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="text-xs text-gray-300 mb-6 flex items-center gap-1.5">
              <Link to="/" className="text-emerald-400 hover:underline">
                Home
              </Link>
              <span className="text-gray-400">»</span>
              <span className="text-gray-200">News</span>
            </div>

            {/* Page Heading */}
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              News
            </h1>

            {/* Subtitle / Intro text */}
            <p className="max-w-3xl text-sm md:text-base text-gray-300 leading-relaxed">
              Stay up to date with the latest news, announcements, and important updates from TRUSU and the campus community. From student initiatives and advocacy efforts to event highlights and policy changes, explore what's happening at TRU.
            </p>
          </div>
        </section>

        {/* Filter Pills */}
        <section className="bg-[#2c3743] py-3.5 px-6 border-t border-gray-600/40">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory(null)}
              className={`text-xs px-3 py-1 rounded transition-colors ${
                selectedCategory === null 
                  ? 'bg-emerald-500 text-white font-bold' 
                  : 'bg-transparent text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              All
            </button>
            {NEWS_CATEGORIES.map(category => (
              <button
                key={category}
                type="button"
                onClick={() => handleToggleCategory(category)}
                className={`text-xs px-3 py-1 rounded transition-colors ${
                  selectedCategory === category 
                    ? 'bg-emerald-500 text-white font-bold' 
                    : 'bg-transparent text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Main Content: News Cards Grid */}
        <main className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedArticles.map(article => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredArticles.length && (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={handleLoadMore}
                className="bg-[#33b882] hover:bg-[#289b6c] text-white text-xs font-semibold px-8 py-2.5 rounded-full shadow-sm hover:shadow transition-all"
              >
                Load More
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
