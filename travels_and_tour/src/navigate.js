
import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import {AppContext} from './App'
import {auth, Provider} from './config'
import {signInWithPopup} from 'firebase/auth'
import {useQuery} from 'react-query'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {addDoc, collection} from 'firebase/firestore'
import {db} from './config'

export const Navigate=()=>{


    const [counter, setCounter] = useState(0)
const ref = useRef(null)
const sliderRef = useRef(null)
const navigateSliderRef = useRef(null)
const {showLogin} = useContext(AppContext)
const [loginReady, setLoginReady] = useState(true)
const [signUpReady, setSignUpReady] = useState(false)       
const [callGoogleSignIn, setCallGoogleSignIn] = useState(false)




useEffect(()=>{                            
  ref.current = setInterval(()=>{

    setCounter((prev)  => prev + 1)

  }, 1200)                                      
    return ()=>{
        clearInterval(ref.current)
    }
}, [])                  

useEffect(()=>{
    if (counter === 3) {
   setCounter(0)
}
sliderRef.current.style.transform = `translateY(${counter * -300}px)`
if (window.innerWidth <= 900) {
  sliderRef.current.style.transform = `translateY(${counter * -200}px)`
}






}, [counter])





 const login =()=>{
setSignUpReady(!signUpReady)
setLoginReady(!loginReady)

 }
 const signUp =()=>{
 
  setLoginReady(!loginReady)
  setSignUpReady(!signUpReady)
   }



const googleSignInSet= async()=>{
  try {
    const result =  await signInWithPopup(auth, Provider)
    console.log(result)
   }
   catch (error) {
    console.log(error)             
   }                                   
}
                                         
                                          
  const {data, isLoading, refetch} =  useQuery("login", googleSignInSet, {enabled: false})                                              


const googleSignIn=()=>{                           

refetch()
                                         
  }



  const schema = yup.object().shape({
username: yup.string("Username must be in letters").required("*Required"),
password: yup.string().min(5).max(12).required("*Required")

  })
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const postRef = collection(db, "UserLogin")
 
const formSubmission= async (data)=>{
addDoc(postRef, {
username: data?.username,
password: data?.password
})
}


return (
<>
<div className="navigateLogin" id="loginPage">

< div ref={navigateSliderRef} className="navigateSlider">
 {!showLogin &&
 (
  <>
<div className="pageWelcomeNote">              
<h1 >The mights of the world is never surreal until it becomes reality</h1>
<h1>With Travify, pictures and places becomes reality.....</h1>

</div>
 </>                               
 )
 }
                                

<div className="travifyOffers">
<div ref={sliderRef} className="slider">
    <div className="sliderItem">Having first-hand experience of cultural diversity</div>
    <div className="sliderItem">Exploring the world and meeting people</div>
    <div className="sliderItem">Creating a network of people who share similar perspectives, goals and visions about business and other facets of life</div>
</div>

</div>


{ 
showLogin &&
 (
  <>
<div className="style_center"></div>
<div className="login_signup">


<div className="logsig"> 
  <span onClick={login} className={loginReady && 'active' }>Login</span>
  <span onClick={signUp} className={signUpReady && 'active'}>SignUp</span>
</div>
                                        

<div className="login_signup_content">  

<div className="login_signup_slider">                             

<div style={{display: loginReady ?'block': 'none'}} className="infoBox loginBox">                                                 
  <form onSubmit={handleSubmit(formSubmission)}>                          
  <label> <h1>Username</h1> <input type="text" placeholder="Username...." {...register("username")}/> 
  <i className="fas fa-user"></i>
  <p className="formError">{errors.username?.message}</p>
  </label>
  <label> <h1>Password</h1> <input type="password" placeholder="Password...." {...register("password")}/> 
  <i className="fas fa-lock"></i>
  <p className="formError">{errors.password?.message}</p>
  </label>

 <a style={{display: 'block'}}>Forgot Password?</a>       
  <div> <input type="submit" value={'Sign In'}/></div>
  <button className="googleSignIn" onClick={googleSignIn}>Sign In with Google</button>
  </form>
</div>


<div className="infoBox signupBox" style={{display: !loginReady ?'block': 'none'}}>
  <form>                                
<label> <h1>Full Name</h1> <input type="text" placeholder="Full Name...."/></label>
  <label> <h1>Email</h1> <input type="email" placeholder="Password...."/> </label>
  <label> <h1>Password</h1> <input type="password" placeholder="Password...."/> </label>
  <label> <h1>Confirm Password</h1> <input type="password" placeholder="Confirm Password...."/> </label>
  <div> <input type="submit" value={'Sign Up'}/></div>
  </form>
</div>


</div>

</div>



</div>
<div className="loader" style={{display: isLoading ? 'block': 'none'}}></div>

</>
)
}

</div>

</div>
</>
)


}