import React from "react";
import { useDispatch } from "react-redux";
import { applyFilters } from "../actions";

export default function Filters() {
  const dispatch = useDispatch();
  let filtros = {};

  const handleFilterChange = () => {
    dispatch(applyFilters(filtros));
  };

  const handleDeleteFilter = () => {
    filtros = {};
    console.log(filtros);
  };

  const handleSelect = (e) => {
    const { name, value } = e.target;
    filtros = { ...filtros, [name]: value };
  };

  return (
    <>
      <div className="flex justify-center bg-purple-800">
        <select
          name="brand"
          onChange={handleSelect}
          className="rounded-md grid m-4 grid-flow-row px-4"
        >
          <option value="none" name="brand" defaultValue="none">
            Bodega
          </option>
          <option value="malbec" name="brand">
            Malbec
          </option>
          <option value="cabernet" name="brand">
            Cabernet
          </option>
        </select>
        <select
          onChange={handleSelect}
          className="rounded-md grid m-4 px-4"
          name="type"
        >
          <option value="none" name="type" defaultValue="none">
            Tipo
          </option>
          <option value="tinto" name="type">
            Tinto
          </option>
          <option value="blanco" name="type">
            Blanco
          </option>
        </select>

        <button
          onClick={handleFilterChange}
          className="bg-purple-900 ml-1 mb-2 px-5 py-2 rounded-lg mt-3 text-white
         hover:bg-purple-300"
        >
          Aplicar filtros
        </button>
        <button
          onClick={handleDeleteFilter}
          className="bg-purple-900 ml-1 mb-2 px-5 py-2 rounded-lg mt-3 text-white
         hover:bg-purple-300"
        >
          Borrar filtros
        </button>
      </div>
    </>
  );
}
