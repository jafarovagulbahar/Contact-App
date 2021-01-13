import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AddUser } from "./components/container/addContact/AddUser";
import { EditUser } from "./components/container/editContact/EditUser";
import { GlobalProvider } from "./components/context/GlobalState";
import { ToastContainer } from 'react-toastify';

import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from './components/container/Header/Header';
import { UserList } from './components/container/contactList/UserList';

const App = () => {
  return (
    <div className='content'>
      <ToastContainer />
      <GlobalProvider>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/" component={UserList} />
            <Route path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUser}/>
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  )
}

export default App
