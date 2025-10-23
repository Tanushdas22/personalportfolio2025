import React from 'react';

const ReachOutButton: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToContact}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
    >
      REACH OUT →
    </button>
  );
};

export default ReachOutButton;
