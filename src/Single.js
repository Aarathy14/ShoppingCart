import React,{useState,useEffect} from 'react'
import  './Single.css'
import axios from 'axios'
import {useParams} from 'react-router-dom'

function Single() {
const [single,setSingle] = useState({})
const [finalList,setFinalList] =useState([])
const fetchData=async()=>{
    const response =await axios.get(`https://fakestoreapi.com/products/${id}`)
    setSingle(response.data)

    
}
const handleCart=()=>{
  if(finalList.includes(single)){
    alert('already in cart')
  }
  else{
    localStorage.setItem('cart',JSON.stringify([...finalList,single]))
    setFinalList([...finalList,single])
  }
}
useEffect (()=>{fetchData()},[])
const{id}=useParams();
  return (
    <div className='  d-flex justify-content-center mt-5'>
    <div>
        <img src={single.image}alt="Products" height="200" width ="200"></img>
    </div>
    <div >
        <div className=' text mx-5 mt-1 fs-4'>{single.title}</div>
        <div className=' text1 mx-5 fs-3'>{single.price}</div>
        <div className=' des mx-5 fs-5'>{single.description}</div>
   <center><button className='text-white bg-primary mt-3 btn btn-lg fw-bold fs-4 ' onClick={handleCart}>Add to Cart</button></center> 

    </div>
    
    
    
    </div>
  )
}

export default Single