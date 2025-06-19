
import { useState, useEffect } from "react";

const caseStudies = [
  {
    id: 1,
    title: "INFORMAL MEETING OF NATO MINISTERS OF FOREIGN AFFAIRS IN OSLO, NORWAY",
    number: "03",
    tags: ["NORWAY", "B2B EVENT"],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80"
  },
  {
    id: 2,
    title: "GRAND HOTEL OSLO 150",
    number: "02",
    tags: ["INTERNATIONAL", "NORWAY", "BRAND ACTIVATION"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80"
  },
  {
    id: 3,
    title: "SWITCH - SOPRA STERIA KICK OFF 2025",
    number: "01",
    tags: ["NORWAY", "B2E EVENT"],
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80"
  }
];

const CaseStudySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentStudy = caseStudies[currentIndex];

  return (
    <section className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      {/* Background with geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-500 to-transparent opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rotate-45 transform -translate-x-48 translate-y-48"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex space-x-4">
              {currentStudy.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 border border-red-500 text-red-500 text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              {currentStudy.title}
            </h2>
            
            <button className="bg-red-500 text-white px-8 py-4 font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-105">
              READ MORE →
            </button>
          </div>

          {/* Right Content - Image and Number */}
          <div className="relative">
            <div className="absolute -top-8 -right-8 text-9xl font-bold text-red-500/20 z-0">
              {currentStudy.number}
            </div>
            <div 
              className="relative z-10 aspect-[4/3] rounded-lg overflow-hidden shadow-2xl transition-all duration-700 transform"
              key={currentStudy.id}
            >
              <img 
                src={currentStudy.image}
                alt={currentStudy.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-4 mt-12">
          {caseStudies.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-12 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-red-500' : 'bg-gray-300 dark:bg-gray-700'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
