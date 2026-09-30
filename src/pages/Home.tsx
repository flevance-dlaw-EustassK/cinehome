import React from "react";
import { Link } from "react-router-dom";
import { 
  Smile, Sad, Brain, Zap, Coffee, Heart,
  FilmPopcorn, PlayCircle, 
} from "lucide-react";
import { mockFilms } from "../data/mockFilms";

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[100vh] w-full flex items-start justify-start px-6 pt-16 pb-20 overflow-hidden">
        {/* Background image - using a placeholder from mock films */}
        <div className="absolute inset-0">
          <img 
            src={`https://image.tmdb.org/t/p/original${mockFilms[0].backdrop_path}`} 
            alt="Background" 
            className="object-cover w-full h-full"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>
        
        <div className="relative z-10 flex-1 max-w-2xl space-y-6">
          <span className="text-primary-light text-xs font-montserrat-600 letter-spacing-wide uppercase">
            PERSONAL CINEMA
          </span>
          <h1 className="text-5xl md:text-7xl font-montserrat-800 leading-tight text-white">
            Find the perfect film for tonight
          </h1>
          <p className="text-xl text-muted max-w-xl">
            Your personal cinema awaits. Discover films that match your mood, time, and company.
          </p>
          <div className="flex space-x-4">
            <Link 
              to="/picker" 
              className="bg-primary text-white font-montserrat-600 px-6 py-3 rounded-full hover:bg-primary-hover transition-colors hover:scale-105 flex items-center space-x-2"
            >
              Pick a Movie
              <PlayCircle className="h-4 w-4" />
            </Link>
            <Link 
              to="/catalog" 
              className="border border-white/20 text-white font-montserrat-600 px-6 py-3 rounded-full hover:bg-white/10 transition-colors hover:scale-105 flex items-center space-x-2"
            >
              Browse Library
              <FilmPopcorn className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tonight's Mood */}
      <section className="py-20 px-6">
        <div className="flex items-start space-x-4">
          <span className="text-primary text-xs font-montserrat-600 letter-spacing-wide uppercase mt-0.5">
            MOOD
          </span>
          <h2 className="text-2xl font-montserrat-700 text-white">
            Tonight's Mood
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {/* Mood cards */}
          {[ 
            { icon: Smile, label: "Laugh", color: "text-primary" },
            { icon: Sad, label: "Cry", color: "text-primary" },
            { icon: Brain, label: "Think", color: "text-primary" },
            { icon: Zap, label: "Thrill", color: "text-primary" },
            { icon: Coffee, label: "Relax", color: "text-primary" },
            { icon: Heart, label: "Romance", color: "text-primary" },
          ].map((mood, index) => (
            <div 
              key={index} 
              className={`relative flex h-16 w-full items-center justify-center border border-white/10 rounded-lg bg-surface transition-all duration-400 hover:border-primary hover:bg-primary/10 hover:${mood.color} hover:text-primary`}
            >
              <mood.icon className={`h-5 w-5 transition-all duration-400 ${mood.color}`} />
              <span className="ml-3 text-white font-montserrat-600">{mood.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 px-6">
        <div className="flex items-start space-x-4 mb-10">
          <span className="text-primary text-xs font-montserrat-600 letter-spacing-wide uppercase mt-0.5">
            COLLECTION
          </span>
          <h2 className="text-2xl font-montserrat-700 text-white">
            Featured in your library
          </h2>
        </div>
        <div className="relative h-64">
          <div className="overflow-x-hidden">
            <div className="flex space-x-4 scroll-smooth snap-x snap-mandatory">
              {mockFilms.slice(0, 8).map((film) => (
                <div 
                  key={film.id} 
                  className="flex-shrink-0 w-64 snap-center border border-white/10 rounded-lg overflow-hidden bg-surface transition-all duration-400 hover:-translate-y-1 hover:shadow-lg"
                >
                  <img 
                    src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} 
                    alt={film.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="flex items-start space-x-4 mb-10">
          <span className="text-primary text-xs font-montserrat-600 letter-spacing-wide uppercase mt-0.5">
            HOW
          </span>
          <h2 className="text-2xl font-montserrat-700 text-white">
            How It Works
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {[0, 1, 2].map((step) => (
            <div key={step} className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-12 w-12 items-center justify-center bg-primary/10 rounded-full">
                <span className="text-primary text-3xl font-montserrat-800">{step + 1}</span>
              </div>
              <h3 className="text-xl font-montserrat-700 text-white">
                {step === 0 ? "Choose your mood" : step === 1 ? "Set your time" : "Pick your company"}
              </h3>
              <p className="text-muted text-center max-w-md">
                {step === 0 
                  ? "Tell us how you're feeling - whether you want to laugh, cry, think, or feel thrilled." 
                  : step === 1 
                  ? "Select how much time you have available for your movie night." 
                  : "Let us know who you're watching with - alone, partner, friends, or family."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          <div className="flex flex-col items-center space-y-3">
            <span className="text-4xl font-montserrat-800 text-white">1,240</span>
            <span className="text-muted font-montserrat-600">films</span>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <span className="text-4xl font-montserrat-800 text-white">8.7</span>
            <span className="text-muted font-montserrat-600">avg rating</span>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <span className="text-4xl font-montserrat-800 text-white">312</span>
            <span className="text-muted font-montserrat-600">nights</span>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <span className="text-4xl font-montserrat-800 text-white">24</span>
            <span className="text-muted font-montserrat-600">genres</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;