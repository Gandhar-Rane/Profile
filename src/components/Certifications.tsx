import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'AWS Academy Graduate',
      issuer: 'AWS Data Engineering',
      description:
        'Comprehensive training in AWS data engineering services and best practices.',
      link: '/Certificates/aws.pdf',
    },
    {
      title: 'Data Analysis with Python',
      issuer: 'IBM (Cognitive Class)',
      description:
        'Advanced data analysis techniques using Python, NumPy, and Pandas.',
      link: '/Certificates/ibm-cognitive.pdf',
    },
    {
      title: 'Prompt Engineering for Everyone',
      issuer: 'IBM (Cognitive Class)',
      description:
        'Modern techniques for effective AI prompt engineering and LLM interaction.',
      link: '/Certificates/prompt-engineering.pdf',
    },
    {
      title: 'Programming Essentials in Python',
      issuer: 'PCAP Certification',
      description:
        'Fundamental and advanced Python programming concepts.',
      link: '/Certificates/programming-essential.pdf',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
            Certifications
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                    <Award className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-blue-600 font-medium mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-slate-600 mb-3">
                      {cert.description}
                    </p>

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View Certificate
                      <ExternalLink size={14} />
                    </a>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}