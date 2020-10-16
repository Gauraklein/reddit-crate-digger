import React from "react"
import "./styles.css"
import {useSelector} from "react-redux"

const DisplayRecord = (record, idx) => {
    return (
        <div key={idx}>
            <p>
                {record.data.title}
            </p>
            {/* <p>
                {record.}
            </p> */}
        </div>
    )
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