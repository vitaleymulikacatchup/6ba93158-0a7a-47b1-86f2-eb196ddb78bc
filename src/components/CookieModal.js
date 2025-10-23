import React from 'react';
import { X } from 'lucide-react';

const CookieModal = ({ onClose }) => {
  const handleAccept = () => {
    // Handle cookie acceptance logic here
    onClose();
  };

  const handleDeny = () => {
    // Handle cookie denial logic here
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 cookie-modal flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          This site uses cookies
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-6">
          We and selected third parties use cookies (or similar technologies) for technical purposes, to enhance and analyze site usage, to support our marketing efforts, and for other purposes described below.
        </p>
        
        <p className="text-gray-600 leading-relaxed mb-8">
          By clicking "Accept all", you agree to the storing of cookies on your device for these purposes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={handleDeny}
            className="btn-outline flex-1"
          >
            Deny
          </button>
          <button 
            onClick={handleAccept}
            className="btn-secondary flex-1"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;