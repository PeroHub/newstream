import React from 'react'
import afro from '../images/logo/freebeat.jpeg'
function Details(props) {
    console.log(props)
    return (
        <div className="c-player--details">
            <div className="details-img" style={{borderRadius: "50%"}}>

                <img
            
            src={afro}
            alt="woman"
            width={100}
            height={100}
          />
            </div>
            <h3 className="details-title" style={{color: "#fff"}}>{props.song.title}</h3>
            <h4 className="details-artist" style={{color: "#fff"}}>{props.song.artist}</h4>
        </div>
    )
}

export default Details