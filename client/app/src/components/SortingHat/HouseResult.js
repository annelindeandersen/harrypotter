import React from 'react';
// import { Link } from 'react-router-dom';

const HouseResult = ({ myHouse }) => {

    const saveHouse = async () => {
        const result = await fetch(`api/profile?house=${myHouse}`, {
            method:'get',
            headers: {
                'Content-Type': 'application/json',
            } 
        })
        .then(response => response.json());
        console.log(result);
    }

    return (
    <div id='houseResult'>
        {/* <h1>Congrats!</h1> */}
        <img src={`img/${myHouse}.png`} alt={myHouse} /><br/> 
        <h2>Result: {myHouse}</h2>
        <button onClick={saveHouse} >Save my house!</button>
    </div> 
    )
}

export default HouseResult;