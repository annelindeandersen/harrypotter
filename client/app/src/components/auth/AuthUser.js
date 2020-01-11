import React, { useState } from 'react';

const UserIsAuthenticated = async () => {
    const [ user, setUser ] = useState('');

    const authenticate = await fetch('api/auth', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
    }})
    console.log(authenticate)

    if (user === null) {
        return (
            <div>
                <h3>Not logged in!</h3>
            </div>
        )
    } else if (user) {
    return (
        <div>
            <h3>Hey, {user}</h3>
        </div>
        )
    } else {
        return (
            <div>
                <h3>Error!!</h3>
            </div>
        )
    }
}

export default UserIsAuthenticated;