import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function ContactSection() {
  return (
    <div className="space-y-6 md:space-y-8 max-w-3xl mx-auto">
      <div className="backdrop-blur-md bg-white/90 rounded-2xl p-5 md:p-8 border border-white/50 shadow-xl">
        <h1 className="text-gray-900 mb-3 md:mb-4">Contact</h1>
        <p className="text-gray-700 text-sm md:text-base">
          I'm always interested in discussing research collaborations, new projects, 
          or opportunities in robotics and AI.
        </p>
      </div>

      <Card className="backdrop-blur-md bg-white/90 border-white/50">
        <CardHeader className="p-4 md:p-6">
          <CardTitle className="text-gray-900 text-lg md:text-xl">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6 pt-0">
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="text-xl md:text-2xl">💼</div>
              <div className="min-w-0 flex-1">
                <h3 className="text-gray-900 mb-1 text-sm md:text-base">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/kiarash-g-b1097a104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors text-xs md:text-sm break-all"
                >
                  linkedin.com/in/kiarash-g-b1097a104
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="text-xl md:text-2xl">🔗</div>
              <div className="min-w-0 flex-1">
                <h3 className="text-gray-900 mb-1 text-sm md:text-base">GitHub</h3>
                <a
                  href="https://github.com/KiaRational"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors text-xs md:text-sm break-all"
                >
                  github.com/KiaRational
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="text-xl md:text-2xl">🎓</div>
              <div className="min-w-0 flex-1">
                <h3 className="text-gray-900 mb-1 text-sm md:text-base">Google Scholar</h3>
                <a
                  href="https://scholar.google.com/citations?user=H2GDtjcAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors text-xs md:text-sm"
                >
                  View Publications
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="text-xl md:text-2xl">🌐</div>
              <div className="min-w-0 flex-1">
                <h3 className="text-gray-900 mb-1 text-sm md:text-base">Website</h3>
                <a
                  href="https://kiarational.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors text-xs md:text-sm break-all"
                >
                  kiarational.github.io
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="backdrop-blur-md bg-white/90 rounded-2xl p-4 md:p-6 border border-white/50 text-center">
        <p className="text-gray-600 text-sm md:text-base">
          Feel free to reach out for collaborations, questions, or just to connect!
        </p>
      </div>
    </div>
  );
}