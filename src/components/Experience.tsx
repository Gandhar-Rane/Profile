import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            Experience
          </h2>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

            <div className="relative mb-8">
              <div className="md:flex md:items-center">
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Software Engineer Intern
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold mb-2">
                      RigelX Infotech Private Limited
                    </p>
                    <div className="flex flex-wrap gap-3 md:justify-end mb-3">
                      <span className="flex items-center gap-1 text-sm text-slate-600">
                        <Calendar size={16} />
                        Dec 2025 - Jan 2026
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>

                <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>
                          Gained hands-on exposure to real-world software development
                          practices, tools, and workflows
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>
                          Worked on a live industry project, contributing to frontend
                          development tasks
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>
                          Developed practical skills in full-stack development with a
                          strong focus on Next.js and modern web technologies
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>
                          Enhanced problem-solving abilities and industry readiness through
                          collaborative development and code reviews
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl border border-blue-100">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-600 rounded-lg">
                <Briefcase className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Looking for Opportunities
                </h3>
                <p className="text-slate-700">
                  I'm actively seeking internship and full-time opportunities where I can
                  contribute my skills in full-stack development, AI/ML, and enterprise
                  web development. Open to remote and on-site positions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
