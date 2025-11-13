import { GraduationCap, Calendar, TrendingUp } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-purple-600 hover:shadow-2xl transition-shadow">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-xl text-white flex-shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  VR Siddhartha Engineering College
                </h3>
                <p className="text-lg text-purple-600 font-semibold mb-4">
                  B.Tech – Information Technology
                </p>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span>September 2023 – Present</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="font-bold">CGPA: 8.90</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-xl">
                  <p className="text-gray-800 font-medium">
                    Focusing on Full Stack Development, AI/ML, and building scalable applications
                    with a strong emphasis on problem-solving and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
