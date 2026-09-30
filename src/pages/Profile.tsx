import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FilmPopcorn, 
  Bookmark, 
  History, 
  BarChart2, 
  User, 
  ChevronDown,
  Edit2,
  LogOut,
} from "lucide-react";
import { mockFilms } from "../data/mockFilms";

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("library");
  const [userName, setUserName] = useState("Alex Johnson");
  const [memberSince, setMemberSince] = useState("2026");

  // Mock data for tabs
  const watchlist = mockFilms.slice(0, 4);
  const history = mockFilms.slice(4, 8);
  const ratings = mockFilms.slice(8, 12).map((film, index) => ({
    film,
    rating: 8.5 - index * 0.5,
  }));

  return (
    <div className="min-h-[calc(100vh-16px)] relative">
      {/* Cover Image */}
      <div className="relative h-48 bg-background">
        <img 
          src={`https://image.tmdb.org/t/p/original${mockFilms[0].backdrop_path}`} 
          alt="Cover" 
          className="object-cover w-full h-full"
        />
        {/* Gradient overlay for cover */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
      </div>

      {/* Avatar and Info */}
      <div className="relative mt-16 flex flex-col items-center">
        {/* Avatar */}
        <div className="relative h-24 w-24">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" 
            alt="Avatar" 
            className="object-cover w-full h-full rounded-full border-4 border-surface/80"
          />
          {/* Edit avatar button */}
          <button 
            className="absolute bottom-0 right-0 bg-primary/90 rounded-full flex h-8 w-8 items-center justify-center hover:bg-primary-hover transition-colors"
          >
            <Edit2 className="h-4 w-4 text-white" />
          </button>
        </div>

        <div className="mt-6 text-center">
          <h1 className="text-2xl font-montserrat-800 text-white">{userName}</h1>
          <p className="text-muted">Member since {memberSince}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16 flex space-x-4 border-b border-white/10">
        <button 
          onClick={() => setActiveTab("library")}
          className={`flex-1 py-4 text-center font-montserrat-600 text-${activeTab === "library" ? "white" : "muted"} border-b-2 ${activeTab === "library" ? "border-primary" : "transparent"} hover:text-white transition-colors`}
        >
          My Library
          <FilmPopcorn className="ml-2 h-4 w-4" />
        </button>
        <button 
          onClick={() => setActiveTab("watchlist")}
          className={`flex-1 py-4 text-center font-montserrat-600 text-${activeTab === "watchlist" ? "white" : "muted"} border-b-2 ${activeTab === "watchlist" ? "border-primary" : "transparent"} hover:text-white transition-colors`}
        >
          Watchlist
          <Bookmark className="ml-2 h-4 w-4" />
        </button>
        <button 
          onClick={() => setActiveTab("history")}
          className={`flex-1 py-4 text-center font-montserrat-600 text-${activeTab === "history" ? "white" : "muted"} border-b-2 ${activeTab === "history" ? "border-primary" : "transparent"} hover:text-white transition-colors`}
        >
          History
          <History className="ml-2 h-4 w-4" />
        </button>
        <button 
          onClick={() => setActiveTab("ratings")}
          className={`flex-1 py-4 text-center font-montserrat-600 text-${activeTab === "ratings" ? "white" : "muted"} border-b-2 ${activeTab === "ratings" ? "border-primary" : "transparent"} hover:text-white transition-colors`}
        >
          Ratings
          <BarChart2 className="ml-2 h-4 w-4" />
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-10 px-6">
        {activeTab === "library" && (
          <div className="space-y-6">
            <h2 className="text-xl font-montserrat-700 text-white mb-4">My Collection</h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {mockFilms.slice(0, 6).map((film) => (
                <Link 
                  key={film.id} 
                  to={`/film/${film.id}`} 
                  className="group"
                >
                  <div className="relative border border-white/10 rounded-lg overflow-hidden bg-surface transition-all duration-400 hover:-translate-y-1 hover:shadow-lg">
                    <img 
                      src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} 
                      alt={film.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50">
                      <span className="text-xs text-muted">{new Date(film.release_date).getFullYear()}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {activeTab === "watchlist" && (
          <div className="space-y-6">
            <h2 className="text-xl font-montserrat-700 text-white mb-4">Watchlist</h2>
            {watchlist.length === 0 ? (
              <p className="text-muted">Your watchlist is empty. Add films to watch later.</p>
            ) : (
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                {watchlist.map((film) => (
                  <Link 
                    key={film.id} 
                    to={`/film/${film.id}`} 
                    className="group"
                  >
                    <div className="relative border border-white/10 rounded-lg overflow-hidden bg-surface transition-all duration-400 hover:-translate-y-1 hover:shadow-lg">
                      <img 
                        src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} 
                        alt={film.title} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50">
                        <span className="text-xs text-muted">{new Date(film.release_date).getFullYear()}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "history" && (
          <div className="space-y-6">
            <h2 className="text-xl font-montserrat-700 text-white mb-4">Watch History</h2>
            {history.length === 0 ? (
              <p className="text-muted">You haven't watched any films yet.</p>
            ) : (
              <div className="space-y-4">
                {history.map((film) => (
                  <div key={film.id} className="flex items-center space-x-4 py-4 border-b border-white/10">
                    <img 
                      src={`https://image.tmdb.org/t/p/w92${film.poster_path}`} 
                      alt={film.title} 
                      className="h-12 w-9 object-cover border border-white/10 rounded-lg"
                    />
                    <div className="flex-1 space-x-4">
                      <h3 className="font-montserrat-600 text-white">{film.title}</h3>
                      <p className="text-muted text-sm">{new Date(film.release_date).getFullYear()} • {film.genres.slice(0, 2).map(g => g.name).join(", ")}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-primary font-montserrat-600">{film.vote_average.toFixed(1)}</span>
                      <Star className="h-4 w-4" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "ratings" && (
          <div className="space-y-6">
            <h2 className="text-xl font-montserrat-700 text-white mb-4">My Ratings</h2>
            {ratings.length === 0 ? (
              <p className="text-muted">You haven't rated any films yet.</p>
            ) : (
              <div className="space-y-4">
                {ratings.map(({ film, rating }) => (
                  <div key={film.id} className="flex items-center space-x-4 py-4 border-b border-white/10">
                    <img 
                      src={`https://image.tmdb.org/t/p/w92${film.poster_path}`} 
                      alt={film.title} 
                      className="h-12 w-9 object-cover border border-white/10 rounded-lg"
                    />
                    <div className="flex-1 space-x-4">
                      <h3 className="font-montserrat-600 text-white">{film.title}</h3>
                      <p className="text-muted text-sm">{new Date(film.release_date).getFullYear()} • {film.genres.slice(0, 2).map(g => g.name).join(", ")}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className={`h-4 w-4 ${star <= rating ? "text-primary" : "text-muted"}`} 
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-muted">({rating}/5)</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Sign Out Button */}
      <div className="absolute bottom-6 right-6">
        <button 
          onClick={() => alert("Signed out!")}
          className="bg-primary text-white font-montserrat-600 px-4 py-2 rounded-full hover:bg-primary-hover transition-colors hover:scale-105 flex items-center space-x-2"
        >
          Sign Out
          <LogOut className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Profile;