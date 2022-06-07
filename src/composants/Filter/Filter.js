import React from 'react'
import { useDispatch } from 'react-redux'
import { statusPosts } from '../../JS/Actions/PostsAction'

const Filter = () => {
  const dispatch=useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(statusPosts("All"))}>All</button>
        <button onClick={()=>dispatch(statusPosts("Verified"))}>Verified</button>
        <button onClick={()=>dispatch(statusPosts("Not Verified"))}>Not Verified</button>
    </div>
  )
}

export default Filter