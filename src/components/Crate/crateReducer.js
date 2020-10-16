const initialState = {
    crate: []
}

export const crateReducer = (state = initialState, action) => {

    switch (action.type) {

        case "UPDATE_CRATE":
        console.log(action.payload, "this is what's going into the crate")
        return {
            ...state,
            crate: action.payload
        }

        default:
          return state
      }
}