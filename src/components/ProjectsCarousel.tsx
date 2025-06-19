
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Premium Collection",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80",
    label: "NEW"
  },
  {
    id: 2,
    title: "Essential Series",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80",
    label: "NEW"
  }
];

const ProjectsCarousel = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          Our Projects
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveProduct(index)}
              >
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <div className="absolute top-4 left-4 bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium z-10">
                    {product.label}
                  </div>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      activeProduct === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold">{product.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProduct(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeProduct === index ? 'bg-red-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
