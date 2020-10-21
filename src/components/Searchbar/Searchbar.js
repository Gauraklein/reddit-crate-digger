import React from "react"
import "./styles.css"
import {useSelector, useDispatch } from "react-redux"
import {handleSearchInput, handleSearch} from "./searchbarActions"

const Searchbar = () => {

    const dispatch = useDispatch()
    const { searchQuery } = useSelector(state => state.searchbar)

    return (
        <form onKeyPress={(e) => {

            if (e.key === 'Enter') {
                e.preventDefault()
                dispatch(handleSearch(searchQuery))
            }
        }}>
            <input type="text" name="subreddit" value={searchQuery} onChange={(e) => { 
                dispatch(handleSearchInput(e.target.value))}}/>
            <button 
            type='submit'
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(handleSearch(searchQuery))}}
                
            >
                Search
                </button>
        </form>
    )
}

export default Searchbar