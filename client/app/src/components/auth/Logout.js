import React from 'react'

export default function Logout() {

        const fetchData = async () => {
            const result = await fetch(`/api/sessions/destroysession`)
            const body = await result.json()
            
            if (body.status === 200) {
                window.location.assign('/');
            }
        }
        fetchData()

    return(
        <div>logout</div>
    )
}