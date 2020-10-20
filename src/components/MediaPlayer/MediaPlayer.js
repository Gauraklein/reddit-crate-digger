import React from "react"
import ReactPlayer from 'react-player'
import "./styles.css"
import {useSelector} from "react-redux"

const MediaPlayer = () => {
    const {crate, crateIndex} = useSelector(state => state.crate)

    return (
        <div>
            <ReactPlayer url={crate[crateIndex].data.url} />
        </div>
    )

}

export default MediaPlayer