import React from "react";

const notesData = [
  { title: "Nursing Fundamentals Notes", description: "Basic nursing concepts.", link: "#" },
  { title: "Anatomy & Physiology Notes", description: "Human body guide.", link: "#" },
  { title: "Pharmacology Notes", description: "Drugs and dosages.", link: "#" },
  { title: "Procedures Guide", description: "Step-by-step nursing procedures.", link: "#" },
];

const Notes = () => (
  <div className="bg-[#0a1526] p-8 rounded-2xl shadow-lg max-w-4xl w-full mt-10">
    <h2 className="text-2xl text-[#1e90ff] font-bold mb-5 text-center">Nursing Notes & Procedures</h2>
    <div className="flex flex-col gap-5">
      {notesData.map((n, idx) => (
        <div key={idx} className="bg-[#101b34] p-5 rounded-xl flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-lg">{n.title}</h3>
            <p>{n.description}</p>
          </div>
          <a href={n.link} target="_blank" className="px-4 py-2 bg-[#1e90ff] rounded-lg text-white hover:bg-[#63b3ff] transition">
            Download PDF
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Notes;