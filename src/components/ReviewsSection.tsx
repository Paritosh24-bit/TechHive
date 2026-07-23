import React, { useRef } from 'react';
import { LucideIcon } from './LucideIcon';
import { AnimatedHeading } from './AnimatedHeading';

interface ReviewCardProps {
  avatarUrl: string;
  name: string;
  specialty: string;
  quote: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ avatarUrl, name, specialty, quote }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between min-h-[340px] shadow-sm hover:shadow-lg transition-all duration-300 transform scroll-snap-align-start shrink-0 w-[290px] sm:w-[340px]">
      <div className="space-y-4">
        {/* Avatar Header row */}
        <div className="flex items-center space-x-3.5 text-left">
          <div className="w-11 h-11 rounded-full overflow-hidden border border-slate-200 shrink-0 bg-slate-50">
            <img 
              src={avatarUrl} 
              alt={name} 
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-sans font-black text-slate-900 text-sm leading-tight uppercase">
              {name}
            </h4>
            <span className="text-[10px] text-slate-400 font-sans tracking-tight font-bold uppercase mt-0.5 block">
              {specialty}
            </span>
          </div>
        </div>

        {/* Narrative Quote */}
        <p className="font-sans text-slate-600 text-xs sm:text-[13px] leading-relaxed italic text-left">
          "{quote}"
        </p>
      </div>

      {/* Gold Rating Stars on bottom-right matching screenshot */}
      <div className="flex justify-end items-center text-amber-500 font-bold text-xs space-x-0.5 mt-4">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
    </div>
  );
};

export const ReviewsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      name: "Kirubavathi",
      specialty: "Healthcare",
      quote: "My experience with TechHive Global, guided by Manjula from HR, is that I am an experienced AR caller. Recently, I got an offer from Ventra Healthcare for the TechHive consultant guidance. The HR department is friendly; you can talk freely without hesitation. Thank you so much for your help for my career."
    },
    {
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
      name: "Kiran Sunny",
      specialty: "Finance Manager",
      quote: "I must thank TechHive Global and Pavithra for helping me secure the job in one of the top financial businesses in Bangalore. Pavithra had helped and guided me throughout the selection and interview process and was very genuine and supportive. She often connects and provides updates throughout the process."
    },
    {
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      name: "Rajesh Gajendran",
      specialty: "Cyber Security",
      quote: "Excellent in coordinating with candidates and very kind as well, Gowsalya was very supportive during the interview process and till onboarding."
    },
    {
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      name: "Dileep Dill",
      specialty: "Graphic Designer",
      quote: "Thank you for helping me get a job at a top company. I want to thank Ilakkiya Rajendran for helping me get a job and for supporting me until I joined the company."
    },
    {
      avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
      name: "Gokul Shankar",
      specialty: "Manufacturing",
      quote: "I have been placed in a very good leading manufacturing company by TechHive Global Consulting. Thank you you for your great support, Esther mam. It means a lot to me. Thank you very much!!"
    },
    {
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      name: "Amit Rao",
      specialty: "Banking",
      quote: "I would like to thank TechHive Global Consulting (and especially Thanuja) for helping me in landing a job at a reputed bank. The process was smooth and hassle-free. Very professional, and I recommend it."
    }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 360;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="reviews" className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-150 overflow-hidden text-center">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Centered Heading exactly as in Image 4 */}
        <div className="max-w-2xl mx-auto flex flex-col items-center">
            <AnimatedHeading
              eyebrow="INDIVIDUAL SUCCESS PORTFOLIOS"
              title="REVIEWS AND RATINGS"
            />
          </div>

        {/* Sliding row of cards container with snap points */}
        <div className="relative">
          
          {/* Navigation sliders hooks */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10 hidden md:block">
            <button
              onClick={() => handleScroll('left')}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-cyan-600 shadow-md hover:shadow-lg transition-transform hover:scale-105 cursor-pointer focus:outline-none"
              aria-label="Scroll left"
            >
              <LucideIcon name="ChevronLeft" className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10 hidden md:block">
            <button
              onClick={() => handleScroll('right')}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-cyan-600 shadow-md hover:shadow-lg transition-transform hover:scale-105 cursor-pointer focus:outline-none"
              aria-label="Scroll right"
            >
              <LucideIcon name="ChevronRight" className="w-5 h-5" />
            </button>
          </div>

          {/* Scrolling Grid block container */}
          <div 
            ref={scrollRef}
            className="flex items-stretch overflow-x-auto gap-6 pb-8 px-2 scroll-smooth scrollbar-hide"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {reviews.map((rev, idx) => (
              <ReviewCard key={idx} {...rev} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;
