import React, { useState, memo, useCallback } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header = memo(function Header({
  activeSection,
  setActiveSection,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Education", id: "education" },
    { label: "Research", id: "research" },
    { label: "Publications", id: "publications" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = useCallback(
    (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      setActiveSection(id);
      setIsOpen(false);
    },
    [setActiveSection],
  );

  return (
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur-md bg-white/80 border-b border-gray-200/50 shadow-sm">
      {/* 🔑 CHANGE IS HERE */}
      <nav className="w-full px-6 sm:px-12 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavClick("home")}
            className="text-gray-900 transition-colors hover:text-gray-700 text-sm sm:text-base"
          >
            Kiarash Ghasemzadeh
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`transition-colors duration-200 ${
                    activeSection === link.id
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="text-gray-900 p-2">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-left transition-colors duration-200 ${
                      activeSection === link.id
                        ? "text-gray-900"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
});