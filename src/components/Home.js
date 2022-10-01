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

  <div className=' text-center bg-gray-500 text-xl'>
  <div >
 
 <label className='mx-3  text-4xl ' htmlhtmlFor="quantity"><h1>Speed</h1></label>
 <input  className='mx-5 rounded px-4' type="number" name="speed" value={result}></input>
 </div>
 <div >
 
 <label className='mx-3 text-4xl' htmlhtmlFor="quantity"><h1>Distance</h1></label>
 <input  className='mx-3 rounded px-4'  type="number" name="distance" onChange={onchange}  ></input>
 </div>
 <div >
 
 <label className='mx-3 text-4xl' htmlhtmlFor="quantity"><h1>Time</h1></label>
 <input  className='mx-3 rounded px-4' type="number" name="time"  onChange={onchange} ></input>
 </div > 
 <button  type="submit" className="my-10 rounded bg-blue-700 p-3 hover:bg-blue-900 " onClick={submit} >Calculate</button>

 </div>
    </>
  )
}



export default Home;