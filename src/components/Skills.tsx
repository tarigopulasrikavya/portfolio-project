import { Code2, Database, Layers, Palette, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'C', 'Java', 'JavaScript'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Web Technologies',
    icon: Layers,
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['SQL', 'Supabase', 'PostgreSQL'],
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    skills: ['Figma', 'Responsive Design', 'User Research'],
    color: 'from-pink-500 to-pink-600'
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    skills: ['Git/GitHub', 'VS Code', 'Google Colab', 'NetBeans'],
    color: 'from-orange-500 to-orange-600'
  }
];

const concepts = [
  'Data Structures & Algorithms',
  'Artificial Intelligence',
  'Machine Learning',
  'Cloud Computing',
  'Full Stack Development'
];

export default function Skills() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Core Concepts</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {concepts.map((concept, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white text-gray-800 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all transform hover:scale-105 border-2 border-purple-200"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
