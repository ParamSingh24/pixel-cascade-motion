
import { useState, useEffect } from "react";

const services = [
  { id: 1, name: "BILLING", icon: "💳", description: "Comprehensive billing solutions" },
  { id: 2, name: "CHARGING", icon: "🔋", description: "Advanced charging infrastructure" },
  { id: 3, name: "CATALOG", icon: "📚", description: "Product catalog management" },
  { id: 4, name: "EVENTS", icon: "🎯", description: "Event management system" }
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveService((current) => (current + 1) % services.length);
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
            [ EFFICIENCY, SCALABILITY, AND AGILITY ]
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Unparalleled
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold">
            BSS/OSS <span className="italic">Capabilities</span>
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`p-6 rounded-lg transition-all duration-300 cursor-pointer ${
                activeService === index
                  ? 'bg-white dark:bg-gray-700 shadow-lg scale-105'
                  : 'bg-white/50 dark:bg-gray-700/50 hover:bg-white dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h4 className="font-bold text-lg mb-2">{service.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Progress Section */}
        <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-2xl font-bold">Real-Time Convergent</h4>
            <div className="w-12 h-12 bg-black dark:bg-white rounded-lg flex items-center justify-center">
              <span className="text-white dark:text-black font-bold">EMS</span>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-4">
            <div 
              className="bg-red-500 h-2 rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400">
            Currently loading: <span className="font-semibold text-red-500">{services[activeService].name}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
