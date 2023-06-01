import React, { useContext } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

import Navbar from './Navbar/navbar';
import CreateUser from './User/CreateUser';
import Home from './Home/Home';

import { GlobalStore } from '../context/context';

export const App = () => {
    const { tempStore } = useContext(GlobalStore);
    console.log(tempStore, 'here is temp store');
    return (
        <div>
            <HashRouter>
                <Navbar />
                <Routes>
                    <Route element={<Home />} exact path='/' />
                    <Route element={<CreateUser />} exact path='/user/create' />
                </Routes>
            </HashRouter>
        </div>
    );
};
