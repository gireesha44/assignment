import React, { useState } from 'react';
import { ChevronDown, MessageCircle, ArrowRight, Search } from 'lucide-react';
import { FAQS } from '../data/faqs';

interface FAQSectionProps {
  onAdvisorClick: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onAdvisorClick }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Curriculum', 'Projects', 'Admissions', 'General'];

  const filteredFaqs = FAQS.filter((f) => {
    const matchCat = activeCategory === 'All' || f.category === activeCategory;
    const matchSearch = 
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-white border-t border-slate-200/80 relative scroll-mt-20 w-full">
      <div className="site-container text-left">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-lavender text-violet text-xs font-mono font-bold uppercase tracking-wider mb-3">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-midnight tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            Everything you need to know about our practical curriculum, project deliverables, and learning model.
          </p>
        </div>

        {/* Search & Category Pills */}
        <div className="max-w-4xl mx-auto space-y-4 mb-10">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. beginner, projects, tools)..."
              className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm rounded-xl bg-offwhite border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet/30 focus:border-violet text-midnight placeholder:text-slate-400"
            />
          </div>

          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-midnight text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Responsive Accordion Grid on Wide Screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-6 items-start">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-offwhite border-violet/40 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-midnight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-transform duration-200 shrink-0 ${
                      isOpen ? 'bg-violet text-white rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    <div className="mt-3.5 flex items-center gap-2 text-xs font-mono text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet" />
                      <span>Category: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-lavender/50 border border-violet/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-violet text-white flex items-center justify-center shrink-0 shadow-sm">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-midnight">Still have specific questions?</h4>
              <p className="text-xs sm:text-sm text-slate-600">Our learning advisors are happy to walk through syllabus options with you.</p>
            </div>
          </div>
          <button
            onClick={onAdvisorClick}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-midnight hover:bg-midnight-800 text-white text-xs sm:text-sm font-bold transition-colors shrink-0 flex items-center justify-center gap-2"
          >
            <span>Talk to Advisor</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
