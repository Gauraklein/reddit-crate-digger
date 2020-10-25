import React from "react"
import "./styles.css"
import {useSelector, useDispatch} from "react-redux"
import {handleRecordSelection} from "./crateActions"

const RecordDropdown = (record, idx) => {
        return (
            <option key={idx} value={idx}>
                {record.data.title}
            </option>
            // <ReactPlayer url={record.data.url} />       
    )
}


const Crate = () => {
    const dispatch = useDispatch()
    const { crate, crateIndex } = useSelector(state => state.crate)

    return (
            <div className="crate-container">
                <h2>
                    Now Playing
                </h2>
                <p>{crate[crateIndex].data.title}</p>
                {/* <button>
                    Show full crate
                </button>
                <select 
                    value={crateIndex}
                    onChange={(e) => dispatch(handleRecordSelection(e.target.value))}>
                {crate.map(RecordDropdown)}
                </select> */}
                
            </div>
    )    
}

export default Crate