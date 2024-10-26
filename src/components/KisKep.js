import React, { useContext } from "react"
import { KepContext } from "../context/KepContext"

export default function KisKep({ kep }) {
const {kepKivalaszt}=useContext(KepContext)

    return (
        <div className="col-md-3 col-sm-6 col-xs-12 mb-4"> 
        <div className="card" onClick={()=>{kepKivalaszt(props.index)}}>
            <div className="card-body">
                <h3 className="kivalaszt card-title"><img src={kep.url} alt={kep.nev} /></h3>
                <p className="card-text"> {kep.cim}</p>
                <p className="card-text"> {kep.leiras}</p>
            </div>
        </div>
        </div>
    )
}