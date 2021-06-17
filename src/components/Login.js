import React, { useState } from 'react';
import { auth } from '../config/config';
import { Link } from 'react-router-dom';

export const Login = (props) =>{
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, SetError] = useState('');

const login =(e) =>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(()=>{
        setEmail('');
        setPassword('');
        SetError('');
        props.history.push('/');
    }).catch(err=>SetError(err.message));
}

    return(
        <div className="container">
            <br/>
            <h2>Login</h2>
            <hr/>
            <form autoComplete="off" className="form-group" onSubmit={login} >
                <label htmlFor="Email">Email</label>
                <br/>
                <input type="email" className="form-control" required 
                onChange={(e)=>setEmail(e.target.value)} value={email} />
                <br/>
                <label htmlFor="Password">Password</label>
                <br/>
                <input type="password" className="form-control" required 
                onChange={(e)=>setPassword(e.target.value)} value={password} />
                <br/>
                <button type="submit" className="btn btn-success btn-md mybtn" >Login</button>
                
            </form>
            {error && <div className="error-msg" >{error}</div>}
            <br/>
            <span>Don't have An account? Register
                <Link to="signup">Here</Link>
            </span>
        </div>
    )
}