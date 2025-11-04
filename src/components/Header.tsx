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
    <header className="fixed top-0 left-0 right-0 z-30 px-8 py-6 bg-transparent">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <button
          onClick={() => setActiveSection('home')}
          className="text-white/90 tracking-wide hover:text-white transition-colors"
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
                    ? 'text-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
