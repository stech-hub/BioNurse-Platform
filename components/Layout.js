import React from "react";
const Layout = ({ children }) => (
  <div className="bg-gradient-to-br from-[#0b1220] to-[#1e1f3f] min-h-screen text-white flex flex-col items-center">
    <header className="w-full py-5 text-center bg-[#101b34] shadow-md">
      <h1 className="text-3xl text-[#1e90ff] font-bold">BioNurse Platform</h1>
      <p className="mt-1">Free Nursing Education & Resources</p>
    </header>
    <main className="w-full flex flex-col items-center p-5 flex-1">{children}</main>
    <footer className="w-full py-5 text-center text-gray-400">
      &copy; 2026 Akin S. Sokpah, Liberia. All rights reserved.
    </footer>
  </div>
);
export default Layout;
