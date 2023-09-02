import React, { useState } from 'react';
import './App.css';
import {SubHeader} from './header';
import {Navigate} from './navigate';
import {createContext} from 'react'
import { VisitChoice } from './visitChoice';
import {QueryClient, QueryClientProvider} from 'react-query'
import {auth} from './config'
import {useAuthState} from 'react-firebase-hooks/auth'



export const AppContext = createContext()
const client = new QueryClient()


function App() {
const [showLogin, setShowLogin] = useState(false)
const [user] = useAuthState(auth)

  return (
   <>
<QueryClientProvider client={client}>
<AppContext.Provider value={{showLogin, setShowLogin}}>
   <div><SubHeader/></div>
   
  {!user && <div><Navigate /></div> }
   <div><VisitChoice /></div>
</AppContext.Provider>
  </QueryClientProvider>

   </> 
  );
}

export default App;
