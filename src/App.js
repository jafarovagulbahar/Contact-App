import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import { ToastContainer } from 'react-toastify';

import "bootstrap/dist/css/bootstrap.min.css";
import { HeaderMenu } from './components/Header/Header';
import { AddContact } from "./container/addContact/AddContact";
import { ContactList } from './container/contactList/ContactList';
import { EditContact } from "./container/editContact/EditContact";
import Layout from 'antd/lib/layout/layout';
import "antd/dist/antd.css";
import 'react-toastify/dist/ReactToastify.css';
import style from './app.module.css'

const App = () => {
  return (
    <Layout className={style.content}>  
      <ToastContainer />
      <GlobalProvider>
        <Router>
          <HeaderMenu/>
          <Switch>
            <Route exact path="/" component={ContactList} />
            <Route path="/add" component={AddContact} />
            <Route path="/edit/:id" component={EditContact}/>
          </Switch>
        </Router>
      </GlobalProvider>
    </Layout>
  )
}

export default App
