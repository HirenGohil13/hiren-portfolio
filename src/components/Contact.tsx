import { Mail, Linkedin, MapPin, Phone, Send, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-600">
            Ready to discuss your next project or explore opportunities?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <a
            href="mailto:hiren@sixberries.com"
            className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <Mail className="w-8 h-8 text-blue-600" />
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Email Me
            </h3>
            <p className="text-gray-600 mb-4">
              Get in touch for collaborations and opportunities
            </p>
            <p className="text-blue-600 font-medium group-hover:text-blue-700">
              hiren13190@gmail.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/hiren-gohil-25880153/"
            className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <Linkedin className="w-8 h-8 text-blue-600" />
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Connect on LinkedIn
            </h3>
            <p className="text-gray-600 mb-4">
              Let's grow our professional network
            </p>
            <p className="text-blue-600 font-medium group-hover:text-blue-700">
              View Profile
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
