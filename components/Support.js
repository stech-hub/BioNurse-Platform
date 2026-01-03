import React,{useState,useEffect} from "react";

const tiers=[
  {name:"Pro",amount:5,benefits:"Access quizzes & notes"},
  {name:"Premium",amount:15,benefits:"All Pro + premium courses"},
  {name:"Lifetime",amount:50,benefits:"All Premium + certificate & recognition"},
];

const Support = () => {
  const [showReminder,setShowReminder]=useState(true);
  useEffect(()=>{const timer=setTimeout(()=>setShowReminder(false),15000); return ()=>clearTimeout(timer);},[]);
  const handleDonate=(tier)=>{alert(`Thank you for choosing ${tier.name} tier!\nSend USD $${tier.amount} to:\nMoMo: +231889183557\nBank (UBA Liberia): 53020710015394`);};

  return (
    <div className="bg-[#0a1526] p-8 rounded-2xl shadow-lg max-w-4xl w-full mt-10 relative">
      <h2 className="text-2xl text-[#1e90ff] font-bold mb-5 text-center">Support & Donate</h2>
      <p className="text-center mb-5">Keep this platform free! Choose a tier below:</p>
      <div className="flex flex-col md:flex-row justify-center gap-5">
        {tiers.map((tier,idx)=>(
          <div key={idx} className="bg-[#101b34] p-5 rounded-xl flex-1 text-center">
            <h3 className="font-semibold text-lg mb-2">{tier.name}</h3>
            <p className="mb-2">USD ${tier.amount}</p>
            <p className="text-sm text-gray-300 mb-3">{tier.benefits}</p>
            <button onClick={()=>handleDonate(tier)} className="px-6 py-2 bg-[#1e90ff] rounded-lg hover:bg-[#63b3ff] text-white font-semibold transition">Support {tier.name}</button>
          </div>
        ))}
      </div>
      <p className="mt-5 text-center">MoMo: +231889183557 | Bank (UBA Liberia): 53020710015394</p>
      <div className="text-center mt-3">
        <a href="https://whatsapp.com/channel/0029Vb6qja16buMAUsybF741" target="_blank" className="inline-block px-4 py-2 bg-[#25D366] rounded-lg text-white font-semibold hover:bg-[#43e07b] transition">WhatsApp</a>
        <a href="mailto:sokpahakinsaye@gmail.com" className="inline-block px-4 py-2 ml-3 bg-[#1e90ff] rounded-lg text-white font-semibold hover:bg-[#63b3ff] transition">Email Us</a>
      </div>
      {showReminder && (<div onClick={()=>alert("Support BioNurse! Choose a tier 💖")} className="fixed bottom-5 right-5 bg-[#ff6347] text-white px-5 py-3 rounded-xl shadow-lg cursor-pointer animate-fadeIn">💖 Support BioNurse Platform</div>)}
    </div>
  );
};

export default Support;
