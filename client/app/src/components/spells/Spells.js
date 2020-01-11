import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import {spellsColumns} from './SpellColumns';

export default function Spells() {
    // const [searchTerm, setSearchTerm] = useState('');
    const [result, setResult] = useState([{}]);
    const apiKey = '$2a$10$9odjyTwLv4uH2FmIwYrlreTCxr.U1SSR6DONkyojubiF/wrDT2BoG';

    // const handleChange = event => {
    //     setSearchTerm(event.target.value);
    // };

    useEffect(() => {
        const fetchData = async () => {  
              const result = await fetch(`https://www.potterapi.com/v1/spells?key=${apiKey}`, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                  }
              })
              const body = await result.json()
              setResult(body)
          }
          fetchData()
        }, [])
        console.log(result)

    const pageSizeOptions = [10, 15, 20, 50, 100]

    return (
        <div id='spellsWrapper'>
            <h1>Which spell are you searching for?</h1>
            {/* <input id='spellInput' type='text' placeholder='Search for spells...' value={searchTerm} onChange={handleChange} /> */}

            {/* <h2 id="spells">Spells</h2> */}
            <div className="table-wrapper">
                <ReactTable
                className="-striped"
                data={result}
                columns={spellsColumns}
                defaultSorted={[{ id: 'spell', desc: false }]}
                defaultPageSize={15}
                pageSizeOptions={pageSizeOptions}
                filterable
                />
            </div>


            {/* <div id="searchContainer">
                <div class="spell spellHead">
                    <h3>Name</h3>
                    <h3>Type</h3>
                    <h3>Effect</h3>
                </div>
            {result.map((item, key) => (
                <div class="spell" key={item.spell}>
                    <p>{item.spell}</p>
                    <p>{item.type}</p>
                    <p>{item.effect}</p>
                </div>
            ))}
            </div> */}
        </div>
    )
}