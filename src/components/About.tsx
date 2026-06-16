import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            About Me
          </h2>

          <div className="prose prose-lg max-w-none text-slate-700 mb-12">
            <p className="text-lg leading-relaxed mb-6">
                I'm Gandhar Rane, a recent Information Technology graduate from AP Shah Institute of Technology,
                Thane, with a strong focus on full-stack development, machine learning, and AI-driven
                systems. I enjoy building end-to-end solutions  from designing REST APIs and backend
                logic to integrating LLMs, OCR pipelines, and predictive models that solve real,
                practical problems.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Some of my notable work includes AssetIQ, a deployed AI-enabled asset management
              platform built with Flask, PostgreSQL, and a locally hosted LLM achieving ~92% invoice
              processing accuracy, and a Performance Based Appraisal System that was officially
              adopted by my own college. My internship at RigelX Infotech gave me hands-on exposure
              to production-grade development using Next.js, agile sprint workflows via Jira, and
              collaborative version control through Bitbucket.
            </p>
            <p className="text-lg leading-relaxed">
              I'm continuously expanding my skill set across Python, SQL, JavaScript, ML frameworks
              like TensorFlow and Scikit-learn, and AI tooling including LLM APIs, prompt engineering,
              and OCR pipelines. My certifications in AWS Data Engineering, Data Analysis with Python,
              and Prompt Engineering reflect my commitment to staying current and building with purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-slate-900">Education</h3>
              </div>
              <p className="text-sm text-slate-700 font-medium mb-1">
                B.E. in Information Technology
              </p>
              <p className="text-sm text-slate-600">
                AP Shah Institute of Technology, Thane
              </p>
              <p className="text-xs text-slate-500 mt-2">2022 - 2026</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-slate-900">Location</h3>
              </div>
              <p className="text-sm text-slate-700 font-medium mb-1">
                Mumbai, Maharashtra
              </p>
              <p className="text-sm text-slate-600">
                Available for remote & on-site opportunities
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Calendar className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-slate-900">Experience</h3>
              </div>
              <p className="text-sm text-slate-700 font-medium mb-1">
                Software Engineer Intern
              </p>
              <p className="text-sm text-slate-600">
                RigelX Infotech Private Limited
              </p>
              <p className="text-xs text-slate-500 mt-2">Dec 2025 - Jan 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}