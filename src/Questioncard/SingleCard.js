import { useState } from "react";

function SingleCard({signal,quetsionno,question,link})
{
   const[tempsignal,setTemp]=useState(signal)
   const[note,setNote]=useState(false)
    return (
        <>
        
        <div className="SingleCard">

           {tempsignal ?<button className="mytickMark spaceprovide" onClick={()=>{setTemp(false)}}>✅</button>:<button className="mytickMark spaceprovide" onClick={()=>{setTemp(true)}}>❌</button>} <h1>{signal}</h1>
            <h1 className="spaceprovide width20" >{quetsionno}</h1>
            <h1 className="spaceprovide width400 shiftleft" >{question}</h1>
            <a href={link} target="_blank" rel="noopener noreferrer">link</a>
            <button className="spaceprovide width60 " onClick={()=>{setNote(!note)}} >note</button>
            
        </div>
           {

               note?<textarea/>:""
           }
        </>
    )
}
export default SingleCard;