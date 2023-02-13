import React from "react";
import { Link } from "react-router-dom";


export default function LandingPage() {
  return (
    <div >
      <h1 >Wines`s Heaven</h1>
      <Link to="/home">
        <button type="submit" className="boton" >Start</button>
      </Link>
    </div>
  );
}