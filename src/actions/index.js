import axios from "axios";
import {GET_ALL_WINES} from "../Types"

export function getAllWines() {
  return function (dispatch) {
    axios.get("http://localhost:3001/api/home").then((response) => {
      dispatch({ type: GET_ALL_WINES, payload: response.data });
    });
  };
}

