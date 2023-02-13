import React from "react";
import { Link } from "react-router-dom";


export default function LandingPage() {
  return (
    <div className="bg-purple-900  flex justify-left w-screen h-screen">
      <h1  className="text-white ">Encontra los mejores vinos de Mendoza </h1>
      <Link to="/home">
        <button type="submit" className="bg-purple-700 px-5 py-2 rounded-lg mt-3 text-white
         hover:bg-purple-300" >Comenza
         </button>
      </Link>
    </div>
  );
}