import React from 'react'

function Card(props) {

  return (
    <div>
        <h2>Hallo</h2>
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.address}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card