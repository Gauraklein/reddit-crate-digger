import React from "react"
import "./styles.css"
import { useSelector, useDispatch } from "react-redux"
import { handleSearchInput, handleSearch } from "./searchbarActions"

const Searchbar = () => {
  const dispatch = useDispatch()
  const { searchQuery } = useSelector(state => state.searchbar)

  return (
    <div className="search-bar-container">

    <form
      onKeyPress={e => {
        if (e.key === "Enter") {
          e.preventDefault()
          dispatch(handleSearch(searchQuery))
        }
      }}
      >
      <input
        type="text"
        name="subreddit"
        className="searchbar"
        // placeholder="Search"
        value={searchQuery}
        onChange={e => {
          dispatch(handleSearchInput(e.target.value))
        }}
        />
      <button
        type="submit"
        className="search-button"
        onClick={e => {
          e.preventDefault()
          dispatch(handleSearch(searchQuery))
        }}
        >
        Search
      </button>
    </form>
        </div>
  )
}

export default Searchbar
