import React from "react";
import NavBar from "../components/NavBar";
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions";


export default function Login() {

  const dispatch = useDispatch();

  const [input, setInput] = useState({
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
    dispatch(login(input))
    
    alert('¡Usuario registrado!')
    //navigator("/home")
  };

  return (
    <div className="bg-purple-900 w-screen h-screen">
      <NavBar/>
      <div className="w-full h-full pt-10 pb-44 bg-slate-800">
        <div class="mx-auto w-96 px-4 py-8 bg-slate-500   rounded-md">
          <div class="mx-auto max-w-lg text-center">
            <h1 class="text-2xl font-bold sm:text-3xl">Log In </h1>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label for="mail" className="sr-only">
                mail
              </label>
              <div class="relative">
                <input
                  value={input.mail}
                  onChange={handleInputChange}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="mail"
                  name="mail"
                />
              </div>
            </div>
            <div>
              <label for="password" class="sr-only">
                Password
              </label>
              <div class="relative">
                <input
                  value={input.password}
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="password"
                />
              </div>
            </div>

            <div class="flex items-center justify-between">
              <button
                type="submit"
                class="rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Log In
              </button>
            </div>
            <p>
              if you don´t have an account{" "}
              <Link className="text-white" href="/signin">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}