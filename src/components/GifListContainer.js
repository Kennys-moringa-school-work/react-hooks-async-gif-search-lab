import React, { useEffect, useState } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

const GifListContainer = () => {
  const [data,setData] = useState([])

   function handleSubmit(query){
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dNAbt1wxUe83AdAmXLpzWkN8dIvsZDow&rating=g`)
    .then(res => res.json())
    .then(gifs => setData(gifs.data.slice(0,3)))
   }
    
 

  return (
    <div>
      <GifSearch handleSubmit = {handleSubmit}/>
      <GifList data={data}/>
    </div>
  )
}

export default GifListContainer