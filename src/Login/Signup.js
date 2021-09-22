function Signup()
{
    return (
        <div>
            
        
      
        <div className="samerow">
        <input type="text" className="myinput" placeholder="First Name"/>
       
       <input type="text"  className="myinput" placeholder="Last Name"/>
        </div>
        
       <div className="samerow">
       <input  type="email"  className="myinput"placeholder="Email Id"/>
        <input type="number" className="myinput" placeholder="Mobile"/>
       
       </div>
        
        <div className="samerow">
        <input type="password" className="myinput" placeholder="Password"/>
      
        
        <input type="password" className="myinput" placeholder="Confirm Password"/>
        </div>
        
        <div className="samerow downpadding">
        <button className="mybutton">clear</button>
        <button className="mybutton">Submitt</button>
        </div>
       
        <div >
        <label className="mylabel">Already have an Account ?</label>
        <div className="samerow downpadding">
        <a className="myinput mycolor" >gmail</a>
        
        <a className="myinput mycolor" >facebook</a>
        <a className="myinput mycolor" >linkedin</a>
        <a className="myinput mycolor" >github</a>
        </div>
       
        </div>
       
        
        </div>
    )
}
export default Signup;