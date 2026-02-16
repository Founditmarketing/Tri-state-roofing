import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';

export const BeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Using specific before and after images
  const beforeImage = "/tristatebeforepic.png";
  const afterImage = "/tristateafterpic.png";

  const handleMove = (event: MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let clientX;

    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as MouseEvent).clientX;
    }

    const position = ((clientX - containerRect.left) / containerRect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30 mb-6">
              <ArrowLeftRight className="w-4 h-4 mr-2" />
              <span className="text-sm font-bold uppercase tracking-wide">Transformation Gallery</span>
            </div>
            <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
              See The Difference <br/> <span className="text-secondary">Quality Makes</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We don't just patch holes; we transform the entire look and feel of your home. 
              Drag the slider to see how a new architectural shingle roof and updated siding can revitalize your property's curb appeal.
            </p>
            <ul className="space-y-4 text-gray-300">
               <li className="flex items-center">
                 <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                 Increased Property Value
               </li>
               <li className="flex items-center">
                 <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                 Enhanced Energy Efficiency
               </li>
               <li className="flex items-center">
                 <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                 Complete Weather Protection
               </li>
            </ul>
          </div>

          <div className="relative">
            <div 
              ref={containerRef}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl select-none cursor-col-resize ring-4 ring-white/10"
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            >
              {/* After Image (Full Color) */}
              <img 
                src={afterImage} 
                alt="After" 
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute top-4 right-4 bg-secondary/90 text-white px-3 py-1 rounded text-sm font-bold shadow-lg">
                AFTER
              </div>

              {/* Before Image (Revealed by clip-path) */}
              <div 
                className="absolute inset-0 w-full h-full bg-gray-200"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <img 
                  src={beforeImage} 
                  alt="Before" 
                  className="absolute inset-0 w-full h-full object-cover" 
                  draggable={false}
                />
                <div className="absolute top-4 left-4 bg-gray-800/80 text-white px-3 py-1 rounded text-sm font-bold shadow-lg">
                  BEFORE
                </div>
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-xl flex items-center justify-center">
                  <ArrowLeftRight className="w-4 h-4 text-secondary" />
                </div>
              </div>
            </div>
            
            <p className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
              <ArrowLeftRight className="w-4 h-4" /> Drag slider to compare
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
