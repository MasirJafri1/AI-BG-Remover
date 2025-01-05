import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, User } from "lucide-react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  const { credit, loadCreditsData } = useContext(AppContext);

  useEffect(() => {
    if (isSignedIn) {
      loadCreditsData();
    }
  }, [isSignedIn]);

  return (
    <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center transition-opacity hover:opacity-90"
        >
          <img
            className="h-8 w-auto sm:h-10"
            src={assets.logo}
            alt="Company Logo"
          />
        </Link>
        {isSignedIn ? (
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 
    px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-white shadow-md 
    hover:from-blue-600 hover:to-blue-800 hover:shadow-lg transition-all duration-200"
            >
              <img
                className="h-4 w-4"
                src={assets.credit_icon}
                alt="Credits Icon"
              />
              <p className="text-xs sm:text-sm font-medium">
                Credits: {credit}
              </p>
            </button>
            <UserButton />
          </div>
        ) : (
          <button
            onClick={() => openSignIn({})}
            className="
          inline-flex items-center gap-2
          rounded-full bg-zinc-800 px-4 py-2 
          text-sm font-medium text-white
          transition-all duration-200
          hover:bg-zinc-700 hover:shadow-lg
          active:transform active:scale-95
          sm:px-6 sm:py-2.5
        "
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
