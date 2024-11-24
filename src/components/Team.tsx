import React from "react";
import { FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "James Nduku",
      role: "Marketing Coordinator",
      socialLinks: {
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
        website: "https://jamesnduku.com",  
      },
      image: "/team1.svg",  
    },
    {
      name: "Joseph Munyambu",
      role: "Nursing Assistant",
      socialLinks: {
        linkedin: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
        website: "https://josephmunyambu.com",
      },// C
      image: "/team2.svg",  
    },
    {
        name: "Joseph Ngumbau",
        role: "Marketing Coordinator",
        socialLinks: {
          linkedin: "https://linkedin.com/in/Josephngumbau",
          twitter: "https://twitter.com/Josephngumbau",
          website: "https://Josephngumbau.com",  
        },
        image: "/team3.svg",  
      },
      {
        name: "Erick Kipkemboi",
        role: "Marketing Coordinator",
        socialLinks: {
          linkedin: "https://linkedin.com/in/ErickKipkemboi",
          twitter: "https://twitter.com/ErickKipkemboi",
          website: "https://ErickKipkemboi.com",  
        },
        image: "/team4.svg",
      },
      {
        name: "Stephen Kerubo",
        role: "Marketing Coordinator",
        socialLinks: {
          linkedin: "https://linkedin.com/in/StephenKerubo",
          twitter: "https://twitter.com/StephenKerubo",
          website: "https://StephenKerubo.com",  
        },
        image: "/team5.svg",
      },
      {
        name: "John Leboo",
        role: "Marketing Coordinator",
        socialLinks: {
          linkedin: "https://linkedin.com/in/JohnLeboo",
          twitter: "https://twitter.com/JohnLeboo",
          website: "https://JohnLeboo.com",  
        },
        image: "/team6.svg",  
      },
  ];

  return (
    <section className="mx-auto px-4 py-16 bg-[#F7F7F7]">
      <div className="text-center mb-12">
        <h2 className="text-[38px] font-bold text-[#000000]">Our Team</h2>
        <p className="text-[20px] text-[#000000] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="p-6 text-center bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-between"
          >
         
            <div className="w-32 h-32 mx-auto mb-4 flex justify-center items-center">
              <Image
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>

            <div className="flex flex-col items-center mb-6">
              <h3 className="text-[20px] font-bold text-[#000000]">{member.name}</h3>
              <p className="text-[18px] text-[#555555]">{member.role}</p>
            </div>

       
            <div className="flex justify-center gap-4 mt-4 py-4">
              <a
                href={member.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#000000] hover:text-gray-700"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href={member.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#000000] hover:text-gray-700"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href={member.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#000000] hover:text-gray-700"
              >
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
