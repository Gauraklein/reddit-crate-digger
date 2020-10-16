
const initialState = {
    searchQuery: ""
}

export const searchbarReducer = (state = initialState, action) => {

    switch (action.type) {

        case "UPDATE_SEARCH_VALUE": 
        console.log(action.payload, "this should be the search value")
        return {
            ...state,
            searchQuery: action.payload
        }

        // case "UPDATE_CRATE":
        // console.log(action.payload, "this is what's going into the crate")
        // return {
        //     ...state,
        //     crate: action.payload
        // }

        default:
          return state
      }
}