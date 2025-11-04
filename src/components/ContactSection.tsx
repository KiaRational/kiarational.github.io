import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function ContactSection() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div className="backdrop-blur-md bg-white/90 rounded-2xl p-8 border border-white/50 shadow-xl">
        <h1 className="text-gray-900 mb-4">Contact</h1>
        <p className="text-gray-700">
          I'm always interested in discussing research collaborations, new projects, 
          or opportunities in robotics and AI.
        </p>
      </div>

      <Card className="backdrop-blur-md bg-white/90 border-white/50">
        <CardHeader>
          <CardTitle className="text-gray-900">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="text-2xl">💼</div>
              <div>
                <h3 className="text-gray-900 mb-1">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/kiarash-g-b1097a104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  linkedin.com/in/kiarash-g-b1097a104
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">🔗</div>
              <div>
                <h3 className="text-gray-900 mb-1">GitHub</h3>
                <a
                  href="https://github.com/KiaRational"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  github.com/KiaRational
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">🎓</div>
              <div>
                <h3 className="text-gray-900 mb-1">Google Scholar</h3>
                <a
                  href="https://scholar.google.com/citations?user=H2GDtjcAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Publications
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">🌐</div>
              <div>
                <h3 className="text-gray-900 mb-1">Website</h3>
                <a
                  href="https://kiarational.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  kiarational.github.io
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Send Message
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="backdrop-blur-md bg-white/90 rounded-2xl p-6 border border-white/50 text-center">
        <p className="text-gray-600">
          Feel free to reach out for collaborations, questions, or just to connect!
        </p>
      </div>
    </div>
  );
}
