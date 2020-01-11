import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Houses from './Houses';
import Spells from './spells/Spells';
import SortingHat from './SortingHat/SortingHat';
import JoinChatRoom from './chat/JoinChatRoom';
import ChatRoom from './chat/ChatRoom';
import LoginPage from './auth/LoginPage';
import RegisterPage from './auth/RegisterPage';
import Profile from './profile/Profile';
import Logout from './auth/Logout';

export default function Menu({user, userInfo}) {
    return (
      <Router>
        <div>
        { user === undefined || user === "" ? (
            <nav>
              <Link to="/"><img id="logo" src='img/hallows2.png' alt='logo' /></Link>
              <Link to="/login">Login</Link>
              <Link to="/">Register</Link>
            </nav>
          ) : (
            <nav>
              <Link to="/"><img id="logo" src='img/hallows2.png' alt='logo' /></Link>
              <Link to="/profile">Profile</Link>
              <Link to="/houses">Houses</Link>
              <Link to="/sortinghat">Sorting Hat</Link>
              <Link to="/spells">Spells</Link>
              <Link to="/joinchat">Chamber of Secrets</Link>
              <Link to="/logout">Logout</Link>
            </nav>
          )
          }
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/" exact component={RegisterPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/houses" component={Houses}/>
            <Route path="/sortinghat" component={SortingHat}/>
            <Route path="/spells" component={Spells}/>
            <Route path="/chat" component={ChatRoom} />
            <Route path="/joinchat" exact component={JoinChatRoom} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </div>
      </Router>
    );
  }