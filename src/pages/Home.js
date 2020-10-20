import React from "react"
import Searchbar from "../components/Searchbar/Searchbar"
import Crate from "../components/Crate/Crate"
import MediaPlayer from "../components/MediaPlayer/MediaPlayer"

const Home = () => {
    return (
      <>
      <h1>CRATE DIGGER</h1>
      {/* <p>Subreddit search bar will go here</p> */}
      <Searchbar />
      < Crate />
      <MediaPlayer />
      <p>content div and left - right controls will go here</p>
      <p>random, newest, play, pause buttons go here</p>
      </>
    )
  }
  
  export default Home
  