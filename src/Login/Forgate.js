import { useState } from "react";
function Forgate()
{
    const[otp,setotp]=useState(0);
    const sendotp=()=>{
        setotp(1);
    }
    return (
        <>
        <h1>Forgate Password</h1>
        <input className="samerow" type="email" placeholder="Enter user Id" />
        <button className="samerow" onClick={sendotp}>get otp</button>
        {
            otp?<>
         
              <input className="samerow" type="number" placeholder="otp" />

            </>:""
        }
        </>
    )
}
export default Forgate;