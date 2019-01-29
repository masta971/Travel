import React from 'react';
import "./App.css" ;
import logo from './logo.jpg';





    

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

    {
    Destination:'Kourou',
    Country:'Guyana', 
    Photo: 'https://cdn.pixabay.com/photo/2015/03/12/20/30/lighthouse-670821_960_720.jpg ',
    Distance:'7090km',
    },
    {
    Destination:'Diamant',
    Country:'Martinique', 
    Photo: 'https://cdn.pixabay.com/photo/2013/11/07/23/43/martinique-207155_960_720.jpg ',
    Distance:'6800km',
    },
    {
        Destination:'Nouméa',
        Country:'Nouvelle-Calédonie', 
        Photo: 'https://cdn.pixabay.com/photo/2018/10/30/02/49/sunset-3782606_960_720.jpg ',
        Distance:'16900km',
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