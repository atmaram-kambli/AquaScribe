import React from 'react';
import './aboutTeam.css'; // Make sure to create appropriate CSS for styling

const teamMembers = [
  {
    name: 'Alice Johnson',
    profession: 'Frontend Developer',
    photo: 'alice.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/alicejohnson',
      github: 'https://github.com/alicejohnson',
      twitter: 'https://twitter.com/alicejohnson',
    },
  },
  {
    name: 'Bob Smith',
    profession: 'Backend Developer',
    photo: 'bob.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/bobsmith',
      github: 'https://github.com/bobsmith',
      twitter: 'https://twitter.com/bobsmith',
    },
  },
  {
    name: 'Charlie Brown',
    profession: 'Full Stack Developer',
    photo: 'charlie.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/charliebrown',
      github: 'https://github.com/charliebrown',
      twitter: 'https://twitter.com/charliebrown',
    },
  },
  {
    name: 'Dana White',
    profession: 'UI/UX Designer',
    photo: 'dana.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/danawhite',
      github: 'https://github.com/danawhite',
      twitter: 'https://twitter.com/danawhite',
    },
  },
];

const AboutTeam = () => {
  return (
    <div className="about-team">
      <h1>Meet our team</h1>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h2>{member.name}</h2>
            <p>{member.profession}</p>
            <div className="social-links">
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={member.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
