import React from 'react';
import './Community.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import tech_image from '../assets/community/tech.png';
import mlsa_image from '../assets/community/mlsa.png';
import chef_image from '../assets/community/chef.png';
import ninja_image from '../assets/community/ninja.png';
import gdsc_image from '../assets/community/gdsc.png';
import info_image from '../assets/community/info.png';

const Community = () => {
  const data = [
    {
      image: tech_image,
      title: 'Programming',
      subtitle: 'Society',
      description: 'The Programming Society is a hub for students passionate about coding and software development. We organize coding workshops, hackathons, and peer-to-peer learning sessions to help members sharpen their technical skills. Our focus is on fostering collaboration and innovation through various projects and coding competitions.',
      leads: 'Leads: Saswat Parasar Behera, Soubhik Kumar Gon'
    },
    {
      image: gdsc_image,
      title: 'Google Developer',
      subtitle: 'Groups',
      description: 'Google Developer Groups (GDG) provide a platform for students to learn about Google technologies like Android, Firebase, and TensorFlow. We host hands-on coding sessions, technical talks, and hackathons to empower students to build projects, learn modern frameworks, and prepare for careers in tech. Collaboration with other GDG chapters expands our reach globally.',
      leads: 'Lead: Sipra Mohanty'

    },
    {
      image: mlsa_image,
      title: 'Microsoft Learn Student',
      subtitle: 'Ambassador',
      description: 'The Microsoft Learn Student Ambassador program focuses on empowering students through Microsoft technologies. We offer workshops and events on Azure, AI, and .NET, providing opportunities for members to gain certifications and participate in global Microsoft challenges. Our goal is to prepare students for industry demands in cloud computing, AI, and software development.',
    },
    {
      image: chef_image,
      title: 'CodeChef',
      subtitle: '',
      description: 'CodeChef provides a competitive programming environment where students can improve their problem-solving skills. We regularly organize contests, coding challenges, and mock interviews to help members prepare for programming competitions like ICPC and develop efficient algorithms. The club also holds workshops for students new to competitive coding.',
      leads: 'Lead: Chirantan Beura'
    },
    {
      image: ninja_image,
      title: 'Coding Ninjas',
      subtitle: 'Student Club',
      description: 'The Coding Ninjas Student Club focuses on building a strong foundation in programming through well-structured boot camps and coding sessions. We cover various languages like Python, Java, and C++, along with data structures and algorithms. Members also work on real-world projects to apply their knowledge and collaborate in a team environment.',
      leads: 'Lead: Nikhil Rajpoot'
    },
    {
      image: info_image,
      title: 'InfoSec',
      subtitle: 'Club',
      description: 'The InfoSec Club is dedicated to cybersecurity and ethical hacking. We host workshops on penetration testing, network security, and cryptography. Members participate in Capture The Flag (CTF) competitions, security audits, and ethical hacking challenges, preparing them for careers in cybersecurity and helping them stay ahead of security trends.',
      leads: 'Lead: Gourav Munjan'
    },
  ];
  
  return (
    <div className='cd'>
      <div className="container">
        <h1 className='community_heading' aria-label="Communities Section">Communities</h1>
        <br /><br />
        <div className="row" style={{ justifyContent: 'center' }}>
          {data.map((item, index) => {
            return (
              <div className="col-10 mb-4 community_card" key={index}>
                <div className="card mb-3" style={{ background: 'transparent' }}>
                  <div className="row no-gutters">
                    <div className={`community_image col-md-4 ${index % 2 === 0 ? '' : 'order-md-2'}`}>
                      <img src={item.image} className="bd-placeholder-img img-fluid rounded-start" alt={item.title} style={{ maxHeight: '250px', objectFit: 'contain' }}/>
                    </div>
                    <div className={`col-md-8 d-flex ${index % 2 === 0 ? '' : 'order-md-1'}`} style={{ alignItems: 'center' }}>
                      <div className="card-body">
                        <p className="card-title">
                          <b>{item.title}</b> {item.subtitle}
                        </p>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text">
                          <br />
                          <b>{item.leads}</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <br />
      </div>
    </div>
  );
};

export default Community;
