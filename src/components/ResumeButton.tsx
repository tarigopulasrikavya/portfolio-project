import { Download } from "lucide-react";

export default function ResumeButton() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Want to know more about my experience?
          </h3>

          <p className="text-gray-700 mb-8 text-lg">
            Download my complete resume to see my full background, skills, and achievements.
          </p>

          <a
            href="/SrikavyaTarigopulaResume.pdf"
            download="Srikavya_Tarigopula_Resume.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
            text-white font-bold text-lg rounded-full hover:shadow-2xl transition-all transform hover:scale-110"
          >
            <Download className="w-6 h-6" />
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
