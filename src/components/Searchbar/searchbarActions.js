import axios from "axios"

export const handleSearchInput = inputValue => {
  return dispatch => {
    dispatch({
      type: "UPDATE_SEARCH_VALUE",
      payload: inputValue,
    })
  }
}

// TODO: Handle error state
export const handleSearch = searchQuery => {
  return (dispatch) => {
    return axios({
      method: "get",
      url: "https://www.reddit.com/r/" + searchQuery + ".json",
    }).then(response => {
      const unfilteredRecords = response.data.data.children
      const filteredRecords = []
      unfilteredRecords.map((record) => {
        if (record.data.media) {
          filteredRecords.push(record)
        }
      })
      console.log(
        "this is the response in the axios function",
        unfilteredRecords
      )
        dispatch({
          type: "UPDATE_CRATE",
          payload: filteredRecords
        })
    })
  }
}
