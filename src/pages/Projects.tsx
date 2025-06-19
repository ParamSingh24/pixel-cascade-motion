
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Digital Innovation Hub",
    description: "Transforming businesses through cutting-edge technology solutions",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80",
    category: "Technology"
  },
  {
    id: 2,
    title: "Sustainable Architecture",
    description: "Creating eco-friendly spaces for the future",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80",
    category: "Architecture"
  },
  {
    id: 3,
    title: "AI-Powered Analytics",
    description: "Leveraging artificial intelligence for better insights",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80",
    category: "AI/ML"
  },
  {
    id: 4,
    title: "Cloud Infrastructure",
    description: "Building scalable and secure cloud solutions",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80",
    category: "Cloud"
  },
  {
    id: 5,
    title: "Mobile Experience",
    description: "Crafting seamless mobile applications",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80",
    category: "Mobile"
  },
  {
    id: 6,
    title: "Data Visualization",
    description: "Making complex data beautiful and understandable",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80",
    category: "Data"
  }
];

const Projects = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.getAttribute('data-project-id') || '0');
            setVisibleProjects(prev => [...new Set([...prev, projectId])]);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const projectElements = document.querySelectorAll('[data-project-id]');
    projectElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Button>

          <h1 className="text-2xl font-bold">Our Projects</h1>

          <Button
            onClick={toggleDarkMode}
            variant="outline"
            size="icon"
            className="bg-white dark:bg-black border-gray-300 dark:border-gray-700"
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Our Work
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover the innovative projects that showcase our expertise and commitment to excellence
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                data-project-id={project.id}
                className={`group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-700 transform ${
                  visibleProjects.includes(project.id) 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-20 opacity-0 scale-95'
                }`}
                style={{
                  transitionDelay: `${(project.id - 1) * 100}ms`
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-red-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <button className="text-red-500 font-semibold hover:text-red-600 transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with our expertise and innovation
          </p>
          <button className="bg-red-500 text-white px-8 py-4 font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-105 rounded-lg text-lg">
            Get In Touch →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
