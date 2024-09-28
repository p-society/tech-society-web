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
      description: 'Our team is a dynamic group of tech enthusiasts, designers, and innovators, all working together to drive the mission of the Tech Society forward. Meet the individuals who make it all happen!',
      leads: 'Leads: Saswat Parasar Behera, Soubhik Gon',
    },
    {
      image: gdsc_image,
      title: 'Google Developer',
      subtitle: 'Groups ',
      description: 'Our team is a dynamic group of tech enthusiasts, designers, and innovators, all working together to drive the mission of the Tech Society forward. Meet the individuals who make it all happen!',
      leads: 'Leads: Saswat Parasar Behera, Soubhik Gon',
    },
    {
      image: mlsa_image,
      title: 'Microsoft Learn Student',
      subtitle: 'Ambassador',
      description: 'Our team is a dynamic group of tech enthusiasts, designers, and innovators, all working together to drive the mission of the Tech Society forward. Meet the individuals who make it all happen!',
      leads: 'Leads: Saswat Parasar Behera, Soubhik Gon',
    },
    {
      image: chef_image,
      title: 'Codechef',
      subtitle: '',
      description: 'Our team is a dynamic group of tech enthusiasts, designers, and innovators, all working together to drive the mission of the Tech Society forward. Meet the individuals who make it all happen!',
      leads: 'Leads: Saswat Parasar Behera, Soubhik Gon',
    },
    {
      image: ninja_image,
      title: 'Coding Ninjas',
      subtitle: 'Student Club',
      description: 'Our team is a dynamic group of tech enthusiasts, designers, and innovators, all working together to drive the mission of the Tech Society forward. Meet the individuals who make it all happen!',
      leads: 'Leads: Saswat Parasar Behera, Soubhik Gon',
    },
    {
      image: info_image,
      title: 'InfoSec',
      subtitle: 'Club',
      description: 'Our team is a dynamic group of tech enthusiasts, designers, and innovators, all working together to drive the mission of the Tech Society forward. Meet the individuals who make it all happen!',
      leads: 'Leads: Saswat Parasar Behera, Soubhik Gon',
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
