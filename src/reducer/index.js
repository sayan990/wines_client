import {
  GET_ALL_WINES
} from "../Types"


  const initialState = {
    wines: []
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case GET_ALL_WINES:
        return { ...state, wines: action.payload };
    }
  }
  
  export default reducer;