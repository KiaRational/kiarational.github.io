import React from 'react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Header({ activeSection, setActiveSection }: HeaderProps) {
  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Research', id: 'research' },
    { label: 'Publications', id: 'publications' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur-md bg-white/80 border-b border-gray-200/50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setActiveSection('home')}
            className="text-gray-900 transition-colors hover:text-gray-700"
          >
            Kiarash Ghasemzadeh
          </button>
          
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => setActiveSection(link.id)}
                  className={`transition-colors duration-200 ${
                    activeSection === link.id
                      ? 'text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
