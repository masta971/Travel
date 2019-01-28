import React from 'react'
import "./App.css" 

var voyage = [
    {
    Destination:'Moule',
    Country:'Gwadada', 
    Photo: 'https://cdn.pixabay.com/photo/2016/01/30/08/38/tradewinds-1169329_960_720.jpg ',
    Distance:'8000km',
    },

    {
    Destination:'Saint-Denis',
    Country:'Réunion', 
    Photo: 'https://cdn.pixabay.com/photo/2014/08/20/00/18/waves-422158_960_720.jpg',
    Distance:'9300km',
    },
]

function Travel() {
    return(
        <div>
         {voyage.map(voyage =>(<div className = "center"> 
             <h1><span>Pays: </span>{voyage.Country}</h1>
             <p>{voyage.Destination}</p>
             <img src={voyage.Photo}/>
             <p><span>Distance: </span>{voyage.Distance}</p>
         </div>))}   
        </div>
   
        )
}

export default Travel;