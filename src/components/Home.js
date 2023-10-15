import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllWines } from "../actions";
import AboutUs from "./AboutUs";
import Filters from "./Filters";
import Card from "./Card";

export default function Home() {

  const dispatch = useDispatch()
  const wines = useSelector(state => state)

  useEffect(() => {
    dispatch(getAllWines());
}, [dispatch])

  return (
    <div className="bg-purple-900 w-screen h-screen">
      <NavBar/>
      <Filters/>
      {wines && (wines.wines.length > 0) ? wines.wines.map((w) => 
        <Card id={w.id} img={w.image} name={w.name} brand={w.brand} price={w.price}/>
      ) : 
      <div>
      <h2 className="flex justify-center text-white text-5xl pt-52">Alguien se ah tomado todo el vino</h2>
      <p className="flex justify-center text-white text-xl pb-52">intente borrar los filtros</p>
      </div>
      }

      <AboutUs/>
    </div>
  );
}