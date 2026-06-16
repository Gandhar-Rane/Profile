import { Code2, Wrench, Layers, Brain } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages',
      skills: ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS', 'TypeScript'],
    },
    {
      icon: Brain,
      title: 'ML / DS & AI',
      skills: [
        'NumPy', 'Pandas', 'TensorFlow', 'Scikit-learn',
        'Data Analysis', 'Feature Engineering',
        'LLM APIs', 'Local LLM Inference',
        'Prompt Engineering', 'OCR Pipelines', 'Tool Use'
      ],
    },
    {
      icon: Layers,
      title: 'Backend & Databases',
      skills: [
        'Flask', 'REST API Design', 'JWT Auth',
        'APScheduler', 
        'MySQL', 'PostgreSQL'
      ],
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      skills: [
        'Git/GitHub', 'VS Code', 'Jira', 'Bitbucket',
         'QRCode', 'pdf2image', 'pytesseract'
      ],
    },
  ];

  const coreSkills = [
    'Teamwork',
    'Communication',
    'Problem Solving',
    'Adaptability',
    'Agile / Sprint Workflow',
    'Code Review',
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <category.icon className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 rounded-xl text-white">
            <h3 className="text-2xl font-semibold mb-6 text-center">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {coreSkills.map((skill, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg font-medium hover:bg-white/30 transition-all hover:scale-105"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}