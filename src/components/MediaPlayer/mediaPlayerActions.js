export const incrementCrateIndex = (crateIndex) => {
    return dispatch => {
        dispatch ({
            type: "INCREMENT_CRATE_INDEX",
            payload: crateIndex + 1
        })
    }
}

export const decrementCrateIndex = (crateIndex) => {
    return dispatch => {
        dispatch ({
            type: "DECREMENT_CRATE_INDEX",
            payload: crateIndex - 1
        })
    }
}