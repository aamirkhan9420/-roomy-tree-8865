import React, { useEffect, useState } from 'react'
import fetchData  from './fetchData'
function getdata(){
  return fetch("http://localhost:3000/tasks").then((res)=>{return res.json()})
}
const Fetchproducts = () => {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    handleData()
  },[])

  const handleData=async()=>{
    try{
       setLoading(true)
       const data = await getdata();
       setData(data)
       setLoading(false)
    }
    catch(err){
       setLoading(false)
       console.log(err)
    }
  }
  return (
    <div>
      {
        loading && <h2>Loading...</h2>
      }
       {
        data.map((elem)=>(<fetchData key={elem.id}  />))
       }
    </div>
  )
}

export default Fetchproducts