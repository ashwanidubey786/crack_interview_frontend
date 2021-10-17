import {useState} from 'react';
import CardList from './CardList';
import Footer from './Footer';
import Header from './Header';

function Home()
{
    
    return (<div className="homeScreen" >
           <Header name="Ashwani Dubey" image="https://lh3.googleusercontent.com/a-/AOh14GhqXFNFjj0HTU1_qczVELZB5iBuAXilP4JF0VXUIA=s96-c"/>
           <CardList />
           <Footer/>
    </div >)
}
export default Home ;