import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'AssetIQ',
      subtitle: 'AI-Enabled Framework for Asset Management',
      description:
        'Comprehensive platform for managing IT assets across educational campuses with full lifecycle tracking, predictive analytics, and anomaly detection for proactive maintenance.',
      technologies: ['Python', 'Flask', 'MySQL', 'TensorFlow', 'Data Visualization'],
      features: [
        'OCR-based asset uploads for automated data entry',
        'Real-time dashboards with actionable BI reports',
        'Predictive analytics for maintenance planning',
        'Automated alerts and compliance management',
      ],
      link: 'https://assetiq.apsit.edu.in/',
      github: null,
    },
    {
      title: 'Performance Based Appraisal System',
      subtitle: 'Official Faculty Evaluation Platform',
      description:
        'Digitized faculty performance appraisal platform officially adopted by A.P. Shah Institute of Technology for streamlined evaluation processes.',
      technologies: ['Python', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      features: [
        'Real-time performance dashboards',
        'Secure file upload and management',
        'Multi-criteria evaluation system',
        'Currently deployed and serving faculty',
      ],
      link: 'https://facultyappraisal.apsit.edu.in/',
      github: null,
    },
    {
      title: 'Livestock Health',
      subtitle: 'AI-Driven Animal Health Predictions',
      description:
        'Real-time monitoring tool for early livestock disease detection, providing farmers with alerts, vaccination suggestions, and feeding guidance.',
      technologies: ['Python', 'TensorFlow', 'NumPy', 'Pandas', 'HTML', 'CSS', 'JavaScript'],
      features: [
        'Early disease detection using AI/ML',
        'Automated health alerts for farmers',
        'Vaccination and feeding recommendations',
        'Data-driven insights for livestock care',
      ],
      link: null,
      github: null,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
            Featured Projects
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Showcasing innovative solutions that combine cutting-edge technology with practical impact
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 flex flex-col"
              >
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-blue-100 text-sm">{project.subtitle}</p>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-sm text-slate-600 flex gap-2"
                        >
                          <span className="text-blue-600">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.link && (
                    <div className="flex gap-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        View Live
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
