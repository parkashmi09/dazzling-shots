import React from "react";

export default function About() {
  const shoots = [
    { id: 1, name: "Pre-wedding shoot" },
    { id: 2, name: "Wedding shoot" },
    { id: 3, name: "Maternity shoot" },
    { id: 4, name: "New-born shoot" },
    { id: 5, name: "Baby shoot" },
    { id: 5, name: "Corporate shoot" },
  ];
  return (
    <div className="h-full bg-gray-100 about-class -mt-24">
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-8xl font-bold text-gray-900 mb-8 mt-24">
            About Us
          </h2>
          <p className="text-lg md:text-5xl text-gray-700 leading-relaxed mb-12 ">
            At Dazling Shots, we are passionate about capturing the beauty of
            the world around us through our photography. Whether you need
            portraits, landscapes, or event photography, our team of talented
            photographers is here to provide you with the best possible
            experience.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-8xl  font-bold text-gray-900 mb-8">
            Our Services
          </h2>
          <p className="text-lg md:text-5xl text-gray-700 leading-relaxed mb-12 ">
            At Dazling Shots, we specialize in capturing the most important
            moments of your life through our photography services. Our team of
            skilled photographers uses the latest techniques and equipment to
            create stunning photos that you will treasure for a lifetime.
            Whether you need portraits, Wedding Photography, Pre-Wedding
            photography, Maternity Shoot, or landscape photography, we have the
            expertise and experience to deliver the best possible results.
          </p>
          <ul className="text-lg md:text-4xl text-gray-700  mb-12  list-disc list-inside ">
            {shoots?.map((d) => (
              <li key={d.id} className="text-black">{d.name}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
