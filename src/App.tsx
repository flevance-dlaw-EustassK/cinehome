import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// Import other pages as we create them
import Catalog from "./pages/Catalog";
import MovieCard from "./pages/MovieCard";
import Picker from "./pages/Picker";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="pt-16 pb-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/film/:id" element={<MovieCard />} />
            <Route path="/picker" element={<Picker />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;