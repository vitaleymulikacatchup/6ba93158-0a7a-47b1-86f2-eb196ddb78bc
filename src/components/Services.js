import React from 'react';
import { Globe, Package } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      icon: Globe,
      image: '/images/web-development.png'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: Package,
      image: '/images/mobile-development.png'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore our services
          </h2>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
                isEven ? '' : 'lg:grid-flow-col-dense'
              }`}>
                {/* Content */}
                <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-2'}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    {service.title.toUpperCase()}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <button className="btn-outline">
                    Learn More
                  </button>
                </div>

                {/* Image */}
                <div className={`${isEven ? '' : 'lg:col-start-1'}`}>
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-white rounded-2xl p-12 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Get the same high-quality service for a smaller task
          </h3>
          <button className="btn-primary">
            Start Small Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;