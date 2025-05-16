import React from "react";

const Booking = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Book a Room</h2>
    <form className="space-y-4 max-w-md">
      <input type="text" placeholder="Full Name" className="w-full p-2 border" />
      <input type="email" placeholder="Email" className="w-full p-2 border" />
      <input type="date" className="w-full p-2 border" />
      <input type="date" className="w-full p-2 border" />
      <select className="w-full p-2 border">
        <option>Standard Room</option>
        <option>Deluxe Room</option>
      </select>
      <button className="bg-red-700 text-white p-2">Book Now</button>
    </form>
  </div>
);

export default Booking;
