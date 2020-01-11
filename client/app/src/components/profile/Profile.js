import React, { useEffect, useState } from 'react';
// import queryString from 'query-string';
// import jwt from 'jwt-decode'

export default function Profile() {
    // const [user, setUser] = useState('');
    const [ data, setData ] = useState({
        _id: '',
        username: '',
        email: '',
        house: '',
        patronus: ''
    });

    useEffect(() => {
        const getData = async () => {
            // console.log(user)
            const result = await fetch(`/api/auth/getuser`, {
                method:'get',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const body = await result.json();
            setData(body);
            console.log(body);
        }
        getData();
    }, [setData])

    return (
        <div id='profileWrapper'>
            <h1>Profile page for {data.username}</h1>
            <div id="userInfoContainer">
                <img src={`img/${data.house}.png`} alt={data.house} />
                <h3>Username: {data.username}</h3>
                <h3>Email: {data.email}</h3>
                <h3>House: {data.house}</h3>
                <h3>Patronus: {data.patronus}</h3>
            </div>
        </div>
    )
}