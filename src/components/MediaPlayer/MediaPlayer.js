import React from "react"
import ReactPlayer from 'react-player'
import "./styles.css"
import {useSelector, useDispatch} from "react-redux"
import {incrementCrateIndex, decrementCrateIndex} from "./mediaPlayerActions"

const MediaPlayer = () => {
    const {crate, crateIndex} = useSelector(state => state.crate)
    const dispatch = useDispatch()



    return (
        <div>
            <ReactPlayer url={crate[crateIndex].data.url} playing={true} onEnded={() => dispatch(incrementCrateIndex(crateIndex))}/>
            <div>
            <button onClick={(e) => dispatch(decrementCrateIndex(crateIndex))}>
                Previous
            </button>
            </div>
            <div>

            <button onClick={(e) => dispatch(incrementCrateIndex(crateIndex))}>
                Next
            </button>
            </div>
        </div>
    )

}

export default MediaPlayer