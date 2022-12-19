import React, { useEffect, useState } from 'react'
import FetchData  from './fetchData'
import axios from "axios"
import LoadingSkeleton from './skeleton'
import { Box, Select } from '@chakra-ui/react'


const Fetchproducts = () => {
const [data,setData] = useState([]);
const [sort,setsort]=useState(true)


const getdata=()=>{
  axios.get(`https://adorable-pear-earrings.cyclic.app/hotel`).then((res)=>setData(res.data))
  }


  useEffect(()=>{
if(!data[0])getdata()

console.log(data)
  },[sort])

const sortingFunc=(e)=>{
const val=e.target.value
const compare=(a,b)=>{
let k=a.hotelFees
k=k.split(" ")[1]
k=Number(k.split(",").join(""))

let l=b.hotelFees
l=l.split(" ")[1]
l=Number(l.split(",").join(""))

if(l>k){
  if(val=="high"){
    return 1
  }else{
    return -1
  }
}else{
  if(val=="high"){
    return -1
  }else{
    return 1
  }
}
}


  let newdata=data.sort((a,b)=>{
    return (compare(a,b))
  })
 setData(newdata)
 setsort(!sort)

}

  return (
    <div>
      {
       !data[0] && <LoadingSkeleton/>
      }
       <Box margin="10px" flex="1">
            <Select onChange={sortingFunc} placeholder='Recomended' size='lg'>
                <option value="high">Price:High to low</option>
                <option value="low">Price:low to High</option>
                </Select>
            </Box>

      {data[0] && data.map((ele)=>(
      <FetchData  key={ele._id} ele={ele}/>
      ))}
      
    </div>
  )
}

export default Fetchproducts