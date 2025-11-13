import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Q0EzQUYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMjBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">

          {/* ---------- Profile Picture Added Here ---------- */}
          <div className="flex justify-center mb-6">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover shadow-2xl border-4 border-purple-500"
            />
          </div>
          {/* ------------------------------------------------ */}

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Tarigopula Sri Kavya
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">
            Aspiring Full Stack Developer | UI/UX Designer | AI Enthusiast
          </p>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate tech enthusiast pursuing B.Tech with expertise in Java, Python, and DSA.
            Gold Badge on CodeChef, 8th place at SAWIT.AI Hackathon 2024, mentored by Amazon through ZUVY.
          </p>

          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <a href="https://github.com/tarigopulasrikavya" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/srikavya-tarigopula-7863342a3/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="mailto:srikavyatarigopula63@gmail.com?subject=Let's Connect!&body=Hi Sri Kavya,%0A%0AI would love to connect with you about opportunities and collaborations.%0A%0ABest regards"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a href="tel:+916303220986"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Phone className="w-5 h-5" />
              Call
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors animate-bounce">
            <span className="text-lg font-medium">Explore More</span>
            <ArrowDown className="w-5 h-5" />
          </button>

        </div>
      </div>
    </section>
  );
}
