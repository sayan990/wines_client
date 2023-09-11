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


console.log(wines)

  return (
    <div className="bg-purple-900 w-screen h-screen">
      <NavBar/>
      <Filters/>
      {wines && wines.wines ? wines.wines.map((w) => 
        <Card img={w.image} name={w.name} brand={w.brand} price={w.price}/>
      ) : <p>no tengo vinos sadge</p>}

      <AboutUs/>
    </div>
  );
}