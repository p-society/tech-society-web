import React from 'react';
import tech from '../assets/bg.png';
import sou from '../assets/sou.png';
import gou from '../assets/gou.jpg';
import eh from '../assets/eh.jpg';
import sa from '../assets/sa.jpg';


const teamMembers = [
  {
    name: 'Chirantan Beura',
    role: 'Joint Secretary, Codechef Lead',
    image: [tech],
    facebook: 'https://www.facebook.com/chirantanbeura',
    twitter: 'https://twitter.com/chirantanbeura',
    instagram: 'https://www.instagram.com/chirantanbeura',
    linkedin: 'https://www.linkedin.com/in/chirantanbeura',
  },
  {
    name: 'Md. Ehtisham',
    role: 'Secretary',
    image: [eh],
    facebook: 'https://www.facebook.com/',
    twitter: 'https://twitter.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/in/ehtishaam/',
  },
  {
    name: 'Shipra Mohanty',
    role: 'Secretary, GDG Lead',
    image: [tech],
    facebook: 'https://www.facebook.com/',
    twitter: 'https://twitter.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/in/',
  },
  {
    name: 'Nikhil Rajpoot',
    role: 'Secretary, Coding Ninjas SC',
    image: [tech],
    facebook: 'https://www.facebook.com/',
    twitter: 'https://twitter.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/in/',
  },
  {
    name: 'Saswat Parasar Behera',
    role: 'Joint Secretary, PSoc',
    image: [sa],
    facebook: 'https://www.facebook.com/',
    twitter: 'https://twitter.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/in/',
  },
  {
    name: 'Gaurav Munjan',
    role: 'Secretary, Infosec',
    image: [gou],
    facebook: 'https://www.facebook.com/',
    twitter: 'https://twitter.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/in/',
  },
  {
    name: 'Soubhik Kumar Gon',
    role: 'Joint Secretary, PSoc',
    image: [sou],
    facebook: 'https://www.facebook.com/',
    twitter: 'https://twitter.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/in/',
  },

  // Add objects for other team members with their details
];

function ProfileCard({ name, role, image, facebook, twitter, instagram, linkedin }) {
  return (
    
    <div className="p-4 bg-black shadow-md rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer ">
      <img src={image} alt={name} className="object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-bold mb-2 text-white">{name}</h3>
      <p className="text-blue-500">{role}</p>
      <div className="flex justify-center mt-4 space-x-2">
        <a href={facebook} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook-f text-blue-500"></i>
        </a>
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-twitter text-blue-400"></i>
        </a>
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram text-pink-500"></i>
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin text-blue-700"></i>
        </a>
      </div>
    </div>
   
  );
}

function About() {
  return (
    <>
    <div className="about"> 
      <div className='bg-white h-25' ></div>
      <div className=" px-12 py-24 bg-black">
        <h1 className=" mx-4 text-3xl mb-6 text-white"> <b>What</b> is the Society about?</h1>
        <p className=" mx-4 text-lg text-gray-300 mb-4">
          Inspired by the principle that "Imagination is more important than knowledge," the Science and Technology Council encourages individuals to transcend conventional limits. We provide a supportive platform where imagination can thrive and talents can be showcased. Our initiatives include developing innovative business plans, creating advanced electronic gadgets, and building our own communication devices. We explore the cosmos and engage in software development and robotics. For those seeking alternative experiences, we also offer activities such as fox hunts and glider rides. There is truly something for everyone to enjoy and excel in.
        </p>
        <h2 className=" mx-4 text-2xl mt-8 mb-4 text-white"> <b>Our</b> Mission</h2>
        <p className=" mx-4 text-lg text-gray-300 mb-4">
          Our mission is to drive technological advancement and scientific inquiry by offering students opportunities to explore, create, and excel in various technological domains. We aim to bridge the gap between theoretical knowledge and practical application, nurturing future leaders who are equipped to tackle global challenges.
        </p>
        <h2 className="text-2xl mx-4 mt-8 mb-4 text-white"><b>Join</b> Us</h2>
        <p className=" mx-4 text-lg text-gray-300 mb-4">
          Be a part of a vibrant community dedicated to pushing the boundaries of science and technology. Explore our projects, participate in our events, and contribute to a legacy of innovation and excellence.
        </p>
        <h2 className="text-4xl font-bold text-center mt-8 mb-4 text-white">Meet the team</h2>
        {/* <div className="container mx-auto px-4 py-8 bg-black"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member) => (
              <ProfileCard key={member.name} {...member} />
            ))}
          </div>
        {/* </div> */}
      </div>
      </div>
    </>
  );
}

export default About;

// const About = () => {
//   return (
//     <>
//       <div className='bg-white h-25' ></div>
//       <div className=" px-12 py-24 bg-black">
//         <h1 className=" mx-4 text-3xl mb-6 text-white"> <b>What</b> is the Society about?</h1>
//         <p className=" mx-4 text-lg text-gray-300 mb-4">
//           Inspired by the principle that "Imagination is more important than knowledge," the Science and Technology Council encourages individuals to transcend conventional limits. We provide a supportive platform where imagination can thrive and talents can be showcased. Our initiatives include developing innovative business plans, creating advanced electronic gadgets, and building our own communication devices. We explore the cosmos and engage in software development and robotics. For those seeking alternative experiences, we also offer activities such as fox hunts and glider rides. There is truly something for everyone to enjoy and excel in.
//         </p>
//         <h2 className=" mx-4 text-2xl mt-8 mb-4 text-white"> <b>Our</b> Mission</h2>
//         <p className=" mx-4 text-lg text-gray-300 mb-4">
//           Our mission is to drive technological advancement and scientific inquiry by offering students opportunities to explore, create, and excel in various technological domains. We aim to bridge the gap between theoretical knowledge and practical application, nurturing future leaders who are equipped to tackle global challenges.
//         </p>
//         <h2 className="text-2xl mx-4 mt-8 mb-4 text-white"><b>Join</b> Us</h2>
//         <p className=" mx-4 text-lg text-gray-300 mb-4">
//           Be a part of a vibrant community dedicated to pushing the boundaries of science and technology. Explore our projects, participate in our events, and contribute to a legacy of innovation and excellence.
//         </p>
//         <h2 className="text-4xl font-bold text-center mt-8 mb-4 text-white">Meet the team</h2>

// <div className="container mx-auto px-4 py-8 bg-black">
//   <h2 className="text-2xl font-bold text-center mt-8 mb-4 text-white">Meet the team</h2>
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//     {teamMembers.map((member) => (
//       <ProfileCard key={member.name} {...member} />
//     ))}
//   </div>
// </div>


//       </div>
//     </>
//   );
// };

// export default About;




//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           <div className="p-4 bg-black shadow-md rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300">
//             <img src={tech} alt="Team Member 1" className="w-full h-48 object-cover rounded-lg mb-4" />
//             <h3 className="text-xl font-bold mb-2 text-white">Chirantan Beura</h3>
//             <p className="text-white">Secretary, Codechef Lead</p>
//             <div className="flex justify-center mt-4 space-x-2 ">
//               <a href="https://www.facebook.com/chirantanbeura" target="_blank" rel="noopener noreferrer">
//                 <i className="fa fa-facebook-f text-blue-500"></i>
//               </a>
//               <a href="https://twitter.com/chirantanbeura" target="_blank" rel="noopener noreferrer">
//                 <i className="fa fa-twitter text-blue-400"></i>
//               </a>
//               <a href="https://www.instagram.com/chirantanbeura" target="_blank" rel="noopener noreferrer">
//                 <i className="fa fa-instagram text-pink-500"></i>
//               </a>
//               <a href="https://www.linkedin.com/in/chirantanbeura" target="_blank" rel="noopener noreferrer">
//                 <i className="fa fa-linkedin text-blue-700"></i>
//               </a>
//             </div>
//             {/* ... other team members */}
//           </div>
//         </div>