import React, { useEffect, useState } from 'react';
import Menu from './components/Menu';
import './App.css';


function App() {
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState("");
  const [userInfo, setUserInfo] = useState("");

  useEffect(()=> {
    const getUser = async () => {
        const result = await fetch(`/api/auth/getuser`, {
          method:'get',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const body = await result.json();
        
        if (result.ok) {
            setUserInfo( body )
            console.log(body)
        }
        else {
            console.log('error getting user');
        }
    }
    // getUser();
  }, []);

  useEffect(()=> {
    const loggedIn = async ()=> {
      const result = await fetch(`/api/sessions/getsession`, {
        method:'get',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      const body = await result.json();
      console.log('Session get:', body);
        
      if (result.ok) {
          setUser( body.user_id )
          console.log(user);
      }
      else {
          console.log('error getting session');
      }
    }
    loggedIn();
}, [user]);

  return (
    <div className="App">
      <Menu open={open} setOpen={setOpen} user={user} userInfo={userInfo} />
      {/* <Searchbar open={open} setOpen/> 
      <Burger open={open} setOpen={setOpen}/> */}
    </div>
  )
}

export default App;
