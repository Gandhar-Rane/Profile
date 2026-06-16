import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Let's Connect
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, projects,
            or just having a chat about technology.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

              <a
                href="mailto:gandharrane303@gmail.com"
                className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
              >
                <div className="p-3 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="font-medium">gandharrane303@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+917710948253"
                className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
              >
                <div className="p-3 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="font-medium">+91-7710948253</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="font-medium">Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Social Links</h3>

              <a
                href="https://github.com/Gandhar-Rane"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
              >
                <div className="p-3 bg-slate-700 rounded-lg group-hover:scale-110 transition-transform">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">GitHub</p>
                  <p className="font-medium">@gandharrane303</p>
                </div>
              </a>

              <a
                href="  https://linkedin.com/in/gandhar-rane-339707288"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
              >
                <div className="p-3 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">LinkedIn</p>
                  <p className="font-medium">Gandhar Rane</p>
                </div>
              </a>

              <div className="mt-8 p-6 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Open to Opportunities</h4>
                <p className="text-blue-100 text-sm mb-4">
                  Currently seeking internships and full-time positions in software
                  development, full-stack engineering, and AI/ML roles.
                </p>
                <a
                  href="mailto:gandharrane303@gmail.com?subject=Opportunity Inquiry"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Send size={18} />
                  Send a Message
                </a>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-slate-800">
            <p className="text-slate-400">
              © 2026 Gandhar Vijay Rane.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
