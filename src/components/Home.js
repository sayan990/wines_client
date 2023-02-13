import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllWines } from "../actions";
import AboutUs from "./AboutUs";


export default function Home() {

  const dispatch = useDispatch()
  const wines = useSelector(state => state)

  useEffect(() => {
    dispatch(getAllWines());
}, [dispatch])




  return (
    <div className="bg-purple-900 w-screen h-screen">
      <NavBar/>
      
      {wines.length < 0 ? wines.map(() => {

      }) : <p>no tengo vinos sadge</p>}

      <AboutUs/>
    </div>
  );
}