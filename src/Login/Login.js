import { useState } from "react";
import Forgate from "./Forgate";
import { GoogleLogin } from 'react-google-login';
import Home from "../Landing/Home";


function Login({setShowHome})
{
  const responseGoogle1 = (response) => {
    console.log("success");
    setShowHome(true)
    console.log(response);

  }
  const responseGoogle2 = (response) => {
    console.log("fail");
    console.log(response);
  }
    const[forgate,setForgate]=useState(0);
 
    return (
     <>
       {
           forgate
           ?
           <Forgate/>
           :
        <>
       
        <input className="samerow" type="text"  placeholder="User Id"/>
        
        <input className="samerow" type="text" placeholder="Password" />
        
        <input type="button"  className="samerow LoginButton"  value="LOGIN"/>
       
        <a className="mycolor myinput samerow" onClick={()=>{setForgate(1)}}>forgate  password ?</a>
        <GoogleLogin
    clientId="820360898053-5g59brn2spau8cjv8lgraavh0j4phm5i.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle1}
    onFailure={responseGoogle2}
    cookiePolicy={'single_host_origin'}
     />,
           </>
       }
       
        
        </>
    )
}
export default Login;