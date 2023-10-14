import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png"


export default function NavBar() {
  return (
    <div className="bg-purple-600  flex  justify-around ">
    <img src={logo} className="w-64 h-16"></img>
    <div>
    <input placeholder="buscar..." className="w-64 h-8 px-5 rounded-lg border-none mt-4" ></input>
    <button className="bg-purple-900 ml-1 mb-2 px-5 py-1 rounded-lg mt-3 text-white
         hover:bg-purple-300" >Buscar
         </button>
    </div>
    <Link to="/login">
        <button type="submit" className="bg-purple-700 px-5 py-2 rounded-lg mt-3 text-white
         hover:bg-purple-300" >
          Log in
          </button>
    </Link>

      
    </div>
  );
}