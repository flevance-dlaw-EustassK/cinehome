import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  SlidersHorizontal, 
  Search, 
  SortAsc, 
  X, 
  Plus,
  ChevronDown,
} from "lucide-react";
import { mockFilms } from "../data/mockFilms";

const Catalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<[number, number]>([1900, new Date().getFullYear()]);
  const [selectedRatings, setSelectedRatings] = useState<[number, number]>([0, 10]);
  const [sortBy, setSortBy] = useState("title"); // title, rating, year

  // Get all unique genres from mock films
  const allGenres = Array.from(new Set(mockFilms.flatMap(film => film.genres.map(g => g.name))));

  // Filter films
  const filteredFilms = mockFilms.filter(film => {
    // Search
    if (searchTerm && !film.title.toLowerCase().includes(searchTerm.toLowerCase()) && !film.original_title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    // Genres
    if (selectedGenres.length > 0 && !film.genres.some(g => selectedGenres.includes(g.name))) {
      return false;
    }
    // Years
    const year = new Date(film.release_date).getFullYear();
    if (year < selectedYears[0] || year > selectedYears[1]) {
      return false;
    }
    // Ratings
    const rating = film.vote_average;
    if (rating < selectedRatings[0] || rating > selectedRatings[1]) {
      return false;
    }
    return true;
  });

  // Sort films
  const sortedFilms = [...filteredFilms].sort((a, b) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "rating") {
      return b.vote_average - a.vote_average;
    } else if (sortBy === "year") {
      return new Date(b.release_date).getTime() - new Date(a.release_date).getTime();
    }
    return 0;
  });

  return (
    <div className="flex min-h-[calc(100vh-16px)]">
      {/* Sidebar */}
      <aside className="w-72 bg-surface border-r border-white/10 p-6 flex flex-col space-y-8">
        <div className="flex items-center space-x-3">
          <SlidersHorizontal className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-montserrat-700 text-white">Filters</h2>
        </div>
        
        {/* Search */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-muted" />
            <input
              type="text"
              placeholder="Search films..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent border-b border-white/10 text-white placeholder-muted focus:border-primary focus:outline-none"
            />
          </div>
        </div>

        {/* Genres */}
        <div className="space-y-4">
          <h3 className="text-sm font-montserrat-600 text-primary uppercase">Genre</h3>
          <div className="space-y-2">
            {allGenres.map((genre) => (
              <div key={genre} className="flex items-center space-x-3">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedGenres.includes(genre)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedGenres([...selectedGenres, genre]);
                      } else {
                        setSelectedGenres(selectedGenres.filter(g => g !== genre));
                      }
                    }}
                    className="h-4 w-4 text-primary border-white/20 rounded"
                  />
                  <span className="text-white">{genre}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Years */}
        <div className="space-y-4">
          <h3 className="text-sm font-montserrat-600 text-primary uppercase">Year</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-muted">{selectedYears[0]}</span>
              <input
                type="range"
                min={1900}
                max={new Date().getFullYear()}
                value={selectedYears[0]}
                onChange={(e) => setSelectedYears([Number(e.target.value), selectedYears[1]])}
                className="flex-1 h-1 bg-primary"
              />
              <span className="text-muted">{selectedYears[1]}</span>
            </div>
          </div>
        </div>

        {/* Ratings */}
        <div className="space-y-4">
          <h3 className="text-sm font-montserrat-600 text-primary uppercase">Rating</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-muted">{selectedRatings[0].toFixed(1)}</span>
              <input
                type="range"
                min={0}
                max={10}
                step={0.1}
                value={selectedRatings[0]}
                onChange={(e) => setSelectedRatings([Number(e.target.value), selectedRatings[1]])}
                className="flex-1 h-1 bg-primary"
              />
              <span className="text-muted">{selectedRatings[1].toFixed(1)}</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Search className="h-5 w-5 text-muted" />
            <input
              type="text"
              placeholder="Search films..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent border-b border-white/10 text-white placeholder-muted focus:border-primary focus:outline-none md:w-64"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSortBy(sortBy === "title" ? "rating" : sortBy === "rating" ? "year" : "title")}
              className="flex items-center space-x-2 text-muted hover:text-white transition-colors"
            >
              Sort by: 
              <span className="font-montserrat-600">{sortBy === "title" ? "Title" : sortBy === "rating" ? "Rating" : "Year"}</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <Link to="/picker" className="bg-primary text-white font-montserrat-600 px-4 py-2 rounded-full hover:bg-primary-hover transition-colors hover:scale-105">
              Pick a Movie
            </Link>
          </div>
        </div>

        {sortedFilms.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <FilmPopcorn className="h-12 w-12 text-muted" />
            <h3 className="text-xl font-montserrat-700 text-white mt-4">No films match your filters</h3>
            <p className="text-muted text-center max-w-md">Try adjusting your search or filters to find films.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {sortedFilms.map((film) => (
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
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-transparent to-bg-surface/90">
                    <h3 className="font-montserrat-600 text-white line-clamp-2">{film.title}</h3>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-muted text-sm">{new Date(film.release_date).getFullYear()}</span>
                      <div className="h-2 w-10 bg-primary rounded" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Catalog;