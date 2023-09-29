import React, { useState } from 'react'

const GifSearch = ({handleSubmit}) => {
    const [query,setQuery] = useState(null)
  return (
    <div style={{marginLeft:'1060px'}} >
        <form>
            <p style={{fontSize:'120%'}}> Enter a search term</p>
            <input style={{maxWidth : '300px', borderRadius : '2px', marginTop : '2px'}} onChange={((e) => setQuery(e.target.value))}></input>
        </form>
            <button type="submit"  className='btn btn-success' onClick={() => handleSubmit(query)}>Submit </button>
    </div>
  )
}

export default GifSearch