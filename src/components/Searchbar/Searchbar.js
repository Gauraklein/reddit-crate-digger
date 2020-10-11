import React from "react"
import "./styles.css"
import axios from "axios"

const Searchbar = () => {

    const handleSearch = (searchQuery) => {
        axios({
            method: 'get',
            url: 'https://www.reddit.com/r/' + searchQuery + '.json',
          })
            .then(function(response) {
            console.log("this is the response", response)
          });
    }

    return (
        <>
            <input />
            <button>
                Search
                </button>
        </>
    )
}

export default Searchbar