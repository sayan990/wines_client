import axios from "axios";
import {GET_ALL_WINES} from "../Types"

export function getAllWines(query) {
  return function (dispatch) {
    axios.get("http://localhost:3001/api/home" + query).then((response) => {
      dispatch({ type: GET_ALL_WINES, payload: response.data });
    });
  };
}

