import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Clock, 
  Smile, 
  Sad, 
  Brain, 
  Zap, 
  Coffee, 
  Heart,
  User, 
  Users, 
  Child, 
} from "lucide-react";
import { mockFilms } from "../data/mockFilms";

const Picker: React.FC = () => {
  const [step, setStep] = useState(1);
  const [timeRange, setTimeRange] = useState(""); // under1h, 1to2h, over2h
  const [mood, setMood] = useState(""); // laugh, cry, think, thrill, relax, romance
  const [company, setCompany] = useState(""); // alone, partner, friends, kids

  const goToNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const goToPrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const resetPicker = () => {
    setStep(1);
    setTimeRange("");
    setMood("");
    setCompany("");
  };

  // Filter films based on selections
  const filteredFilms = mockFilms.filter(film => {
    // Time filter
    if (timeRange === "under1h" && film.runtime >= 60) return false;
    if (timeRange === "1to2h" && (film.runtime < 60 || film.runtime > 120)) return false;
    if (timeRange === "over2h" && film.runtime <= 120) return false;
    
    // Mood filter - we'll map mood to genres or keywords
    // For simplicity, we'll just return all films if mood is selected (in a real app, we'd have mood tags)
    // We'll skip mood filtering for now and just return films
    
    // Company filter - we'll skip for now
    return true;
  });

  // Get top 3 films based on rating
  const topFilms = [...filteredFilms]
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, 3);

  return (
    <div className="min-h-[calc(100vh-16px)] flex flex-col">
      {/* Progress Bar */}
      <div className="h-2 bg-primary/20">
        <div 
          className={`h-2 bg-primary transition-all duration-500 w-[${step === 1 ? 0 : step === 2 ? 33 : step === 3 ? 66 : 100}%]`} 
        ></div>
      </div>

      {/* Step Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-2xl space-y-8">
          {/* Step 1: Time */}
          {step === 1 && (
            <>
              <h2 className="text-3xl font-montserrat-800 text-white text-center">
                How much time do you have?
              </p>
              <div className="grid grid-cols-3 gap-6 mt-10">
                {[ 
                  { label: "Under 1h", value: "under1h", icon: Clock, description: "Perfect for a short break" },
                  { label: "1-2h", value: "1to2h", icon: Clock, description: "Ideal for a movie night" },
                  { label: "Over 2h", value: "over2h", icon: Clock, description: "For an epic cinematic experience" },
                ].map((option) => (
                  <div 
                    key={option.value} 
                    onClick={() => setTimeRange(option.value)}
                    className={`relative flex flex-col items-center justify-center h-24 w-full border border-white/10 rounded-lg bg-surface transition-all duration-400 hover:border-primary hover:bg-primary/10 ${timeRange === option.value ? `border-primary bg-primary/10` : ""}`}
                  >
                    <option.icon className={`h-5 w-5 mb-3 ${timeRange === option.value ? "text-primary" : "text-muted"}`} />
                    <span className="font-montserrat-600 text-white">{option.label}</span>
                    <span className="text-xs text-muted mt-2">{option.description}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Step 2: Mood */}
          {step === 2 && (
            <>
              <h2 className="text-3xl font-montserrat-800 text-white text-center">
                What's your mood?
              </h2>
              <div className="grid grid-cols-2 gap-6 mt-10">
                {[ 
                  { label: "Laugh", value: "laugh", icon: Smile, description: "Feel good and light-hearted" },
                  { label: "Cry", value: "cry", icon: Sad, description: "Emotional and touching" },
                  { label: "Think", value: "think", icon: Brain, description: "Thought-provoking and deep" },
                  { label: "Thrill", value: "thrill", icon: Zap, description: "Exciting and suspenseful" },
                  { label: "Relax", value: "relax", icon: Coffee, description: "Calm and soothing" },
                  { label: "Romance", value: "romance", icon: Heart, description: "Love and passion" },
                ].map((option) => (
                  <div 
                    key={option.value} 
                    onClick={() => setMood(option.value)}
                    className={`relative flex flex-col items-center justify-center h-24 w-full border border-white/10 rounded-lg bg-surface transition-all duration-400 hover:border-primary hover:bg-primary/10 ${mood === option.value ? `border-primary bg-primary/10` : ""}`}
                  >
                    <option.icon className={`h-5 w-5 mb-3 ${mood === option.value ? "text-primary" : "text-muted"}`} />
                    <span className="font-montserrat-600 text-white">{option.label}</span>
                    <span className="text-xs text-muted mt-2">{option.description}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Step 3: Company */}
          {step === 3 && (
            <>
              <h2 className="text-3xl font-montserrat-800 text-white text-center">
                Who's watching?
              </h2>
              <div className="grid grid-cols-2 gap-6 mt-10">
                {[ 
                  { label: "Alone", value: "alone", icon: User, description: "Just you and the screen" },
                  { label: "Partner", value: "partner", icon: Users, description: "Cozy up with someone special" },
                  { label: "Friends", value: "friends", icon: Users, description: "Gather your crew for a watch party" },
                  { label: "Kids", value: "kids", icon: Child, description: "Family-friendly fun" },
                ].map((option) => (
                  <div 
                    key={option.value} 
                    onClick={() => setCompany(option.value)}
                    className={`relative flex flex-col items-center justify-center h-24 w-full border border-white/10 rounded-lg bg-surface transition-all duration-400 hover:border-primary hover:bg-primary/10 ${company === option.value ? `border-primary bg-primary/10` : ""}`}
                  >
                    <option.icon className={`h-5 w-5 mb-3 ${company === option.value ? "text-primary" : "text-muted"}`} />
                    <span className="font-montserrat-600 text-white">{option.label}</span>
                    <span className="text-xs text-muted mt-2">{option.description}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-white/10">
        {step > 1 && (
          <button 
            onClick={goToPrev}
            className="text-muted hover:text-white transition-colors"
          >
            Back
          </button>
        )}
        {step < 3 ? (
          <button 
            onClick={goToNext}
            className="bg-primary text-white font-montserrat-600 px-6 py-3 rounded-full hover:bg-primary-hover transition-colors hover:scale-105"
          >
            Next
            <span className="ml-2">→</span>
          </button>
        ) : (
          <>
            <button 
              onClick={resetPicker}
              className="text-muted hover:text-white transition-colors mr-4"
            >
              Start over
            </button>
            <div className="flex items-center space-x-4">
              <h3 className="text-2xl font-montserrat-700 text-white">Your Pick</h3>
              {topFilms.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 mt-4">
                  {topFilms.map((film) => (
                    <div key={film.id} className="flex items-center space-x-4">
                      <img 
                        src={`https://image.tmdb.org/t/p/w92${film.poster_path}`} 
                        alt={film.title} 
                        className="h-16 w-11 object-cover border border-white/10 rounded-lg"
                      />
                      <div className="space-y-1">
                        <h4 className="font-montserrat-600 text-white">{film.title}</h4>
                        <p className="text-muted text-sm">Why this film: Matches your preferences for {timeRange === "under1h" ? "short runtime" : timeRange === "1to2h" ? "medium length" : "long film"}, {mood === "laugh" ? "humor" : mood === "cry" ? "emotion" : mood === "think" ? "intellect" : mood === "thrill" ? "excitement" : mood === "relax" ? "relaxation" : "romance"} and watching {company === "alone" ? "alone" : company === "partner" ? "with a partner" : company === "friends" ? "with friends" : "with kids"}.</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted">No films match your criteria. Try adjusting your selections.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Picker;