import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import { CATEGORIES, MOCK_EVENTS } from '../constants';
import { Event } from '../types';
import { MapPin, Search } from 'lucide-react';

interface HomeProps {
  onEventClick: (event: Event) => void;
}

const Home: React.FC<HomeProps> = ({ onEventClick }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Simple filtering logic
  const filteredEvents = activeCategory === 'all' 
    ? MOCK_EVENTS 
    : MOCK_EVENTS.filter(e => {
        const categoryLabel = CATEGORIES.find(c => c.id === activeCategory)?.label || '';
        return e.tags.some(t => t.includes(categoryLabel));
    });

  return (
    <div className="pb-24 min-h-screen bg-paper">
        {/* Custom Rural Header */}
        <div className="sticky top-0 z-20 bg-paper/95 backdrop-blur-sm pt-safe shadow-[0_4px_20px_-12px_rgba(0,0,0,0.1)]">
            <div className="px-5 pb-4 pt-6">
                <div className="flex justify-between items-start">
                    <div>
                        {/* The Title Block */}
                        <div className="relative inline-block group cursor-default">
                            <h1 className="font-serif text-[3.5rem] leading-none font-black text-festive tracking-tighter select-none"
                                style={{
                                    textShadow: '3px 3px 0px rgba(245, 225, 185, 0.5), 4px 4px 1px rgba(0,0,0,0.05)'
                                }}
                            >
                                泡了吗？
                            </h1>
                            {/* Decorative Ink Dot */}
                            <div className="absolute -top-1 -right-2 w-3 h-3 bg-orange-400 rounded-full opacity-60 mix-blend-multiply animate-pulse"></div>
                        </div>
                        <p className="font-serif text-sm font-bold text-earth mt-2 tracking-[0.3em] pl-1 border-t border-earth/20 inline-block pt-1">
                            赶场 · 吃席 · 凑热闹
                        </p>
                    </div>

                    {/* Location Pill - Styled like a stamped tag */}
                    <div className="flex flex-col items-end mt-2">
                        <div className="bg-[#e8e4d9] px-3 py-1.5 rounded-lg border border-[#d6d1c4] flex items-center shadow-sm active:scale-95 transition-transform">
                            <MapPin size={16} className="text-festive mr-1.5 fill-current" />
                            <span className="text-sm font-bold text-[#5c5552] font-serif tracking-wide">重庆·合川</span>
                        </div>
                    </div>
                </div>

                {/* Search Bar - Styled to blend in */}
                <div className="mt-5">
                    <div className="bg-white/60 p-3 rounded-2xl shadow-inner border border-[#e6e2d6] flex items-center transition-all focus-within:bg-white focus-within:shadow-md focus-within:border-festive/30">
                        <Search size={20} className="text-earth mr-3" />
                        <input
                            type="text"
                            placeholder="搜一下：哪点在办坝坝宴？"
                            className="bg-transparent text-sm w-full outline-none placeholder:text-earth/50 text-ink font-medium"
                        />
                    </div>
                </div>
            </div>
            
            {/* Decorative bottom border for header */}
            <div className="h-1 w-full bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] border-b border-earth/10"></div>
        </div>

        {/* Categories */}
        <div className="px-4 mt-4 mb-6 overflow-x-auto no-scrollbar flex gap-3">
            {CATEGORIES.map(cat => (
                <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all border shadow-sm ${
                        activeCategory === cat.id 
                        ? 'bg-festive text-white border-festive shadow-festive/30 transform -translate-y-0.5' 
                        : 'bg-white text-earth border-[#e6e2d6] hover:bg-[#fffdf9]'
                    }`}
                >
                    {cat.label}
                </button>
            ))}
        </div>

        {/* Event List */}
        <div className="px-4">
            <div className="flex items-center mb-4 ml-1">
                <div className="w-1 h-4 bg-festive rounded-full mr-2"></div>
                <h2 className="text-ink font-serif font-bold text-xl tracking-wide">同城热“泡”</h2>
            </div>
            
            <div className="space-y-4">
                {filteredEvents.map(event => (
                    <EventCard key={event.id} event={event} onClick={onEventClick} />
                ))}
            </div>
            
            {filteredEvents.length === 0 && (
                <div className="text-center py-16 text-earth/60">
                    <p className="font-serif text-lg">暂无此类热闹，去发一个？</p>
                </div>
            )}
        </div>
    </div>
  );
};

export default Home;