import { Code2, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Automated OMR Scanning System – EduScan Pro',
    tech: 'HTML, CSS',
    description: 'Developed a web-based OMR evaluation system with an intuitive UI.',
    points: [
      'Enabled automated scanning and processing of OMR sheets',
      'Improved evaluation speed and reduced manual errors',
      'Responsive layout for various devices'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Face Recognition Voting System',
    tech: 'Python',
    description: 'Built a secure voting system using facial recognition for authentication.',
    points: [
      'Implemented real-time face detection and recognition',
      'Designed user-friendly interface for smooth voter interaction',
      'Enhanced security for voting processes'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Pocket Palate – Food Delivery App Prototype',
    tech: 'Figma',
    description: 'Designed intuitive UI/UX for a food delivery application prototype.',
    points: [
      'Created complete user flow from browsing to checkout',
      'Focused on user experience and accessibility',
      'Modern and appealing visual design'
    ],
    color: 'from-green-500 to-teal-500'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <div className="p-6">
                <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-full mb-4 text-sm font-medium`}>
                  <Code2 className="w-4 h-4" />
                  {project.tech}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {project.title}
                </h3>

                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {project.points.map((point, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <ExternalLink className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
