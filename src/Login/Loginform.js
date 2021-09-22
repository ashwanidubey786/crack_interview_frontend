import Login from "./Login";
import Signup from "./Signup";
import {useState} from 'react';
function Loginform()
{
    const [color,setColor]=useState(["red","white"]);
    const [formNo,setformNo]=useState(0);
    return (<div className="Loginform">
  <div className="Formheader">
  <button className="headerButton" style={{background: color[0]}} onClick={()=>{setformNo(0);setColor(["red","white"]) }}>Login</button><button className="headerButton" style={{background: color[1]}}  onClick={()=>{setformNo(1);setColor(["white","red"])}}>Signup</button>

</div>  
    
    {
        formNo ?<Signup />: <Login />
    }
    </div >)
}
export default Loginform ;