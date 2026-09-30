import React from "react";
import { Link } from "react-router-dom";
import { Clapperboard, Film } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-4 left-4 right-4 flex h-16 items-center justify-between rounded-full bg-black/70 backdrop-blur-20 border border-white/10 px-6">
      <div className="flex items-center space-x-3">
        <Clapperboard className="h-5 w-5 text-primary" />
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
        <Link to="/picker" className="bg-primary text-white font-montserrat-600 px-5 py-2 rounded-full hover:bg-primary-hover transition-colors hover:scale-105">
          Pick a Movie
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;