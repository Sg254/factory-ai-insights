import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#problem', label: 'The Problem' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex items-center justify-between h-20">
        <div className="text-2xl font-bold">FactoryAI</div>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 transform hover:scale-105">
                Start Simulation Demo
            </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-90 absolute top-20 left-0 w-full">
          <nav className="flex flex-col items-center space-y-4 py-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white text-lg hover:text-gray-300 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
             <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 transform hover:scale-105 text-lg">
                Start Simulation Demo
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;