import React, { useEffect } from 'react';
// import UserIsAuthenticated from './auth/AuthUser';

export default function Houses() {
  const [houses, setHouses] = React.useState([{}]);
  const apiKey = '$2a$10$9odjyTwLv4uH2FmIwYrlreTCxr.U1SSR6DONkyojubiF/wrDT2BoG';

  useEffect(() => {
    const getApi = async () => {
      const houses = await fetch(`https://www.potterapi.com/v1/houses?key=${apiKey}`);
      const body = await houses.json();
      setHouses(body)
    }
    getApi()
  }, [setHouses])

  return (
    <div id='houses'>
        {/* <UserIsAuthenticated/> */}
        <div id='houseOverview'>
        {houses.map((key, index) => (
            <div key={key._id}>
                <img key={key.mascot} src={`img/${key.name}.png`} alt={key.mascot} />
                <h1 key={key.name}>{key.name}</h1>
                <p key={key.founder}>By {key.founder}</p>
                {/* <p key={key.mascot}>Mascot: {key.mascot}</p> */}
                <p key={key.headOfHouse}>Head: {key.headOfHouse}</p>
                <p key={key.houseGhost}>Ghost: {key.houseGhost}</p>
            </div>
        ))}
      </div>
    </div>
  )
}
