import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredits from "./pages/BuyCredits";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <ToastContainer position="bottom-right" />
      {/* Header Section */}
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-slate-50/80 border-b border-slate-100">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buy" element={<BuyCredits />} />
        </Routes>
      </main>

      {/* Footer Section */}
      <footer className="mt-auto border-t border-slate-100">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
