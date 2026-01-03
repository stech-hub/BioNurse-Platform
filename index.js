import Layout from "../components/Layout";
import Scholarships from "../components/Scholarships";
import Courses from "../components/Courses";
import Notes from "../components/Notes";
import Quizzes from "../components/Quizzes";
import Support from "../components/Support";
import Achievements from "../components/Achievements";

export default function Home() {
  return (
    <Layout>
      <div className="bg-[#101b34] p-10 rounded-2xl shadow-lg max-w-xl w-full text-center">
        <h2 className="text-2xl text-[#1e90ff] font-bold mb-3">Download My App</h2>
        <p className="mb-5">Click below to download the APK</p>
        <a href="https://github.com/stech-hub/bionurseapk-website/releases/download/v1/myapp.apk"
          target="_blank"
          className="inline-block px-8 py-3 bg-[#1e90ff] rounded-lg text-white font-semibold hover:bg-[#63b3ff] transition transform hover:scale-105">
          Download APK
        </a>
        <a href="https://whatsapp.com/channel/0029Vb6qja16buMAUsybF741"
          target="_blank"
          className="inline-block mt-4 px-6 py-2 bg-[#25D366] rounded-lg text-white font-semibold hover:bg-[#43e07b] transition">
          Join WhatsApp Channel
        </a>
        <p className="mt-4">Version: 1.0 | Size: 7.13 MB</p>
        <p>Developed by Akin S. Sokpah from Liberia 😊</p>
      </div>

      <Scholarships />
      <Courses />
      <Notes />
      <Quizzes />
      <Support />
      <Achievements />
    </Layout>
  );
}