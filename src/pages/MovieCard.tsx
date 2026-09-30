import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Star, 
  PlayCircle, 
  UserPlus, 
  Bookmark, 
  ChevronRight,
  Calendar,
  Clock,
} from "lucide-react";
import { mockFilms } from "../data/mockFilms";

const MovieCard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const film = mockFilms.find(f => f.id === id);

  if (!film) {
    return <div>Film not found</div>;
  }

  const [rating, setRating] = useState(0);

  return (
    <div className="relative">
      {/* Backdrop */}
      <div className="relative h-[60vh]">
        <img 
          src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`} 
          alt={`${film.title} backdrop`} 
          className="object-cover w-full h-full"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mt-20 mx-6">
        {/* Poster */}
        <div className="absolute left-0 -mt-10 flex w-48">
          <img 
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} 
            alt={`${film.title} poster`} 
            className="w-full h-auto object-cover border border-white/10 rounded-lg shadow-lg"
          />
        </div>

        {/* Details */}
        <div className="ml-56 space-y-6">
          {/* Title and original title */}
          <div className="flex items-baseline space-x-4">
            <h1 className="text-4xl font-montserrat-800 leading-none text-white">{film.title}</h1>
            {film.original_title !== film.title && (
              <span className="text-muted text-lg font-open-sans-400 italic">{film.original_title}</span>
            )}
          </div>

          {/* Meta: Year, Duration, Genres */}
          <div className="flex flex-wrap space-x-4 text-muted">
            <span>{new Date(film.release_date).getFullYear()}</span>
            <span className="mx-2 h-1 w-1 bg-primary rounded-full" />
            <span>{Math.floor(film.runtime / 60)}h {film.runtime % 60}min</span>
            <span className="mx-2 h-1 w-1 bg-primary rounded-full" />
            {film.genres.map((genre, index) => (
              <span key={index} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">{genre.name}</span>
            ))}
          </div>

          {/* Big Rating */}
          <div className="flex items-baseline space-x-6">
            <div className="flex items-baseline space-x-2">
              <span className="text-6xl font-montserrat-800 text-primary">{film.vote_average.toFixed(1)}</span>
              <span className="text-muted text-lg">/10</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-primary" />
              <span className="text-muted">({film.vote_count.toLocaleString()} votes)</span>
            </div>
          </div>

          {/* Director and Cast */}
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <h3 className="text-muted font-montserrat-600 uppercase text-xs">DIRECTED BY</h3>
              <p className="text-white font-montserrat-600">{film.director}</p>
            </div>
            <div className="flex-1 space-x-4">
              <h3 className="text-muted font-montserrat-600 uppercase text-xs">CAST</h3>
              <div className="flex flex-wrap space-y-2">
                {film.cast.slice(0, 4).map((member) => (
                  <div key={member.id} className="flex items-center space-x-3">
                    <img 
                      src={`https://image.tmdb.org/t/p/w45${member.profile_path}`} 
                      alt={member.name} 
                      className="h-12 w-12 object-cover rounded-full border border-white/10"
                    />
                    <span className="text-white">{member.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="prose prose-lg max-w-2xl">
            <p className="text-muted">{film.overview}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button 
              onClick={() => alert("Marked as watched!")}
              className="flex-1 bg-primary text-white font-montserrat-600 py-3 rounded-full hover:bg-primary-hover transition-colors hover:scale-105 flex items-center justify-center space-x-2"
            >
              Mark as Watched
              <PlayCircle className="h-4 w-4" />
            </button>
            <button 
              onClick={() => alert("Added to watchlist!")}
              className="flex-1 border border-white/20 text-white font-montserrat-600 py-3 rounded-full hover:bg-white/10 transition-colors hover:scale-105 flex items-center justify-center space-x-2"
            >
              Add to Watchlist
              <Bookmark className="h-4 w-4" />
            </button>
            <div className="relative">
              <button 
                onClick={() => setRating(prev => prev === 0 ? 5 : 0)}
                className="flex items-center space-x-2 text-muted hover:text-white transition-colors"
              >
                Rate
                <Star className="h-4 w-4" />
                {rating > 0 && (
                  <span className="ml-2 text-primary font-montserrat-600">{rating}</span>
                )}
              </button>
              {rating > 0 && (
                <div className="absolute left-0 top-full mt-2 w-32 bg-primary/90 rounded-lg p-2 text-center text-white">
                  Rating saved!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Similar Films */}
      <div className="mt-20 px-6">
        <div className="flex items-start space-x-4 mb-6">
          <span className="text-primary text-xs font-montserrat-600 letter-spacing-wide uppercase mt-0.5">
            SIMILAR
          </span>
          <h2 className="text-2xl font-montserrat-700 text-white">
            Similar Films
          </h2>
        </div>
        <div className="relative h-64">
          <div className="overflow-x-hidden">
            <div className="flex space-x-4 scroll-smooth snap-x snap-mandatory">
              {/* Get similar films based on genres */}
              {mockFilms
                .filter((f) => f.id !== film.id && f.genres.some(g => film.genres.some(fg => fg.name === g.name)))
                .slice(0, 6)
                .map((similar) => (
                  <div 
                    key={similar.id} 
                    className="flex-shrink-0 w-48 snap-center border border-white/10 rounded-lg overflow-hidden bg-surface transition-all duration-400 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <img 
                      src={`https://image.tmdb.org/t/p/w500${similar.poster_path}`} 
                      alt={similar.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;