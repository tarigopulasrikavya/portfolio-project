import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: 'Microsoft Generative AI',
    color: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-600',
    link: '/Microsoft.jpg'
  },
  {
    name: 'DCA (Diploma in Computer Application)',
    color: 'from-purple-500 to-purple-600',
    borderColor: 'border-purple-600',
    link: '/DCA.jpg'
  },
  {
    name: 'Python',
    color: 'from-yellow-500 to-yellow-600',
    borderColor: 'border-yellow-600',
    link: '/python.jpg'
  },
  {
    name: 'Artificial Intelligence',
    color: 'from-pink-500 to-pink-600',
    borderColor: 'border-pink-600',
    link: '/AI.jpg'
  },
  {
    name: 'C Programming',
    color: 'from-green-500 to-green-600',
    borderColor: 'border-green-600',
    link: '/C.jpg'
  },
  {
    name: 'Computer Networks',
    color: 'from-orange-500 to-orange-600',
    borderColor: 'border-orange-600',
    link: '/cn.jpg'
  },
  {
    name: 'R Software',
    color: 'from-indigo-500 to-indigo-600',
    borderColor: 'border-indigo-600',
    link: '/Rsoftware.jpg'
  }
];

export default function Certifications() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Certifications & Credentials
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:-translate-y-2 border-l-4 ${cert.borderColor}`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`bg-gradient-to-br ${cert.color} p-3 rounded-lg text-white flex-shrink-0`}>
                  <Award className="w-5 h-5" />
                </div>
                <p className="text-gray-900 font-bold text-sm leading-tight">{cert.name}</p>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 cursor-pointer group"
              >
                <span className="text-xs font-medium">View Certificate</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
