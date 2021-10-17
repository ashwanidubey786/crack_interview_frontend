import {useState} from 'react';

function Header({name,image})
{
    
    return (
      
               <div className="headerHome">
         <img className="userProfile spaceprovide" src={image}/>
         <h3 className="spaceprovide">WELCOME</h3>
         <h1 className="spaceprovide">{name}</h1>
          
             </div >
       
    )
}
export default Header ;