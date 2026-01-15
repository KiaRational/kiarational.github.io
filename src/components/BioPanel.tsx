import React, { memo } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const BioPanel = memo(function BioPanel() {
  return (
    <div className="md:absolute md:top-1/2 md:-translate-y-1/2 z-20 w-full md:mt-12 py-8 md:py-0 flex items-center md:items-start h-full md:h-auto">
      <div className="max-w-7xl md:ml-auto px-4 md:pr-8 w-full">
        <div className="md:ml-auto w-full md:w-[500px]">
          {/* Frosted Glass Panel */}
          <div className="backdrop-blur-md bg-white/85 rounded-2xl shadow-2xl p-5 md:p-6 border border-white/50 w-full max-w-md md:max-w-none mx-auto md:mx-0">
            {/* Profile Section - Horizontal Layout on Desktop, Vertical on Mobile */}
            <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6 mb-4">
              <ImageWithFallback 
                src="https://raw.githubusercontent.com/KiaRational/kiarational.github.io/refs/heads/main/images/your-image.jpg" 
                alt="Kiarash Ghasemzadeh"
                className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-2xl border-2 border-gray-200 shadow-lg flex-shrink-0"
              />
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-gray-900 mb-1">
                  Kiarash Ghasemzadeh
                </h1>
                <p className="text-gray-600 mb-1 md:mb-2 text-sm md:text-base">
                  🎓 MSc ECE Student | University of Alberta
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  🔬 Vision and Learning Lab | Prof. Li Cheng
                </p>
              </div>
            </div>
            
            {/* Bio Section */}
            <div className="space-y-3">
              <h2 className="text-gray-900 text-center md:text-left">
                Bio
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                🤖 Passionate about autonomous systems, machine learning, and embodied AI. 
                My research focuses on developing intelligent robots that can navigate, 
                learn, and interact with complex real-world environments.
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1 justify-center md:justify-start">
                <span className="px-3 py-1 bg-green-600/10 text-green-700 rounded-full text-sm">
                  🤖 Robotics
                </span>
                <span className="px-3 py-1 bg-blue-600/10 text-blue-700 rounded-full text-sm">
                  🧠 AI/ML
                </span>
                <span className="px-3 py-1 bg-red-600/10 text-red-700 rounded-full text-sm">
                  👁️ Computer Vision
                </span>
              </div>
              
              {/* Quick Links */}
              <div className="flex gap-4 pt-3 border-t border-gray-200 justify-center md:justify-start text-sm md:text-base">
                <a
                  href="https://www.linkedin.com/in/kiarash-g-b1097a104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  💼 LinkedIn
                </a>
                <a
                  href="https://github.com/KiaRational"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  💻 GitHub
                </a>
                <a
                  href="https://scholar.google.com/citations?user=H2GDtjcAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  📚 Scholar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});