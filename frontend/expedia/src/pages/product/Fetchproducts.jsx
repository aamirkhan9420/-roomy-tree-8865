import React, { useEffect, useState } from 'react'
import FetchData  from './fetchData'
import axios from "axios"



const Fetchproducts = () => {
const [data,setData] = useState([]);
 const [loading,setLoading] = useState(true);

const getdata=()=>{
  axios.get("https://adorable-pear-earrings.cyclic.app/hotel").then((res)=>setData(res.data)).then(setLoading(false))
  }


  useEffect(()=>{
getdata()
  },[])



 



  return (
    <div>
      {
        loading && <h2>Loading...</h2>
      }

      {data[0] && data.map((ele)=>(
      <FetchData key={ele._id} ele={ele}/>
      ))}
      
    </div>
  )
}

export default Fetchproducts