import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";

import './App.css';

import Registration from "./components/Registration/Registration";
import Authorization from "./components/Authorization/Authorization";
import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
import SearchChats from "./components/SearchChats/SearchChats";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import PageNotFound from "./components/PageNotFound/PageNotFound";


function App() {

    const [loggedIn, setLoggedIn] = useState(false);

  return (
      <Routes>
        <Route path="/registration" element={ <Registration /> } />
        <Route path="/authorization" element={ <Authorization setLoggedIn={setLoggedIn} /> } />
        <Route path="/password-recovery" element={ <PasswordRecovery /> } />
        <Route path="/search-chats" element={ <SearchChats /> } />
        <Route path="/" element={
            <RequireAuth loggedIn={loggedIn}>
                <SearchChats setLoggedIn={setLoggedIn} />
            </RequireAuth>
        } />
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
  );
}

export default App;
