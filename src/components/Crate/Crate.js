import React from "react"
import ReactPlayer from 'react-player'
import "./styles.css"
import {useSelector} from "react-redux"

const DisplayRecord = (record, idx) => {
    if (record.data.media) {

        return (
            <div key={idx}>
            <p>
                {record.data.title}
            </p>
            <ReactPlayer url={record.data.url} />       
        </div>
    )
}
}

const Crate = () => {
    const { crate } = useSelector(state => state.crate)

    return (
        <>
            <div>
                {crate.map(DisplayRecord)}
            </div>
        </>
    )    
}

export default Crate