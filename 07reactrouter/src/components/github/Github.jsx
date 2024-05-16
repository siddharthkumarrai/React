import React,{useEffect, useState,} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
//     const [data, setData] = useState([])
//    useEffect(()=>{
//     fetch("https://api.github.com/users/siddharthkumarrai")
//     .then( res => res.json())
//     .then( (data) => {
//         console.log(data)
//         setData(data)
      
//     },)
//  },[])


  return (
    <div className='flex flex-wrap justify-between px-28 py-2'>
    <div>
        <h1 className='text-center mb-6 text-black text-3xl font-bold'>Github Details</h1>
        <h3>folowers : {data.followers} </h3>
        <h3>following: {data.following}</h3>
        <h3>Repository : {data.public_repos} </h3>
    </div>
    
    <img src={data.avatar_url} alt="github img" />
    </div>
    
  )
}

export default Github

export async function githubloader (){
    const res = await fetch("https://api.github.com/users/siddharthkumarrai")
    return res.json()
}