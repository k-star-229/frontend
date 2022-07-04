import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import {ethers} from "ethers";
import { Web3ReactProvider } from "@web3-react/core";

import Home from "./pages/home";
import Alert from './components/alert';
import Client from './pages/client';
import ClientSignIn from "./pages/client/components/signin";
import ClientSignUp from "./pages/client/components/signup";
import Master from './pages/master';
import MasterSignIn from "./pages/master/components/signin";
import MasterSignUp from "./pages/master/components/signup";
import Admin from './pages/admin';
import AdminSignIn from "./pages/admin/components/signin";
import AdminSignUp from "./pages/admin/components/signup";

import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

import './app.scss';

const getLibrary = (provider) => {
  const gottenProvider = new ethers.providers.Web3Provider(provider, "any");
  return gottenProvider;
}

const App = () => {

  useEffect(() => {
    if (localStorage.getItem('user')) {
      console.log('app.js');
      store.dispatch(loadUser());
    }
    
  
    // window.addEventListener('storage', () => {
    //   if (!localStorage.token) store.dispatch({ type: LOGOUT });
    // });
  }, []);

  return (
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Router>
          <Alert />      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/client" element={<Client />} />
            <Route path="/client/signin" element={<ClientSignIn />} />
            <Route path="/client/signup" element={<ClientSignUp />} />
            <Route path="/master" element={<Master />} />
            <Route path="/master/signin" element={<MasterSignIn />} />
            <Route path="/master/signup" element={<MasterSignUp />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/signin" element={<AdminSignIn />} />
            <Route path="/admin/signup" element={<AdminSignUp />} />
          </Routes>
        </Router>
      </Web3ReactProvider>
    </Provider>
  );
}

export default App;
