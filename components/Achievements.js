import React from "react";
const achievementsData=[
  {name:"Quiz Master",description:"Completed 10 quizzes",icon:"🏆",level:"Bronze"},
  {name:"Course Explorer",description:"Completed 5 courses",icon:"🎓",level:"Silver"},
  {name:"Certificate Holder",description:"Downloaded first certificate",icon:"📜",level:"Gold"},
  {name:"BioNurse Pro",description:"Supported platform with donations",icon:"💖",level:"Platinum"},
];
const Achievements = ()=>(
  <div className="bg-[#0a1526] p-8 rounded-2xl shadow-lg max-w-4xl w-full mt-10">
    <h2 className="text-2xl text-[#1e90ff] font-bold mb-5 text-center">Achievements & Badges</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {achievementsData.map((a,idx)=>(
        <div key={idx} className="bg-[#101b34] p-5 rounded-xl flex items-center gap-4">
          <div className="text-4xl">{a.icon}</div>
          <div>
            <h3 className="font-semibold text-lg">{a.name} ({a.level})</h3>
            <p className="text-gray-300">{a.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default Achievements;
