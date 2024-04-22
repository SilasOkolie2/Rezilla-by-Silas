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
  // Splitting Photos array into two sections
  const topPhotos = Photos.slice(0, 3);
  const bottomPhotos = Photos.slice(3);

  return (
    <div className="w-[100%] items-center flex-col justify-center  overflow-hidden">
      <div className="relative left-[99px] top-8 text-left">
        <h3 className="text-[20px] text-[#4361EE]">AREAS ACROSS THE TOWN</h3>
        <h2 className="text-[40px] font-medium text-black font-serif">Neighborhood Properties</h2>
      </div>
      
      {/* Scrollable container for top photos */}
      <div className="flex justify-center pt-14">
        {topPhotos.map((photo, index) => (
          <div className="relative" key={index}>
            <img src={photo.imageSrc} alt="Image" />
            <div className="absolute bottom-10 left-14 p-4">
              <h1 className="text-[57px] text-white text-opacity-50">{photo.count}</h1>
              <h3 className="text-[20px] text-white">{photo.city}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Scrollable container for bottom photos */}
      <div className="flex justify-center gap-4 items-center ">
        {bottomPhotos.map((photo, index) => (
          <div className="relative" key={index}>
            <img src={photo.imageSrc} alt="Image" />
            <div className="absolute bottom-10 left-14 p-4">
              <h1 className="text-[57px] text-white text-opacity-50">{photo.count}</h1>
              <h3 className="text-[20px] text-white">{photo.city}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
