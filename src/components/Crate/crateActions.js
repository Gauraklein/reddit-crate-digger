export const handleRecordSelection = (newIndexValue) => {
    return dispatch => {
        dispatch({
            type: "SET_NEW_RECORD_INDEX",
            payload: newIndexValue
        })
    }
}
