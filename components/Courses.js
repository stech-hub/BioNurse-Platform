import React from "react";

const coursesData = [
  { title: "Fundamentals of Nursing", description: "Learn basic nursing care.", link: "#", level: "Beginner" },
  { title: "Anatomy & Physiology", description: "Human body basics for nurses.", link: "#", level: "Intermediate" },
  { title: "Pharmacology Essentials", description: "Drugs and safe administration.", link: "#", level: "Advanced" },
];

const Courses = () => (
  <div className="bg-[#0a1526] p-8 rounded-2xl shadow-lg max-w-4xl w-full mt-10">
    <h2 className="text-2xl text-[#1e90ff] font-bold mb-5 text-center">Free Nursing Courses</h2>
    <div className="flex flex-col gap-5">
      {coursesData.map((c, idx) => (
        <div key={idx} className="bg-[#101b34] p-5 rounded-xl flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-lg">{c.title}</h3>
            <p>{c.description}</p>
            <p className="text-gray-300 text-sm">Level: {c.level}</p>
          </div>
          <a href={c.link} target="_blank" className="px-4 py-2 bg-[#1e90ff] rounded-lg text-white hover:bg-[#63b3ff] transition">
            Start Course
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Courses;
