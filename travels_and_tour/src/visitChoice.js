import tt3 from './images/tt3.webp';
import {touristCenterDetails} from './touristCenters'
import {useContext, useEffect, useState} from 'react'
import {AppContext} from './App'
import fs from 'fs'

console.log(fs)
export const VisitChoice = () => {




return (
<>

<div className="places">

{ 
     touristCenterDetails.center.map((centers) => 
        
    

    
 <div className='placesToVisit'>          
<img src={centers.touristCenterImage} alt="AngkorWat"  height={130}/>
<h2 className="touristCenter">{centers.touristCenterName}</h2>
<div className='location'><i className='fas fa-location'> </i> <h3>{centers.touristCountry}</h3></div>
                                                 
<hr></hr>                              



  
<div className='priceSec'>  

  <div className='crlx'>
    <span>CULTURAL</span>  <span> RELAX <button>+1</button> </span> 
  </div> 

  <h2>${centers.touristPrice}</h2>

</div>

<hr></hr>

<h3 className='aboutTC'>
    {centers.aboutTouristCenter}
 </h3>
 <button className='details'>Details</button>
</div>


     
)

} 



</div>


 
 

</>

)


}