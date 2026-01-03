import React, { useState } from "react";
import jsPDF from "jspdf";

const quizData = [
  { question: "Which vitamin is essential for blood clotting?", options: ["A","C","K","D"], answer: "K" },
  { question: "Normal adult heart rate?", options: ["60-100","40-60","100-120","120-150"], answer: "60-100" },
  { question: "First step in hand hygiene?", options: ["Dry","Soap","Wet","Sanitize"], answer: "Wet" },
];

const Quizzes = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (option) => {
    if(option === quizData[current].answer) setScore(score+1);
    if(current+1 < quizData.length) setCurrent(current+1);
    else setCompleted(true);
  };

  const generateCertificate = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("BioNurse Certificate",20,30);
    doc.setFontSize(16);
    doc.text(`You scored ${score} out of ${quizData.length}`,20,50);
    doc.save("BioNurse_Certificate.pdf");
  };

  return (
    <div className="bg-[#0a1526] p-8 rounded-2xl shadow-lg max-w-4xl w-full mt-10">
      <h2 className="text-2xl text-[#1e90ff] font-bold mb-5 text-center">Quizzes & Tests</h2>
      {!completed ? (
        <div className="bg-[#101b34] p-5 rounded-xl">
          <h3 className="font-semibold text-lg mb-3">{quizData[current].question}</h3>
          <div className="flex flex-col gap-3">
            {quizData[current].options.map((o,i)=>(
              <button key={i} onClick={()=>handleAnswer(o)} className="px-4 py-2 bg-[#1e90ff] rounded-lg hover:bg-[#63b3ff] text-white font-semibold transition">{o}</button>
            ))}
          </div>
          <p className="mt-3 text-gray-300">Question {current+1} of {quizData.length}</p>
        </div>
      ) : (
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-3">Quiz Completed!</h3>
          <p className="mb-5">You scored {score} out of {quizData.length}</p>
          <button onClick={generateCertificate} className="px-6 py-3 bg-[#1e90ff] rounded-lg hover:bg-[#63b3ff] text-white font-semibold transition">
            Download Certificate
          </button>
        </div>
      )}
    </div>
  );
};

export default Quizzes;