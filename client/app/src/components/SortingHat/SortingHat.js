import React, { useState } from 'react';
import HouseResult from './HouseResult';

export default function SortingHat() {
    const apiKey = '$2a$10$9odjyTwLv4uH2FmIwYrlreTCxr.U1SSR6DONkyojubiF/wrDT2BoG';
    const [myHouse, setMyHouse] = useState([]);

    const getHouse = event => {
        fetch(`https://www.potterapi.com/v1/houses?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
        // console.log(data)
        const randomHouse = data[Math.floor(Math.random()*data.length)];
        console.log(randomHouse.name);
        setMyHouse(randomHouse.name);
        });
      }

    return(
        <div id="sortingWrapper">
            <h1>Try the Sorting Hat!</h1>
            <img id="sortinghat" src='img/SortingHat.png' alt='sortinghat' />
            <button id='getHouse' value={myHouse} onClick={getHouse} onChange={(event)=> setMyHouse(event.target.value)}>Get your house!</button>
            <HouseResult myHouse={myHouse} />
        </div>
    )
}