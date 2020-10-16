import axios from "axios"


export const handleSearchInput = (inputValue) => {
    return dispatch => {
        dispatch({
            type: "UPDATE_SEARCH_VALUE",
            payload: inputValue
        })
    }
}

export const handleSearch = (searchQuery) => {
    return (dispatch) => {
    return axios({
        method: 'get',
        url: 'https://www.reddit.com/r/' + searchQuery + '.json',
      })
        .then((response) => {
        console.log("this is the response in the axios function", response.data.data.children)
        return dispatch => {
            dispatch({
                type: "UPDATE_CRATE",
                payload: response.data.data.children
            })
        }
      });
    }
}