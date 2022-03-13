import React, {useState, useContext, useEffect} from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearDataUser} from "./redux/slices/loggedInUserSlice";



import './App.css';

import Registration from "./components/Registration/Registration";
import Authorization from "./components/Authorization/Authorization";
import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
import SearchChats from "./components/SearchChats/SearchChats";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import ChatMainContainer from "./components/ChatRoom/ChatMainContainer";
import Settings from "./components/Settings/Settings";
export const ContextLoggedUser = React.createContext('');



function App() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [loggedUserEmail, setLoggedUserEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.user);
    const signOut = () => {
        setLoggedIn(false)
        dispatch(clearDataUser())
    }

    useEffect(() => { if (user != null) {
        setLoggedIn(true)
        navigate("/")
    } },[])

    return (
      <ContextLoggedUser.Provider value={[loggedUserEmail, setLoggedUserEmail]}>

          <Routes>
            <Route path="/registration" element={ <Registration /> } />
            <Route path="/authorization" element={ <Authorization setLoggedIn={setLoggedIn} /> } />
            <Route path="/password-recovery" element={ <PasswordRecovery /> } />
            <Route path="/search-chats" element={ <SearchChats /> } />
            <Route path="/chat-room" element={ <ChatRoom /> } />
            <Route path="/slack" element={ <ChatMainContainer /> }/>
            <Route path="/settings" element={
                <RequireAuth loggedIn={loggedIn}>
                <Settings setLoggedIn={setLoggedIn} signOut={signOut} />
                </RequireAuth>
                }/>
            <Route path="/" element={
                <RequireAuth loggedIn={loggedIn}>
                    <ChatMainContainer setLoggedIn={setLoggedIn}  signOut={signOut}/>
                </RequireAuth>
                                        } />
            <Route path="*" element={ <PageNotFound /> } />
          </Routes>
      </ContextLoggedUser.Provider>

  );
}

export default App;
