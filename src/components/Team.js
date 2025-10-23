import React from 'react';
import { Linkedin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Alex Rodriguez',
      role: 'Lead Developer',
      bio: 'Full-stack developer with 8+ years of experience in modern web technologies.',
      avatar: '/images/team-1.jpg',
      linkedin: '#'
    },
    {
      name: 'Maria Chen',
      role: 'UI/UX Designer',
      bio: 'Creative designer passionate about creating intuitive and beautiful user experiences.',
      avatar: '/images/team-2.jpg',
      linkedin: '#'
    },
    {
      name: 'David Kim',
      role: 'Mobile Developer',
      bio: 'Mobile app specialist with expertise in React Native and native iOS/Android development.',
      avatar: '/images/team-3.jpg',
      linkedin: '#'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sargas Team
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card text-center">
              <div className="relative mb-6">
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              
              <p className="text-primary-600 font-medium mb-4">
                {member.role}
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {member.bio}
              </p>
              
              <a 
                href={member.linkedin}
                className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;