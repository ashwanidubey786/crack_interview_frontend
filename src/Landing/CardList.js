import { useState } from 'react';
import Card from './Card'
import Questioncard from '../Questioncard/Questioncard'
function CardList({setShowHome})
{
 
 
    const[questionShow,setquestionShow]=useState(false)
    return (
        <div>
       {
        questionShow?<Questioncard />: <div className="cardList">
        <button onClick={()=>{setquestionShow(true)}} className="cardSubject setColor"> <Card  subject="HTML"/></button>
        <button onClick={()=>{setquestionShow(true)}} className="cardSubject setColor"> <Card  subject="CSS"/></button>
        <button onClick={()=>{setquestionShow(true)}} className="cardSubject setColor"><Card  subject="JS"/></button>
        <button onClick={()=>{setquestionShow(true)}} className="cardSubject setColor"><Card  subject="REACT"/></button>
        <button onClick={()=>{setquestionShow(true)}} className="cardSubject setColor"><Card  subject="NODE"/></button>
        <button onClick={()=>{setquestionShow(true)}} className="cardSubject setColor"><Card  subject="EXPRESS"/></button>
        <button onClick={()=>{setquestionShow(true)}} className="cardSubject setColor"><Card  subject="MONGO DB"/></button>
        <button onClick={()=>{setquestionShow(true)}} className="cardSubject setColor"><Card  subject="DSA"/></button>
        <button onClick={()=>{setquestionShow(true)}} className="cardSubject setColor"><Card  subject="OOPS"/></button>
        
       
       
  </div>


       }
        </div>
       
      
       
    )
}
export default CardList;