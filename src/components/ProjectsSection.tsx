import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  links?: {
    github?: string;
    demo?: string;
    demo2?: string;
    video?: string;
    paper?: string;
  };
  status?: string;
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "1/10 Scale Self-Driving Car Robot",
      description: "Developed and integrated deep learning models for traffic object detection and lane detection, enabling autonomous navigation.",
      technologies: ["Deep Learning", "Computer Vision", "Autonomous Navigation"],
      image: "https://raw.githubusercontent.com/KiaRational/kiarational.github.io/refs/heads/main/images/project-thumbnail-1.jpg",
      links: {
        demo: "https://www.youtube.com/embed/MvSlxgno_cs",
        demo2: "https://www.youtube.com/embed/YPSrwwHQcPE",
      },
      status: "Completed",
    },
    {
      title: "Mobile Manipulator Robot",
      description: "Implemented deep learning models for real-time object detection and pose estimation using an Intel RealSense camera. Implemented SLAM and Motion Planning Algorithms.",
      technologies: ["Deep Learning", "SLAM", "Motion Planning", "RealSense"],
      image: "https://raw.githubusercontent.com/KiaRational/kiarational.github.io/refs/heads/main/images/project-thumbnail-2.png",
      links: {
        demo: "https://www.youtube.com/embed/xdION63-8_o",
      },
      status: "Completed",
    },
    {
      title: "Tiago Mobile Manipulator for Home Service with ROS",
      description: "Worked on mobile manipulation with Tiago Robot with ROS and Gazebo simulator, focusing on object recognition, manipulation, and navigation in dynamic environments.",
      technologies: ["ROS", "Gazebo", "Mobile Manipulation"],
      image: "https://raw.githubusercontent.com/KiaRational/kiarational.github.io/refs/heads/main/images/project-thumbnail-3.png",
      links: {
        github: "https://github.com/KiaRational/Tiago_Object_Manipulation_ROS",
        video: "https://github.com/KiaRational/Tiago_Object_Manipulation_ROS/raw/refs/heads/main/Readme/Video_5xfasten.mp4",
      },
      status: "Completed",
    },
    {
      title: "Visual Odometry for SLAM",
      description: "Developed a visual odometry algorithm for autonomous vehicles on the KITTI dataset, using stereo cameras for accurate position estimation in 3D space.",
      technologies: ["Computer Vision", "SLAM", "KITTI Dataset"],
      image: "https://raw.githubusercontent.com/KiaRational/kiarational.github.io/refs/heads/main/images/project-thumbnail-4.jpg",
      links: {
        github: "https://github.com/KiaRational/VisualOdometry",
      },
      status: "Completed",
    },
    {
      title: "GUI-Based Camera Calibration Toolbox",
      description: "Designed a GUI tool for camera calibration, supporting multiple camera models, and providing an intuitive interface for accurate intrinsic and extrinsic parameter estimation.",
      technologies: ["Computer Vision", "GUI", "Camera Calibration"],
      image: "https://raw.githubusercontent.com/KiaRational/kiarational.github.io/refs/heads/main/images/project-thumbnail-5.jpg",
      links: {
        github: "https://github.com/KiaRational/CalibrationHub",
      },
      status: "Completed",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="backdrop-blur-md bg-white/90 rounded-2xl p-8 border border-white/50 shadow-xl">
        <h1 className="text-gray-900 mb-4">Projects</h1>
        <p className="text-gray-700">
          Research and development projects in robotics, autonomous systems, and AI.
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <Card key={index} className="backdrop-blur-md bg-white/90 border-white/50 hover:shadow-lg transition-shadow overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Project Image */}
              <div className="md:col-span-1">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover min-h-[200px]"
                />
              </div>

              {/* Project Details */}
              <div className="md:col-span-2">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-gray-900">
                      {project.title}
                    </CardTitle>
                    {project.status && (
                      <Badge
                        variant={project.status === 'Active' ? 'default' : 'secondary'}
                        className={
                          project.status === 'Active'
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-600 text-white'
                        }
                      >
                        {project.status}
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-gray-700 mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-blue-300 text-blue-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Video Players */}
                    {(project.links?.demo || project.links?.video) && (
                      <div className="space-y-3 pt-2">
                        {project.links.demo && (
                          <div className="rounded-lg overflow-hidden">
                            <iframe
                              width="100%"
                              height="280"
                              src={project.links.demo}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="rounded-lg"
                            />
                          </div>
                        )}
                        {project.links.demo2 && (
                          <div className="rounded-lg overflow-hidden">
                            <iframe
                              width="100%"
                              height="280"
                              src={project.links.demo2}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="rounded-lg"
                            />
                          </div>
                        )}
                        {project.links.video && (
                          <div className="rounded-lg overflow-hidden">
                            <video
                              width="100%"
                              height="280"
                              controls
                              className="rounded-lg"
                            >
                              <source src={project.links.video} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        )}
                      </div>
                    )}

                    {project.links && (
                      <div className="flex gap-4 pt-2">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            GitHub →
                          </a>
                        )}
                        {project.links.paper && (
                          <a
                            href={project.links.paper}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-800 transition-colors"
                          >
                            Paper →
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="backdrop-blur-md bg-white/90 rounded-2xl p-6 border border-white/50">
        <p className="text-gray-600 text-center">
          Explore more projects on{' '}
          <a
            href="https://github.com/kiarational"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}
