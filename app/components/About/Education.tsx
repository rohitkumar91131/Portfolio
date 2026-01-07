import React from "react";

const educationData = [
  {
    name: "University of Calcutta",
    degree: "BTech in Chemical Technology",
    year: "2023 - 2027",
  },
  {
    name: "Purnea College Purnea",
    degree: "Higher Secondary Education",
    year: "2020 - 2022",
  },
  {
    name: "Shree Darwari Roy High School",
    degree: "Secondary Education",
    year: "2018 - 2020",
  },
  {
    name: "Ms Mahathawa Middle School",
    degree: "Primary Education",
    year: "2010 - 2018",
  },
];

export default function Education() {
  return (
    <div className="w-full flex justify-center" id="about">
      <section className="w-full md:w-[70%] text-center sm:text-left">
        <h2 className="text-2xl font-bold mb-6 ">Education</h2>
        <div className="space-y-4">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between  p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <p className="font-semibold text-lg">{edu.name}</p>
                <p style={{ color: "var(--card-text)" }}>{edu.degree}</p>
              </div>
              <p className="text-gray-400 mt-2 sm:mt-0">{edu.year}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
