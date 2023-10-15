import {
  GET_ALL_WINES,
  SET_FILTERS,
  GET_WINE_BY_ID
} from "../Types"


  const initialState = {
    wines: [],
    filters: {},
    wineDet: {},
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case GET_ALL_WINES:
        return { ...state, wines: action.payload };
      case SET_FILTERS:{
        return {...state, filters: action.payload}
      }
      case GET_WINE_BY_ID:{
        return {...state, wineDet: action.payload}
      }
    }
  }
  
  export default reducer;