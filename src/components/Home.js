import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../config/config';
import '../css/Home.css';
import { Navbar } from './Navbar';
import { Products } from './Products';

export const Home = ({user}) =>{
    const history = useHistory();

    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if (!user) {
                history.push('/login');
            }
        })
    })
    return(
        <div className="wrapper">
            <Navbar user={user} />
            <Products /> 
        </div>
    )
}