import React, {useEffect} from "react";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getWineDetail } from "../actions";

export default function Detail() {
    const {id} = useParams()    
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(getWineDetail(id))
    },[dispatch])

    const {name, image, brand, price, type} = useSelector(state => state.wineDet)

    console.log(name)

  return (
    <div className="bg-purple-900">
      <NavBar/>
      <div className="flex justify-around">
      <img className="w-52 h-96 rounded-md m-32 bg-slate-500" src={image}/>
      <div className="bg-slate-500 my-12 p-10 px-28 rounded-lg">
        <div className="flex flex-col">
        <h2 className="text-white text-5xl font-semibold mb-20">{name}</h2>
        <h3 className="text-white text-xl py-10">{`Bodega: ${brand}`}</h3>
        <h3 className="text-white text-xl py-10">{`Tipo : ${type}`}</h3>
        <h3 className="text-white text-xl py-10">{`$ ${price}`}</h3>
        </div>
      </div>
      </div>
    </div>
  );
}