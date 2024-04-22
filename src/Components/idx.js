export const HERO_CONTENT = `I am a passionate web developer! I've spent a lot of time learning how to build awesome websites. I'm good with front-end stuff like React and a cool design tool called Tailwind CSS. I also know some other techie tools. My dream is to use my skills and AI tools to make new and exciting things that help businesses grow and make users super happy.`;

export const ABOUT_TEXT = `I'm a web developer who loves making websites that work well and are easy for people to use. I've been doing this for a while now and have experience with different tools like React and Tailwind CSS. I got into web development because I was curious about how things work, and now it's become my career. I'm always learning new things and love solving tricky problems. I work well with others and enjoy working together to come up with great solutions. When I'm not coding, I like to stay active, learn about new tech stuff, and help out with open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
];

import React from 'react';

const Photos = [
  {
    city: "New York City, NY",
    count: 216,
    imageSrc: "public/Rectangle 17.png"
  },
  {
    city: "Houston, Tx",
    count: 141,
    imageSrc: "public/Rectangle 25.png"
  },
  {
    city: "San Diego, CA",
    count: 212,
    imageSrc: "public/Rectangle 26.png"
  },
  {
    city: "Philadelphia, PA",
    count: 183,
    imageSrc: "public/Rectangle 27.png"
  },
  {
    city: "San Francisco, CA",
    count: 112,
    imageSrc: "public/Rectangle 28.png"
  }
];

const PhotoGallery = () => {
  return (
    <div className="w-[90%] flex-col justify-center mx-auto">
      <div className="relative left-[99px] top-8 text-left">
        <h3 className="text-[20px] text-[#4361EE]">AREAS ACROSS THE TOWN</h3>
        <h2 className="text-[40px] font-medium text-black font-serif">Neighborhood Properties</h2>
      </div>
      
      <div className="flex justify-center pt-14">
        {Photos.map((photo, index) => (
          <div className="relative" key={index}>
            <img src={photo.imageSrc} alt="Image" />
            <div className="absolute bottom-10 left-14 p-4">
              <h1 className="text-[57px] text-opacity-50">{photo.count}</h1>
              <h3 className="text-[20px] text-white">{photo.city}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
