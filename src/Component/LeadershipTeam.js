import React from 'react';
import './Style/LeadershipTeam.css';
import person1 from '../images/Saman.png'; // Replace with actual image paths
import person2 from '../images/Ano.png';
import person3 from '../images/Lak.png';
import person4 from '../images/Jee.png';

const LeadershipTeam = () => {
  const leaders = [
    {
      id: 1,
      image: person1,
      name: 'Mr. Samantha Ranatunga',
      position: 'Chairman',
      description:
        'A veteran of the agriculture industry, Mr. Ranatunga boasts over 30 years of industry experience. He was CEO of a leading diversified conglomerate with interests ranging from agriculture and crops to livestock to healthcare and chemical solutions.',
    },
    {
      id: 2,
      image: person2,
      name: 'Dr. Selvanathan Anojan',
      position: 'Director / Chief Executive',
      description:
        'Dr. Anojan is a serial entrepreneur who attained fair share of exposure and has been successful in both his corporate & entrepreneurial life. He is a Founder Member of the Sri Lanka Agripreneurs’ Forum (SLAF) and serves currently as the Honorary Secretary.',
    },
    {
      id: 3,
      image: person3,
      name: 'Mr. Lakshan de Silva',
      position: 'Director',
      description:
        'Lakshan is a finance and technology professional with 10+ years of experience. After starting his career in Wall Street, New York, he went on to be the CFO of a Top 10 Fintech-startup in Singapore. Lakshan brings his expertise in disruptive startups to the team.',
    },
    {
      id: 4,
      image: person4,
      name: 'Mr. Jeevan Gnanam',
      position: 'Director',
      description:
        'Jeevan is the visionary behind Orion City, Sri Lanka’s largest technology park. He is one of Sri Lanka’s leading figures in AI/ML with VeracityAI and was instrumental in launching Sri Lanka’s National AI Policy and AI forum in SLASSCOM.',
    },
  ];

  return (
    <div className="Lead">
      <h4 className="topic">Leadership Team</h4>
      <div className="leader-container">
        {leaders.map((leader) => (
          <div className="leader-card" key={leader.id}>
            <div className="leader-image">
              <img src={leader.image} alt={leader.name} />
            </div>
            <div className="leader-content">
              <h3>{leader.name}</h3>
              <h5>{leader.position}</h5>
              <p>{leader.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipTeam;
