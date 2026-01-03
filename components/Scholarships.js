import React from "react";

const scholarshipsData = [
  {
    country: "Liberia",
    program: "Free Nursing Scholarship",
    link: "https://www.example.com/liberia-scholarship"
  },
  {
    country: "Online",
    program: "Free Online Nursing Course Scholarship",
    link: "https://www.example.com/online-scholarship"
  },
  // Add more scholarships as needed
];

const Scholarships = () => {
  return (
    <div className="bg-[#0a1526] p-8 rounded-2xl shadow-lg max-w-4xl w-full mt-10">
      <h2 className="text-2xl text-[#1e90ff] font-bold mb-5 text-center">Scholarships</h2>
      <div className="flex flex-col gap-5">
        {scholarshipsData.map((sch, idx) => (
          <div key={idx} className="bg-[#101b34] p-5 rounded-xl flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">{sch.program}</h3>
              <p className="text-gray-300">Country: {sch.country}</p>
            </div>
            <a href={sch.link} target="_blank" className="px-4 py-2 bg-[#1e90ff] rounded-lg text-white hover:bg-[#63b3ff] transition">
              Apply
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scholarships;
