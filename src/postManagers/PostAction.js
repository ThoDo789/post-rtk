import React from 'react'
import { useDispatch } from "react-redux";
import { displayModalEdit } from '../features/Actions/ActionSlice';
import { deletePost, getId } from '../features/Posts/PostSlice';

const PostAction = ({itemId}) => {
  const dispatch = useDispatch()
  const handleDelete =()=>{
       
        if(window.confirm('Are you sure delete ?')){
          console.log(itemId)
            dispatch(deletePost({id:itemId}))
        }
  }
  const handleEditPost =async()=>{
    await dispatch(displayModalEdit())
    await dispatch(getId(itemId))
  }
  return (
    <div className="flex justify-evenly ">
      <button className="mt-4 text-xl w-full text-white bg-red-600 py-1.5 rounded-md shadow-lg"
      onClick={handleDelete}
      >Delete</button>
      <button className="mt-4 text-xl w-full text-white bg-green-600 py-1.5 rounded-md shadow-lg"
      onClick={handleEditPost}
  
      >Edit</button>
    </div>
  )
}

export default PostAction
