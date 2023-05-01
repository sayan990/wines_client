import React from "react";



export default function AboutUs() {
  return (
    <div className=" bg-gray-900 flex  justify-center   ">
      <h1  className="text-white text-xl flex font-semibold text-center p-10">Contactanos </h1>
    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
        <li className="relative rounded-md p-3 ">
        <h3 className="text-sm font-medium leading-5">Mail:</h3>
        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
        <li className="relative rounded-md p-3 hover:bg-gray-100">maximilianocaceres1601@gmail.com</li>
        </ul>
        </li>
    </ul>
    </div>
  );
}