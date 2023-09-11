import React from "react";
import NavBar from "../components/NavBar";
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions";
import { Navigate } from "react-router-dom";



export default function SingIn() {
  //const navigator = Navigate()
  const dispatch = useDispatch();

    const [input, setInput] = useState({
        name: "",
        lastName: "",
        country: "",
        state: "",
        street: "",
        streetNum: "",
        depto: false,
        celNum: "",
        postalCode: 0,
        mail: "",
        password: "",
      });

      const handleInputChange = (event) => {
        setInput({
          ...input,
          [event.target.name]: event.target.value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(register(input))
        
        alert('¡Usuario registrado!')
        //navigator("/home")
      };

  return (
    <div >
      <NavBar/>
      <div className="flex flex-wrap w-screen h-screen bg-slate-800 p-10">
        <div className="mx-auto w-96 px-4 py-8 bg-slate-500   rounded-md">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Sign In </h1>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label htmlFor="User" className="sr-only">
                User
              </label>
              <div className="relative">
                <input
                  value={input.name}
                  onChange={handleInputChange}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="User"
                  name="name"
                />
              </div>
            </div>
            <div>
              <label for="Mail" class="sr-only">
                Mail
              </label>
              <div class="relative">
                <input
                  value={input.mail}
                  onChange={handleInputChange}
                  type="text"
                  name="mail"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Mail"
                />
              </div>
            </div>
            <div>
              <label for="Password" class="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  value={input.password}
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <label htmlFor="lastName" className="sr-only">
              lastName
              </label>
              <div className="relative">
                <input
                  value={input.lastName}
                  onChange={handleInputChange}
                  type="text"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="lastName"
                  name="lastName"
                />
              </div>
            </div>
            <div>
              <label htmlFor="country" className="sr-only">
              country
              </label>
              <div className="relative">
                <input
                  value={input.country}
                  onChange={handleInputChange}
                  type="text"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="country"
                  name="country"
                />
              </div>
            </div>
            <div>
              <label htmlFor="state" className="sr-only">
              state
              </label>
              <div className="relative">
                <input
                  value={input.state}
                  onChange={handleInputChange}
                  type="text"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="state"
                  name="state"
                />
              </div>
            </div>
            <div>
              <label htmlFor="streetNum" className="sr-only">
              streetNum
              </label>
              <div className="relative">
                <input
                  value={input.streetNum}
                  onChange={handleInputChange}
                  type="text"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="streetNum"
                  name="streetNum"
                />
              </div>
            </div>
            <div>
              <label htmlFor="street" className="sr-only">
              street
              </label>
              <div className="relative">
                <input
                  value={input.street}
                  onChange={handleInputChange}
                  type="text"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="street"
                  name="street"
                />
              </div>
            </div>
            <div>
              <label htmlFor="celNum" className="sr-only">
              celNum
              </label>
              <div className="relative">
                <input
                  value={input.celNum}
                  onChange={handleInputChange}
                  type="text"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="celNum"
                  name="celNum"
                />
              </div>
            </div>
            <div>
              <label htmlFor="depto" className="sr-only">
              depto
              </label>
              <div className="relative">
                <input
                  value={input.depto}
                  onChange={handleInputChange}
                  type="text"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="depto"
                  name="depto"
                />
              </div>
            </div>
            <div>
              <label htmlFor="postalCode" className="sr-only">
              postalCode
              </label>
              <div className="relative">
                <input
                  value={input.postalCode}
                  onChange={handleInputChange}
                  type="text"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="postalCode"
                  name="postalCode"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Sign In
              </button>
            </div>
            <p>
              you already have an account?{" "}
              <Link className="text-white" href="/login">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}