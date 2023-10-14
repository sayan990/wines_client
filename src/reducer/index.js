import {
  GET_ALL_WINES,
  SET_FILTERS
} from "../Types"


  const initialState = {
    wines: [],
    filters: {}
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case GET_ALL_WINES:
        return { ...state, wines: action.payload };
      case SET_FILTERS:{
        return {...state, filters: action.payload}
      }
    }
  }
  
  export default reducer;