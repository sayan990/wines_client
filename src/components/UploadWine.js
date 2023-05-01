import React, {useState} from "react";
import {postWine} from "../actions/index"
import { useDispatch, useSelector } from "react-redux";


export default function UploadWine({image}) {

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        Nombre: "",
        Marca: "",
        Precio: 1,
        Olor: "",
        Sabor: "",
        Tipo: "",
        Final: "",
        Imagen: image,
    })

    const handleInputChange = (event) => {
       console.log(event.target.value)
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postWine(input))
        console.log(input)
        alert('¡Producto cargado con exito!')
        setInput({
            Nombre: "",
            Marca: "",
            Precio: 1,
            Color: "",
            Olor: "",
            Sabor: "",
            Tipo: "",
            Final: "",
            Imagen: image,
        })
    }
    
  return (
    <div className="w-full h-full bg-slate-800 pt-8 pb-8">
    <div class="mx-auto w-96 px-4 py-8 bg-slate-500   rounded-md">
  <div class="mx-auto max-w-lg text-center">
    <h1 class="text-2xl font-bold sm:text-3xl">Subi tu vino </h1>
  </div>

  <form action="" onSubmit={handleSubmit} class="mx-auto mb-0 mt-8 max-w-md space-y-4">
    <div>
      <label for="Nombre" class="sr-only">Nombre</label>
      <div class="relative">
        <input
        onChange={handleInputChange}
          type="text"
          class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Nombre"
          name="Nombre"
        />
      </div>
    </div>
    <div>
      <label for="Marca" class="sr-only">Marca</label>
      <div class="relative">
        <input
        onChange={handleInputChange}
          type="text"
          name="Marca"
          class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Marca"
        />  
      </div>
    </div>
    <div>
      <label for="Precio" class="sr-only">Precio</label>
      <div class="relative">
        <input
        onChange={handleInputChange}
          name="Precio"
          class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Precio"
        />
      </div>
    </div>
    <div>
      <label for="Color" class="sr-only">Color</label>
      <div class="relative">
        <input
        onChange={handleInputChange}
          type="text"
          name="Color"
          class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Color"
        />
      </div>
    </div>
    <div>
      <label for="Olor" class="sr-only">Olor</label>
      <div class="relative">
        <input
        onChange={handleInputChange}
        name="Olor"
          type="text"
          class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Olor"
        />
      </div>
    </div>
    <div>
      <label for="Sabor" class="sr-only">Sabor</label>
      <div class="relative">
        <input
        onChange={handleInputChange}
        name="Sabor"
          type="text"
          class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Sabor"
        />
      </div>
    </div>
    <div>
      <label for="Tipo" class="sr-only">Tipo</label>
      <div class="relative">
        <input
        onChange={handleInputChange}
        name="Tipo"
          type="text"
          class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Tipo"
        />
      </div>
    </div>
    <div>
      <label for="Final" class="sr-only">Final</label>
      <div class="relative">
        <input
        onChange={handleInputChange}
        name="Final"
          type="text"
          class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Final"
        />
      </div>
    </div>
    <div>
      <div class="relative">
        <a href={image} target="_blank">Tu imagen subida</a>
      </div>
    </div>
    
    <div class="flex items-center justify-between">
      <button
        type="submit"
        onClick={handleSubmit}
        class="rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
      >
        Subir Vino
      </button>
    </div>
  </form>
</div>
</div>
  );
}