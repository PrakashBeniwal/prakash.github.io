import React, { useState } from 'react'

const Home = () => {

const [result,setResult]=useState(0)
const [calculate,setCalculate]=useState({
    distance:'1',
    time:'1'
});
    

   const onchange=(e)=>{
      setCalculate({...calculate,[e.target.name]:[e.target.value]})
    }
    
    const submit=(e)=>{
      e.preventDefault();
        setResult((0.001*60*calculate.distance)/calculate.time);
        
       
   }


  return (
    <>
    {/* <div className='container my-5'>
<form>
  <div className="mb-3">
     <label htmlFor="Distance" className="form-label">Distance</label>
    <input type="number" className="form-control" id="distance" name='distance'  onChange={onchange} aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="time" className="form-label">Time</label>
    <input type="number" className="form-control" id="time" name='time'  onChange={onchange} />
  </div>
  <div className="mb-3">
    <label htmlFor="speed" className="form-label">speed</label>
    <input type="number" className="form-control" id="number" name='speed' value={result} onChange={onchange} />
  </div>
  <button type="submit" className="btn btn-primary" onClick={submit} >Calculate</button>
</form>

<div className="mb-3">
    <label htmlFor="result" className="form-label">result</label>
    <input type="number" className="form-control" id="number" name='result' value={result}  onChange={submit} />
    </div>
  </div>  */}

  <div className='container'>
  <div style={{margin:'50px'}}>
 
 <label classNameName='mx-3' htmlhtmlFor="quantity"><h1>speed</h1></label>
 <input style={{borderRadius:'30px'}} className='mx-3' type="number" name="speed" value={result}></input>
 </div>
 <div style={{margin:'50px'}}>
 
 <label classNameName='mx-3' htmlhtmlFor="quantity"><h1>distance</h1></label>
 <input style={{borderRadius:'30px'}} className='mx-3'  type="number" name="distance" onChange={onchange}  ></input>
 </div>
 <div style={{margin:'50px'}}>
 
 <label classNameName='mx-3' htmlhtmlFor="quantity"><h1>time</h1></label>
 <input style={{borderRadius:'30px'}} className='mx-3' type="number" name="time"  onChange={onchange} ></input>
 </div> 
 <button style={{margin:'50px'}} type="submit" className="btn btn-primary" onClick={submit} >Calculate</button>

 </div>
    </>
  )
}



export default Home;