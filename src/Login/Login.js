import { useState } from "react";
import Forgate from "./Forgate";
function Login()
{
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
           </>
       }
       
        
        </>
    )
}
export default Login;