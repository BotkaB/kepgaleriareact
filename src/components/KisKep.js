import React from "react"

export default function KisKep({ kep }) {
    return (
        <div className="col-md-3 col-sm-6 col-xs-12 mb-4"> 
        <div className="card">
            <div class="card-body">
                <h3 class="kivalaszt card-title"><img src={kep.url} alt={kep.nev} /></h3>
                <p class="card-text"> {kep.cim}</p>
                <p class="card-text"> {kep.leiras}</p>
            </div>
        </div>
        </div>
    )
}