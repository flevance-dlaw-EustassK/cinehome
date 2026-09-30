import React from "react";
import { Link } from "react-router-dom";
import { Home, Film, User, LogOut } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav
      className="fixed top-4 left-4 right-4 z-50 h-16 flex items-center justify-between rounded-full bg-[rgba(14,14,16,0.7)] backdrop-blur-20 border border-[rgba(255,255,255,0.08)] px-6"
    >
      <div className="flex items-center space-x-3">
        <Film
          className="h-5 w-5 text-primary"
          style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))" }}
        />
        <span className="text-white font-montserrat-600 text-lg">CineHome</span>
      </div>

      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-white hover:text-white/80 transition-colors">
          Home
        </Link>
        <Link to="/catalog" className="text-white hover:text-white/80 transition-colors">
          Catalog
        </Link>
        <Link to="/picker" className="text-white hover:text-white/80 transition-colors">
          Picker
        </Link>
        <Link to="/profile" className="text-white hover:text-white/80 transition-colors">
          Profile
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/login" className="text-white hover:text-white/80 transition-colors">
          Sign in
        </Link>
        <Link to="/picker" className="bg-primary text-white font-montserrat-600 px-5 py-2 rounded-full hover:bg-primary-hover transition-colors hover:scale-105 red-glow">
          Pick a Movie
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;