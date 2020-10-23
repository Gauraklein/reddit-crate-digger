import React from "react"
import Searchbar from "../components/Searchbar/Searchbar"
import Crate from "../components/Crate/Crate"
import MediaPlayer from "../components/MediaPlayer/MediaPlayer"
import "../styles/main.css"

const Home = () => {
    return (
      <div className="main">
      <h1>CRATE DIGGER</h1>
      {/* <p>Subreddit search bar will go here</p> */}
      <Searchbar />
      < Crate />
      <MediaPlayer />
      {/* <p>content div and left - right controls will go here</p>
      <p>random, newest, play, pause buttons go here</p> */}
      </div>
    )
  }
  
  export default Home
  