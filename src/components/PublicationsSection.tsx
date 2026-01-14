import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  links?: {
    paper?: string;
    code?: string;
    video?: string;
  };
  tags?: string[];
}

export function PublicationsSection() {
  const publications: Publication[] = [
    {
      title: "Technical Report of Mobile Manipulator Robot for Industrial Environments",
      authors: "Erfan Amoozad Khalili, Kiarash Ghasemzadeh, Hossein Gohari, Mohammadreza Jafari, Matin Jamshidi, Mahdi Khaksar, AmirReza AkramiFard, Mana Hatamzadeh, Saba Sadeghi, Mohammad Hossein Moaiyeri",
      venue: "arXiv preprint",
      year: "2024",
      links: {
        paper: "https://doi.org/10.48550/arXiv.2409.06693",
      },
      tags: ["Robotics", "Mobile Manipulation"],
    },
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="backdrop-blur-md bg-white/90 rounded-2xl p-5 md:p-8 border border-white/50 shadow-xl">
        <h1 className="text-gray-900 mb-3 md:mb-4">Publications</h1>
        <p className="text-gray-700 text-sm md:text-base">
          Research publications in robotics, artificial intelligence, and autonomous systems.
        </p>
      </div>

      <div className="space-y-4 md:space-y-6">
        {publications.map((pub, index) => (
          <Card key={index} className="backdrop-blur-md bg-white/90 border-white/50 hover:shadow-lg transition-shadow">
            <CardHeader className="p-4 md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-gray-900 mb-2 text-base md:text-lg">
                    {pub.title}
                  </CardTitle>
                  <CardDescription className="text-gray-700 text-xs md:text-sm">
                    {pub.authors}
                  </CardDescription>
                  <p className="text-gray-600 mt-1 text-xs md:text-sm">
                    {pub.venue}, {pub.year}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 md:p-6 pt-0">
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-start sm:items-center">
                {pub.tags && (
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
                {pub.links && (
                  <div className="flex gap-3 sm:ml-auto">
                    {pub.links.paper && (
                      <a
                        href={pub.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
                      >
                        Paper
                      </a>
                    )}
                    {pub.links.code && (
                      <a
                        href={pub.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 transition-colors text-sm"
                      >
                        Code
                      </a>
                    )}
                    {pub.links.video && (
                      <a
                        href={pub.links.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-800 transition-colors text-sm"
                      >
                        Video
                      </a>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}