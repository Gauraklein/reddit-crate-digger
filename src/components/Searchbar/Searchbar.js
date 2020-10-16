import React from "react"
import "./styles.css"
import {useSelector, useDispatch } from "react-redux"
import {handleSearchInput, handleSearch} from "./searchbarActions"

const Searchbar = () => {

    const dispatch = useDispatch()
    const { searchQuery } = useSelector(state => state.searchbar)

    return (
        <>
            <input type="text" name="subreddit" value={searchQuery} onChange={(e) => { 
                dispatch(handleSearchInput(e.target.value))}}/>
            <button onClick={(e) => {
                e.preventDefault()
                console.log("clicked, this is the search query", searchQuery)
                dispatch(handleSearch(searchQuery))
            }}>
                Search
                </button>
        </>
    )
}

export default Searchbar