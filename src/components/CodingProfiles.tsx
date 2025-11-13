import { ExternalLink, Award } from 'lucide-react';

const profiles = [
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/tarigopula',
    badge: 'Gold Badge',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/srikavya_57/',
    badge: '50 Days Badge',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/srikavyatarigop1',
    badge: 'Silver Badge',
    color: 'from-green-500 to-teal-500'
  },
  {
    name: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/user/srikavyatarw9p0/',
    badge: 'Active Solver',
    color: 'from-green-600 to-emerald-600'
  }
];

export default function CodingProfiles() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Coding Platforms
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 p-6 border border-gray-200"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${profile.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Award className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{profile.name}</h3>
              <p className={`text-sm font-semibold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent mb-3`}>
                {profile.badge}
              </p>

              <div className="flex items-center gap-2 text-blue-600 group-hover:text-blue-700 transition-colors">
                <span className="text-sm font-medium">View Profile</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
