import React from "react"
import ReactPlayer from 'react-player'
import "./styles.css"
import {useSelector} from "react-redux"

const RecordDropdown = (record, idx) => {
        return (
            <option key={idx} value={idx}>
                {record.data.title}
            </option>
            // <ReactPlayer url={record.data.url} />       
    )
}

const Crate = () => {
    const { crate } = useSelector(state => state.crate)

    return (
        <>
            <div>
                <select>
                {crate.map(RecordDropdown)}
                </select>
                
            </div>
        </>
    )    
}

export default Crate