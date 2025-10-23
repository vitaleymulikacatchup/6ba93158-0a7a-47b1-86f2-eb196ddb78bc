import React from 'react';
import { ExternalLink } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Dios',
      description: 'A comprehensive digital platform that revolutionized the way businesses manage their operations.',
      metrics: {
        revenue: '$12,500',
        users: '1500+'
      },
      image: '/images/dios-case-study.png',
      tags: ['Web Development', 'Mobile App', 'UI/UX Design']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study-card rounded-3xl p-8 lg:p-12 text-white">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <h3 className="text-4xl lg:text-5xl font-bold">
                    {study.title}
                  </h3>
                  <p className="text-lg text-blue-100 leading-relaxed">
                    {study.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="flex space-x-8">
                    <div>
                      <div className="text-2xl font-bold">{study.metrics.revenue}</div>
                      <div className="text-blue-200 text-sm">Monthly Revenue</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{study.metrics.users}</div>
                      <div className="text-blue-200 text-sm">Active Users</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                    <span>View Case Study</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

                {/* Image */}
                <div className="relative">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;