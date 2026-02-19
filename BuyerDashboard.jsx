  import API from "../api";

import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FarmerCard from "../pages/FarmerCard";

function BuyerDashboard() {
  const [product, setProduct] = useState("");
  const [location, setLocation] = useState("");
  const [farmers, setFarmers] = useState([]);
const navigate = useNavigate();

useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
  }
}, [navigate]);

const searchFarmers = async () => {
  try {
    const res = await API.get(
      `/products/farmers?product=${product}&location=${location}`
    );
    setFarmers(res.data);
  } catch (err) {
    console.error(err);
  }
};


  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Buyer Dashboard</h1>
        <p className="text-sm opacity-90">Find fresh products from farmers</p>
      </div>

      {/* Search Section */}
      <div className="max-w-6xl mx-auto bg-white p-6 mt-6 rounded-xl shadow-lg">
        <div className="grid md:grid-cols-3 gap-4">

          <select
            className="p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
            onChange={(e) => setProduct(e.target.value)}
          >
            <option value="">Select Product</option>
            <option value="Tomato">Tomato</option>
            <option value="Onion">Onion</option>
            <option value="Rice">Rice</option>
          </select>

          <input
            type="text"
            placeholder="Enter Location"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
            onChange={(e) => setLocation(e.target.value)}
          />

          <button
            onClick={searchFarmers}
            className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
          >
            Search Farmers
          </button>

        </div>
      </div>

      {/* Farmer Cards */}
      <div className="max-w-6xl mx-auto mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {farmers.map((farmer) => (
          <FarmerCard key={farmer.id} farmer={farmer} />
        ))}
      </div>

    </div>
  );
}

export default BuyerDashboard;
