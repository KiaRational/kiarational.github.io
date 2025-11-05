import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BioPanel() {
  return (
    <div className="absolute right-12 top-1/2 -translate-y-1/2 z-20 w-[500px] mt-12">
      {/* Frosted Glass Panel */}
      <div className="backdrop-blur-md bg-white/85 rounded-2xl shadow-2xl p-6 border border-white/50">
        {/* Profile Section - Horizontal Layout */}
        <div className="flex items-center gap-6 mb-4">
          <ImageWithFallback 
            src="https://raw.githubusercontent.com/KiaRational/kiarational.github.io/refs/heads/main/images/your-image.jpg" 
            alt="Kiarash Ghasemzadeh"
            className="w-28 h-28 object-cover rounded-2xl border-2 border-gray-200 shadow-lg flex-shrink-0"
          />
          
          <div className="flex-1">
            <h1 className="text-gray-900 mb-1">
              Kiarash Ghasemzadeh
            </h1>
            <p className="text-gray-600 mb-2">
              🎓 MSc ECE Student | University of Alberta
            </p>
            <p className="text-gray-600">
              🔬 Vision and Learning Lab | Prof. Li Cheng
            </p>
          </div>
        </div>
        
        {/* Bio Section */}
        <div className="space-y-3">
          <h2 className="text-gray-900">
            Bio
          </h2>
          <p className="text-gray-700 leading-relaxed">
            🤖 Passionate about autonomous systems, machine learning, and embodied AI. 
            My research focuses on developing intelligent robots that can navigate, 
            learn, and interact with complex real-world environments.
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="px-3 py-1 bg-green-600/10 text-green-700 rounded-full">
              🤖 Robotics
            </span>
            <span className="px-3 py-1 bg-blue-600/10 text-blue-700 rounded-full">
              🧠 AI/ML
            </span>
            <span className="px-3 py-1 bg-red-600/10 text-red-700 rounded-full">
              👁️ Computer Vision
            </span>
          </div>
          
          {/* Quick Links */}
          <div className="flex gap-4 pt-3 border-t border-gray-200">
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
  );
}
