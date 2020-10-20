const initialState = {
    crate: [{data: {
        title: "lofiii baby",
        url: "https://www.youtube.com/watch?v=5qap5aO4i9A"
    }}],
    crateIndex: 0
}

export const crateReducer = (state = initialState, action) => {

    switch (action.type) {

        case "UPDATE_CRATE":
        console.log(action.payload, "this is what's going into the crate")
        return {
            ...state,
            crate: action.payload 
            // need to come up with a way to add to the crate without resetting it
        }

        default:
          return state
      }
}