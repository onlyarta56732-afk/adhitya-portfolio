import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darker py-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Muhammad Adhitya Ramadhani. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs mt-2">
          Designed & Developed with React, Tailwind & Passion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;