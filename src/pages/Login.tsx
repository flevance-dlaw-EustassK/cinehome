import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Lock, 
  CircleHelp, 
} from "lucide-react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    // In a real app, we would authenticate here
    // For now, we'll just redirect to home
    alert("Logged in successfully!");
    // We would normally use navigate, but for simplicity we'll just alert
  };

  return (
    <div className="min-h-[calc(100vh-16px)] flex items-center justify-center px-6">
      {/* Background - using a blurred poster collage */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-black/80" />
        {/* We could add multiple blurred posters here */}
      </div>
      
      <div className="relative z-10 w-full max-w-md space-y-8">
        <div className="flex items-center justify-center space-x-4">
          <FilmPopcorn className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-montserrat-800 text-white">CineHome</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-surface/50 backdrop-blur-sm p-8 rounded-lg border border-white/10">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-muted" />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border-b border-white/10 text-white placeholder-muted focus:border-primary focus:outline-none"
                required
              />
            </div>
            <div className="flex items-center space-x-3">
              <Lock className="h-4 w-4 text-muted" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 bg-transparent border-b border-white/10 text-white placeholder-muted focus:border-primary focus:outline-none"
                required
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.value)}
                className="h-4 w-4 text-primary border-white/20 rounded"
              />
              <span className="text-muted">Remember me</span>
            </div>
            <Link 
              to="/register" 
              className="text-muted hover:text-white transition-colors text-sm"
            >
              Forgot password?
            </Link>
          </div>
          
          {error && (
            <div className="bg-destructive/20 text-destructive-foreground px-4 py-2 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <button 
            type="submit"
            className="w-full bg-primary text-white font-montserrat-600 py-3 rounded-full hover:bg-primary-hover transition-colors hover:scale-105"
          >
            Sign In
          </button>
        </form>
        
        <div className="text-center text-muted space-y-4">
          <p>Don't have an account?</p>
          <Link 
            to="/register" 
            className="bg-primary text-white font-montserrat-600 px-6 py-3 rounded-full hover:bg-primary-hover transition-colors hover:scale-105"
          >
            Create Account
          </Link>
        </div>
        
        <div className="text-center text-xs text-muted">
          By signing in, you agree to our Terms of Service and Privacy Policy.
        </div>
      </div>
    </div>
  );
};

export default Login;