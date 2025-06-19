
import { useState } from "react";

const clients = [
  ["ramp", "OpenAI", "scale"],
  ["BOOM", "Cash App", "Vercel"],
  ["perplexity", "SUPERCELL", "monzo"],
  ["Raycast", "Retool", "MERCURY"]
];

const ClientShowcase = () => {
  const [showCustomers, setShowCustomers] = useState(false);

  return (
    <section className="py-20 bg-black dark:bg-white text-white dark:text-black transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div 
          className="relative"
          onMouseEnter={() => setShowCustomers(true)}
          onMouseLeave={() => setShowCustomers(false)}
        >
          {/* Client Grid */}
          <div className={`grid grid-cols-3 gap-8 transition-all duration-500 ${showCustomers ? 'blur-sm opacity-30' : ''}`}>
            {clients.map((row, rowIndex) => (
              <div key={rowIndex} className="col-span-3 grid grid-cols-3 gap-8">
                {row.map((client, clientIndex) => (
                  <div 
                    key={clientIndex}
                    className="h-24 flex items-center justify-center text-2xl font-semibold hover:text-red-500 transition-colors duration-300"
                  >
                    {client}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Overlay Button */}
          {showCustomers && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                Meet our customers →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
