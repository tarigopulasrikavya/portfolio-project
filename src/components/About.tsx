import { Award, Code2, Lightbulb, Trophy } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-blue-600 mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-800 leading-relaxed mb-8 text-center">
            Passionate tech enthusiast and problem solver pursuing B.Tech with expertise in Java, C, Python, HTML, CSS,
            and Data Structures & Algorithms (DSA). Aspiring Full Stack Developer with a strong foundation in UI/UX design
            for building intuitive and scalable applications.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">

            {/* Achievements Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg border border-blue-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-xl">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">Achievements</h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• 8th place at SAWIT.AI Hackathon 2024</li>
                    <li>• Gold Badge on CodeChef</li>
                    <li>• Silver Badge on HackerRank</li>
                    <li>• 50 Days Badge on LeetCode</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Recognition Card */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl shadow-lg border border-pink-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-pink-600 text-white p-3 rounded-xl">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-pink-900 mb-2">Recognition</h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Mentorship from Amazon (ZUVY Program)</li>
                    <li>• Received Laptop & Recognition Award</li>
                    <li>• Vice Chair, ACM Student Chapter</li>
                    <li>• Member, Student Tribe</li>
                    <li>• 2nd place in Technical Quiz</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg border border-blue-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-xl">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">Technical Skills</h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Java, Python, C</li>
                    <li>• HTML, CSS, JavaScript</li>
                    <li>• DSA & Problem Solving</li>
                    <li>• Git, VS Code, Figma</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl shadow-lg border border-pink-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-pink-600 text-white p-3 rounded-xl">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-pink-900 mb-2">Interests</h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Artificial Intelligence & ML</li>
                    <li>• Cloud Computing</li>
                    <li>• UI/UX Design</li>
                    <li>• Open-Source Development</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          <div className="bg-gradient-to-r from-pink-600 via-blue-600 to-pink-600 p-6 rounded-2xl text-white text-center shadow-xl">
            <p className="text-lg font-medium">
              Seeking internship opportunities to gain hands-on experience and contribute to innovative projects
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
