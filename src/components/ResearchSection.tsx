import React, { memo } from 'react';
import { Brain } from 'lucide-react';

export const ResearchSection = memo(function ResearchSection() {
  const researchAreas = [
    {
      title: "Embodied & Autonomous Robotics",
      description: "Learning-based navigation, manipulation, and decision-making for embodied agents operating in dynamic and uncertain environments.",
      icon: "🤖",
    },
    {
      title: "Deep Reinforcement Learning & Neurosymbolic AI",
      description: "Developing deep RL methods for robotic control while incorporating symbolic reasoning and structured constraints to improve generalization, safety, and sample efficiency.",
      icon: "🧠",
    },
    {
      title: "Computer Vision for Robotics",
      description: "Visual perception and 3D computer vision for robotics, including representation learning, object-centric perception, and scene understanding to support planning and control.",
      icon: "👁️",
    },
    {
      title: "Multi-Agent Robot Learning",
      description: "Coordination and learning in multi-robot systems using decentralized and collaborative reinforcement learning.",
      icon: "🔗",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <Brain className="w-8 h-8 text-blue-600" />
        <h2 className="text-gray-900">Research</h2>
      </div>

      {/* Research Overview */}
      <p className="text-gray-700 leading-relaxed">
        My research focuses on learning-based and embodied robotic systems that can perceive, reason, and act in complex real-world environments. I integrate deep reinforcement learning, neurosymbolic AI, and computer vision to develop autonomous robots that are robust, adaptable, and capable of generalization beyond training settings.
      </p>

      {/* Research Areas */}
      <div className="space-y-4">
        {researchAreas.map((area, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0 mt-1">{area.icon}</span>
            <div>
              <h3 className="text-gray-900 mb-1">
                {area.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                {area.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
