import React, { useState } from "react"
import "./styles.css"
import axios from "axios"

const Searchbar = () => {

    const [searchBarValue, setSearchbarValue] = useState("")

    const handleSearch = (searchQuery) => {
        axios({
            method: 'get',
            url: 'https://www.reddit.com/r/' + searchQuery + '.json',
          })
            .then(function(response) {
            console.log("this is the response", response.data.data.children)
          });
    }

    return (
        <>
            <input type="text" name="subreddit" value={searchBarValue} onChange={(e) => { 
                setSearchbarValue(e.target.value)
                console.log(searchBarValue)}}/>
            <button onClick={(e) => {
                e.preventDefault()
                handleSearch(searchBarValue)
            }}>
                Search
                </button>
        </>
    )
}

export default Searchbar