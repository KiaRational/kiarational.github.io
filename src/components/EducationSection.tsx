import React, { memo } from "react";
import { GraduationCap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Education {
  degree: string;
  university: string;
  years: string;
  logo: string;
}

const educationData: Education[] = [
  {
    degree: "MSc Computer Engineering",
    university: "University of Alberta",
    years: "2026 - 2028",
    logo: "https://www.ualberta.ca/favicon.ico",
  },
  {
    degree: "BSc Electrical Engineering",
    university: "Shahid Beheshti University",
    years: "2020 - 2025",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQE1dnin5zHQmw/company-logo_400_400/B4DZme6jQlJgAY-/0/1759307773571/shahidbeheshtiuniversityofficial_logo",
  },
];

export const EducationSection = memo(function EducationSection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <GraduationCap className="w-8 h-8 text-blue-600" />
        <h2 className="text-gray-900">Education</h2>
      </div>

      {/* Education List */}
      <div className="space-y-4">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-xl bg-white/50 border border-gray-200/50 hover:bg-white/70 transition-all duration-300"
          >
            {/* University Logo */}
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-xl bg-white border border-gray-200 flex items-center justify-center p-2 shadow-sm">
                <ImageWithFallback
                  src={edu.logo}
                  alt={`${edu.university} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Education Details */}
            <div className="flex-1 min-w-0">
              <h3 className="text-gray-900 mb-1">
                {edu.degree}
              </h3>
              <p className="text-gray-700 mb-1 text-sm">
                {edu.university}
              </p>
              <p className="text-gray-600 text-sm">
                📅 {edu.years}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
