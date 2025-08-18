import React from "react";

const educationData = [
  {
    logo: "/logos/buildspace.png",
    name: "University of Calcutta",
    degree: "Btech in Chemical Technology",
    year: "2023 - 2027",
  },
  {
    logo: "/logos/waterloo.png",
    name: "Purnea College Purnea",
    degree: "Higher Secondary education",
    year: "2020 - 2022",
  },
  {
    logo: "/logos/lazaridis.png",
    name: "shree darwari roy high school",
    degree: "Secondary education",
    year: "2018-2020",
  },
  {
    logo: "/logos/ib.png",
    name: "Ms mahathawa middle school",
    degree: "Primary education",
    year: "2010-2018",
  },
];

export default function Education() {
  return (
    <div className="w-full flex justify-center" id="about">
      <section className="w-full md:w-[70%]">
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      <div className="space-y-4">
        {educationData.map((edu, index) => (
          <div key={index} className="flex items-center justify-between  bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <img
                src={edu.logo}
                alt={edu.name}
                className="w-10 h-10 object-contain rounded-full"
              />
              <div>
                <p className="font-semibold">{edu.name}</p>
                <p className="text-gray-600 text-sm">{edu.degree}</p>
              </div>
            </div>
            <p className="text-gray-400">{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
    </div>   
  );
}
