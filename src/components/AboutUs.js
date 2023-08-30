import React from "react";



export default function AboutUs() {
  return (
    <div className=" bg-gray-900 flex  justify-center   ">
      <h1  className="text-white text-xl flex font-semibold text-center p-10">Contactanos </h1>
    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
        <li className="relative rounded-md p-3 ">
        <div className="flex flex-row">
        <h3 className="text-sm font-medium ">Mail:</h3>
        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
        <li className="relative rounded-md p-3 text-base">maximilianocaceres1601@gmail.com</li>
        </ul>
        </div>
        </li>
        
    </ul>
    </div>
  );
}