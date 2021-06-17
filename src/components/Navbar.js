import React, { useContext } from 'react';
import Icon from 'react-icons-kit';
import { Link, useHistory } from 'react-router-dom';
import logo from '../image/logo.png';
import {cart} from 'react-icons-kit/entypo/cart';
import { auth } from '../config/config';
import { CartContext } from '../global/CartContext';


export const Navbar = ({user}) =>{

    const history = useHistory();
    const {totalQty}= useContext(CartContext);

    const logout = () =>{
        auth.signOut().then(()=>{
            history.push('/login');
        })
    }

    return(
        <div className="navbox">
           <div className="leftside">
               <img src={logo} alt="" />
               
           </div>
           {/* if we dont have any user */}
            {!user ? <div className="rightside">
               <Link to="signup" className="navlinks" >SignUp</Link>
               <Link to="login" className="navlinks">Login</Link>
           </div>
           
           : <div className="rightside">
               <span><Link to="/" className="navlinks" >{user}</Link></span> 
               <span><Link to="cartproducts" className="navlinks"><Icon icon={cart} /></Link></span>
               
                    <span className="no-of-products">{totalQty}</span>
                
               <span><button className="logout-btn" onClick={logout}>Logout</button></span>
           </div>}
        </div>
    )
}