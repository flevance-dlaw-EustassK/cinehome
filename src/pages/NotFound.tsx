import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  useEffect(() => {
    // Add any 404-specific logic here if needed
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Film Grain Overlay */}
      <div className="fixed-overlay film-grain"></div>
      {/* Vignette Overlay */}
      <div className="fixed-overlay vignette"></div>
      
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        {/* Torn Film Strip */}
        <div className="relative w-full max-w-4xl">
          <div className="grid grid-cols-2 gap-4">
            {/* Left Film Strip */}
            <div className="relative film-strip-left">
              <div className="h-[300px] bg-black/20"></div>
            </div>
            {/* Right Film Strip */}
            <div className="relative film-strip-right">
              <div className="h-[300px] bg-black/20"></div>
            </div>
          </div>
          
          {/* Text in the Middle */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="font-montserrat-800 text-5xl mb-4 leading-tight">
              FILM NOT FOUND
            </h1>
            <p className="text-muted text-lg mb-6">
              This reel seems to be missing
            </p>
            <Link 
              to="/catalog" 
              className="bg-primary text-white font-montserrat-600 px-8 py-3 rounded-full hover:bg-primary-hover transition-colors hover:scale-105 red-glow"
            >
              Back to Library
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;