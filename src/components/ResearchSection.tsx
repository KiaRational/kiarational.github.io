import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function ResearchSection() {
  const researchAreas = [
    {
      title: "Autonomous Robotics",
      description: "Developing intelligent systems that can operate independently in complex, dynamic environments. Focus on navigation, path planning, and decision-making algorithms.",
      icon: "🤖",
    },
    {
      title: "Machine Learning for Robotics",
      description: "Applying deep learning and reinforcement learning techniques to enable robots to learn from experience and adapt to new situations.",
      icon: "🧠",
    },
    {
      title: "Computer Vision",
      description: "Creating robust perception systems using cameras and depth sensors. Applications include object detection, tracking, and 3D reconstruction.",
      icon: "👁️",
    },
    {
      title: "Multi-Agent Systems",
      description: "Coordinating teams of robots to accomplish complex tasks through distributed planning and communication protocols.",
      icon: "🔗",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="backdrop-blur-md bg-white/90 rounded-2xl p-8 border border-white/50 shadow-xl">
        <h1 className="text-gray-900 mb-4">Research</h1>
        <p className="text-gray-700 leading-relaxed">
          My research focuses on developing intelligent autonomous systems that can perceive, 
          reason, and act in complex real-world environments. I combine techniques from robotics, 
          machine learning, and computer vision to create robots that are more capable, reliable, 
          and adaptable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {researchAreas.map((area, index) => (
          <Card key={index} className="backdrop-blur-md bg-white/90 border-white/50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{area.icon}</span>
                <CardTitle className="text-gray-900">
                  {area.title}
                </CardTitle>
              </div>
              <CardDescription className="text-gray-700">
                {area.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="backdrop-blur-md bg-white/90 rounded-2xl p-8 border border-white/50">
        <h2 className="text-gray-900 mb-4">Current Focus</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Currently, I am working on advancing the state-of-the-art in autonomous navigation 
            for mobile robots, with particular emphasis on learning-based approaches that can 
            handle uncertainty and generalize to new environments.
          </p>
          <p>
            I am also exploring the intersection of robotics and foundation models, investigating 
            how large-scale pre-training can be leveraged to improve robot perception and control.
          </p>
        </div>
      </div>
    </div>
  );
}
