import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-red-700 text-white p-4 flex justify-between">
    <h1 className="text-xl font-bold">Dotmot Hotel</h1>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/rooms">Rooms</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/booking">Booking</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
