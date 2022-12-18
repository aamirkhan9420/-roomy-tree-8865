import React, { useEffect, useState } from 'react'
import FetchData  from './fetchData'
import axios from "axios"
import LoadingSkeleton from './skeleton'
import { Box, Select } from '@chakra-ui/react'


const Fetchproducts = () => {
const [data,setData] = useState([]);
const [sort,setsort]=useState(1)


const getdata=()=>{
  axios.get(`https://adorable-pear-earrings.cyclic.app/hotel?sort=${sort}`).then((res)=>setData(res.data))
  }


  useEffect(()=>{
getdata()
  },[])

const sortingFunc=(e)=>{
 setsort(e.target.value)
}

 
console.log("sort",sort)


  return (
    <div>
      {
       !data[0] && <LoadingSkeleton/>
      }
       <Box margin="10px" flex="1">
            <Select onChange={sortingFunc} placeholder='Recomended' size='lg'>
                <option value={-1}>Price:High to low</option>
                <option value={1}>Price:low to High</option>
                </Select>
            </Box>

      {data[0] && data.map((ele)=>(
      <FetchData  key={ele._id} ele={ele}/>
      ))}
      
    </div>
  )
}

export default Fetchproducts