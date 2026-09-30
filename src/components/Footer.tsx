import React from "react";
import { FilmPopcorn, Heart, Share2 } from "lucide-react";

const Footer: React.FC = () => {
  // Sample film titles for marquee
  const filmTitles = [
    "The Shawshank Redemption",
    "The Godfather",
    "Pulp Fiction",
    "Inception",
    "The Dark Knight",
    "Parasite",
    "Interstellar",
    "The Matrix",
    "Spirited Away",
    "City of God",
    "Amélie",
    "The Grand Budapest Hotel",
    "Mad Max: Fury Road",
    "Whiplash",
    "The Social Network",
  ];

  return (
    <footer className="border-t border-white/10">
      {/* Marquee */}
      <div className="relative overflow-hidden h-12 bg-background">
        <div className="flex items-center space-x-8 animate-marquee">
          {filmTitles.map((title, index) => (
            <span key={index} className="text-muted whitespace-nowrap">
              {title}
            </span>
          ))}
          {filmTitles.map((title, index) => (
            <span key={index + filmTitles.length} className="text-muted whitespace-nowrap">
              {title}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pt-8 pb-10 space-y-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <FilmPopcorn className="h-5 w-5 text-primary" />
            <span className="text-white font-montserrat-600 text-lg">CineHome</span>
          </div>
          <div className="flex space-x-6 text-muted">
            <a href="#" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Press
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Jobs
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Heart className="h-5 w-5 text-primary" />
            <span className="text-muted">Follow us</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-muted hover:text-white transition-colors">
              <Share2 className="h-4 w-4" />
            </a>
            <a href="#" className="text-muted hover:text-white transition-colors">
              <Share2 className="h-4 w-4" />
            </a>
            <a href="#" className="text-muted hover:text-white transition-colors">
              <Share2 className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="text-muted text-sm">
          &copy; {new Date().getFullYear()} CineHome. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;