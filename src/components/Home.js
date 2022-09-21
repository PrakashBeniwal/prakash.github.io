// import React from 'react'
import github from '../img/github.png'
import instagram from '../img/instagram.png'
import linkedin from '../img/linkedin.png'
import boy from '../img/boy.png'

import vector1 from '../img/Vector1.png'
import vector2 from '../img/Vector2.png'

export const Home = () => {

    return (
        <div  > 

            <div className='intro'> 
            <div className='left'>
            <span style={{fontSize:'50px',color:'black'}}>Hy! I Am</span>
            <span style={{fontSize:'50px',color:'orange'}}>Prakash Beniwal</span>
            <span>Hi i am web designer i can make a beautiful website for you</span>
<button type="button" style={{color:'black',backgroundColor:'orange',margin:'20px',borderRadius:'20px'}} className="btn ">Hire me</button>
       <div style={{marginTop:'50px'}}>
       <img src={github} style={{transform:'scale(0.5)'}} class="img-fluid" alt="Responsive "></img>
       <img src={instagram} style={{transform:'scale(0.5)'}} class="img-fluid" alt="Responsive "></img>
       <img src={linkedin} style={{transform:'scale(0.5)'}} class="img-fluid" alt="Responsive "></img>
        </div>

</div> 

<div  className="right" >
       <img src={vector1}   alt="Responsive "></img>
       <img src={vector2}   alt="Responsive "></img>
       <img src={boy}    alt="Responsive "></img>
       {/* <img src={glasses}  style={{float:'right',margin:'10px'}}  className="img-fluid" alt="Responsive image"></img> */}
       {/* <img src={imoji}  style={{float:'right',margin:'10px'}} className="img-fluid" alt="Responsive image"></img> */}
       </div>
           
           
        </div>
        </div>
    )
}

