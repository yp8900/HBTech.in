import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Gallery3DCarouselProps {
  images: string[];
  autoRotate?: boolean;
  rotationSpeed?: number;
}

export default function Gallery3DCarousel({ 
  images, 
  autoRotate = true,
  rotationSpeed = 4000 
}: Gallery3DCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!autoRotate || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, rotationSpeed);

    return () => clearInterval(interval);
  }, [autoRotate, isHovered, images.length, rotationSpeed]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-12">
      <div 
        className="relative h-[400px] md:h-[500px] perspective-1000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full h-full">
          {images.map((image, index) => {
            const position = (index - currentIndex + images.length) % images.length;
            const isActive = position === 0;
            
            let transform = '';
            let zIndex = 0;
            let opacity = 0;
            let scale = 0.6;

            if (position === 0) {
              // Center - Active image
              transform = 'translateX(0%) translateZ(0px) rotateY(0deg)';
              zIndex = 30;
              opacity = 1;
              scale = 1;
            } else if (position === 1) {
              // Right
              transform = 'translateX(70%) translateZ(-200px) rotateY(-35deg)';
              zIndex = 20;
              opacity = 0.7;
              scale = 0.75;
            } else if (position === images.length - 1) {
              // Left
              transform = 'translateX(-70%) translateZ(-200px) rotateY(35deg)';
              zIndex = 20;
              opacity = 0.7;
              scale = 0.75;
            } else if (position === 2) {
              // Far right
              transform = 'translateX(90%) translateZ(-350px) rotateY(-45deg)';
              zIndex = 10;
              opacity = 0.4;
              scale = 0.6;
            } else if (position === images.length - 2) {
              // Far left
              transform = 'translateX(-90%) translateZ(-350px) rotateY(45deg)';
              zIndex = 10;
              opacity = 0.4;
              scale = 0.6;
            } else {
              // Hidden
              transform = 'translateX(0%) translateZ(-500px)';
              zIndex = 0;
              opacity = 0;
              scale = 0.5;
            }

            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out cursor-pointer"
                style={{
                  transform: `translate(-50%, -50%) ${transform} scale(${scale})`,
                  zIndex,
                  opacity,
                  width: '70%',
                  maxWidth: '600px',
                }}
                onClick={() => !isActive && goToSlide(index)}
              >
                <div className="relative rounded-lg overflow-hidden shadow-2xl bg-white">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-[300px] md:h-[400px] object-cover"
                    loading="lazy"
                  />
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white font-medium text-center">
                        Project Photo {currentIndex + 1} of {images.length}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all hover:scale-110 z-40"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all hover:scale-110 z-40"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-blue-600 w-8'
                : 'bg-gray-300 hover:bg-gray-400 w-3'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
