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

        case "SET_NEW_RECORD_INDEX":
        console.log(action.payload, "this is the new crate Index value")
        return {
            ...state,
            crateIndex: action.payload
        }

        case "INCREMENT_CRATE_INDEX": 
        console.log("incrementing crate index", action.payload)
        return {
            ...state,
            crateIndex: action.payload
        }

        case "DECREMENT_CRATE_INDEX": 
        console.log("decrementing crate index")
        return {
            ...state,
            crateIndex: action.payload
        }
        default:
          return state
      }
}