import axios from "axios";
import {GET_ALL_WINES} from "../Types"

export function getAllWines() {
  return function (dispatch) {
    axios.get("http://localhost:3001/api/home").then((response) => {
      dispatch({ type: GET_ALL_WINES, payload: response.data });
    });
  };
}

export function postWine(payload) {
  let post = {
    name: payload.Nombre,
    image: payload.Imagen,
    brand: payload.Marca,
    price: payload.Precio,
    color: payload.Color,
    smell: payload.Olor,
    flavor: payload.Sabor,
    type: payload.Tipo,
    end: payload.Final,
  };
  return function () {
    axios.post("http://localhost:3001/api/createWine", post);
  };
}