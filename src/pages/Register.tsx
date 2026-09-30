import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Lock, 
  UserPlus, 
} from "lucide-react";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    // In a real app, we would register the user here
    alert("Account created successfully!");
    // We would normally redirect to login or home
  };

  return (
    <div className="min-h-[calc(100vh-16px)] flex items-center justify-center px-6">
      {/* Background - using a blurred poster collage */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-black/80" />
      </div>
      
      <div className="relative z-10 w-full max-w-md space-y-8">
        <div className="flex items-center justify-center space-x-4">
          <FilmPopcorn className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-montserrat-800 text-white">CineHome</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-surface/50 backdrop-blur-sm p-8 rounded-lg border border-white/10">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <UserPlus className="h-4 w-4 text-muted" />
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 bg-transparent border-b border-white/10 text-white placeholder-muted focus:border-primary focus:outline-none"
                required
              />
            </div>
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
            <div className="flex items-center space-x-3">
              <Lock className="h-4 w-4 text-muted" />
              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="flex-1 bg-transparent border-b border-white/10 text-white placeholder-muted focus:border-primary focus:outline-none"
                required
              />
            </div>
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
            Create Account
          </button>
        </form>
        
        <div className="text-center text-muted space-y-4">
          <p>Already have an account?</p>
          <Link 
            to="/login" 
            className="bg-primary text-white font-montserrat-600 px-6 py-3 rounded-full hover:bg-primary-hover transition-colors hover:scale-105"
          >
            Sign In
          </Link>
        </div>
        
        <div className="text-center text-xs text-muted">
          By creating an account, you agree to our Terms of Service and Privacy Policy.
        </div>
      </div>
    </div>
  );
};

export default Register;