import { useContext, useEffect, useState } from "react";
import {AppContext} from './App'
import {signOut} from 'firebase/auth'
import { auth } from "./config";


export const SubHeader=()=>{


const {setShowLogin} = useContext(AppContext)
const [displayHorizontalNavLink, setDisplayHorizontalNavLink] = useState(true)
const [displayVerticalNavLink, setDisplayVerticalNavLink] = useState(false)
const [headerColorChange, setHeaderColorChange] = useState(false)
const loginStatus=()=>{
   setShowLogin(true)
}
window.onmouseover=()=>{                 
   if (window.innerWidth > 769) {
      setDisplayHorizontalNavLink(true)
      }
      else {
         setDisplayHorizontalNavLink(false)
      }
}

window.onresize=()=>{
   if (window.innerWidth > 769) {
   setDisplayHorizontalNavLink(true)
   }
   else {
      setDisplayHorizontalNavLink(false)
   }
}


const showVerticalNav=()=>{
   setDisplayVerticalNavLink(!displayVerticalNavLink)
}

useEffect(()=>{
   window.onscroll=(e)=>{
      window.scrollY > 500 ? setHeaderColorChange(true) :  setHeaderColorChange(false)
   }

}, [])


const signUserOut=()=>{
   signOut(auth)
}

return (

<>
<header style={{backgroundColor: headerColorChange && 'black'}}>
   
   <div className="box1">

 <div className="logoStyle"></div>
<h2>Travify</h2>

<div className="inputDiv">
   <input type="search" placeholder="Search Travify....."/>  <i className="fas fa-search"></i></div>

   </div>                             

<div className="box2">      
{  
displayHorizontalNavLink &&

(
   <>
   <a className="navLink" href="/">About</a>         
   <a className="navLink" href="/">Short Gallery</a> 
</>
)
}


   <div className="btn">
   <a className="loginScroll" href="#loginPage" onClick={loginStatus}> <button>Login</button></a>  
   <i onClick={signUserOut} className="fas fa-sign-out" title="Sign Out"></i></div>
 

{!displayHorizontalNavLink &&
(
<i className="fas fa-bars" onClick={showVerticalNav}></i>
)
}


</div>

{ displayVerticalNavLink &&
<div className="verticalNavLink">

<a  href="/">About</a>         
 <a  href="/">Short Gallery</a> 
</div>
}
</header>
</>

)

}