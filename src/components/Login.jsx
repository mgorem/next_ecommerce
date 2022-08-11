import React, {useState} from 'react';
import './style.css'
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";

const Login = () => {

  const [email, setEmail] = useState(null);
  const [password,setPassword] = useState(null);

  const handleInputChange = (e) => {
      const {id , value} = e.target;
      if(id === "email"){
          setEmail(value);
      }
      if(id === "password"){
          setPassword(value);
      }

  }

  // Store input entered by user
  const handleSubmit  = () => {
    let obj = {
          email:email,
          password:password,
        }       
    const newPostKey = push(child(ref(database), 'posts')).key;
    const updates = {};
    updates['/' + newPostKey] = obj
    return update(ref(database), updates);
  }

  return (
    <div className="form">
    <div className="form-body">
        <div className="email">
            <label className="form__label" for="email">Email </label>
            <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
        </div>
        <div className="password">
            <label className="form__label" for="password">Password </label>
            <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
        </div>
    </div>
    <div class="footer">
        <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
    </div>
</div>      
  )
}

export default Login