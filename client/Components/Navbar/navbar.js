import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                marginBottom: '20px',
            }}
        >
            <Link to='/'>Home</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Login</Link>
        </div>
    );
};

export default Navbar;
