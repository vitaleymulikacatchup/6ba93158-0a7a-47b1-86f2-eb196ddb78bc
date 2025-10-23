import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="contact-gradient rounded-3xl p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              How can we help? Let's talk
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Ready to start your next project? Get in touch with our team and let's discuss how we can bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-blue-100">
                <Mail className="w-5 h-5" />
                <span>Feel free to drop us a note:</span>
              </div>
              <a 
                href="mailto:contact@sargas.io" 
                className="text-white font-semibold hover:text-blue-200 transition-colors duration-200"
              >
                contact@sargas.io
              </a>
            </div>
            
            <div className="mt-8">
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-8 py-4 rounded-lg transition-colors duration-200">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;