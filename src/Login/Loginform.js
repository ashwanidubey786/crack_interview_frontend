import Login from "./Login";
import Signup from "./Signup";
import {useState} from 'react';
import Home from "../Landing/Home";

function Loginform()
{
    const [color,setColor]=useState(["red","white"]);
    const [formNo,setformNo]=useState(0);
    const [showHome,setShowHome]=useState(false);
    return (<>
    {
        showHome?
        <Home />
        :
    <div className="Loginform">
  <div className="Formheader">
  <button className="headerButton" style={{background: color[0]}} onClick={()=>{setformNo(0);setColor(["red","white"]) }}>Login</button>
  <button className="headerButton" style={{background: color[1]}}  onClick={()=>{setformNo(1);setColor(["white","red"])}}>Signup</button>

</div>  
    
    {
        formNo ?<Signup setShowHome={setShowHome}/>: <Login  setShowHome={setShowHome}/>
    }
    </div >
}
    </>
    
    )
}
export default Loginform ;