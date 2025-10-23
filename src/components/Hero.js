import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const techBadges = [
    { name: 'redis', color: 'tech-badge-redis' },
    { name: 'typescript', color: 'tech-badge-typescript' },
    { name: 'javascript', color: 'tech-badge-javascript' },
    { name: 'html', color: 'tech-badge-html' },
    { name: 'css', color: 'tech-badge-css' },
    { name: 'nodejs', color: 'tech-badge-nodejs' },
  ];

  return (
    <section className="bg-gray-50 pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary-600">AI-powered</span>
                <br />
                <span className="text-gray-900">web and mobile</span>
                <br />
                <span className="text-primary-600">in 12 weeks</span>
              </h1>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <span>Powered by</span>
                <div className="flex items-center space-x-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                  <div className="w-6 h-6 bg-red-400 rounded-full -ml-2"></div>
                  <span className="font-semibold text-gray-900 ml-2">n8n</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <span>Start Discovery</span>
              </button>
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-gray-900" />
                </div>
                <span>Portfolio Showcase</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">t</span>
                </div>
                <span className="text-sm text-gray-600">Telegram</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">W</span>
                </div>
                <span className="text-sm text-gray-600">WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Object */}
          <div className="flex justify-center lg:justify-end">
            <div className="hero-3d-object">
              <img 
                src="/images/3d-object.png" 
                alt="3D Abstract Object" 
                className="w-80 h-80 lg:w-96 lg:h-96 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center mb-8">
            <p className="text-gray-600">We use only modern technologies</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {techBadges.map((tech, index) => (
              <span key={index} className={`tech-badge ${tech.color}`}>
                #{tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;