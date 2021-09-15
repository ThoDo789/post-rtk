import React, { useEffect, useState } from 'react'
import {useForm} from "react-hook-form"
import { useSelector,useDispatch } from "react-redux";
import { addNewPost, postSelector, updatePost } from "../features/Posts/PostSlice";
import{displayModalEdit,actionSelector} from "../features/Actions/ActionSlice"

const PostEditModals = () => {
  const dispatch = useDispatch();
  const {isShowModalEdit} = useSelector(actionSelector)
  console.log(isShowModalEdit)
  const {item,id} = useSelector(postSelector)
  const [post,setPost] = useState(item)

  useEffect(()=>{
    
    setPost(item)
    
},[item,displayModalEdit])
  const {handleSubmit, error, register} = useForm()
 
  const handleReset =()=>{

    dispatch(displayModalEdit())
    
  }
  const onSubmit =(data)=>{
    console.log(data,"hdhdhd")
    dispatch(updatePost({data,id}))
    handleReset()

      
  }


  return (
    <>
     
 <div className={`absolute top-0 left-0 bottom-0 right-0 bg-gray-500 bg-opacity-75  justify-center items-center ${!isShowModalEdit?"hidden":"flex"}`}>
  <div id="card_panel" className="main-modal fixed md:w-full sm:w-full inset-0 z-50 overflow-hidden flex justify-center items-center">
        <div className="modal-container bg-white  mx-auto  rounded-xl z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
                <div className="flex justify-between items-center pb-3">
                    <p className="text-2xl font-bold text-gray-500">Header</p>
                    <div id="card_close" className={`modal-close cursor-pointer z-50 `}
                    onClick={handleReset}
                    >
                        <svg className="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                        </svg>
                    </div>
                </div>
                <div className="my-5 mr-5 ml-5 flex justify-center ">
                  {isShowModalEdit&& post &&<form className="w-full flex flex-col justify-center "
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="md-12 w-full py-2 mt-1">
                    <label htmlFor="title">Title</label>
                    <input
                    id="title"
                   
                    className="w-full outline-none rounded-md border border-darken-1 h-10 px-2 "
                    required
                    {...register('title')}
                    defaultValue={post[0].title}
                    />
                    </div>
                    <div className="md-12 w-full py-2 mt-1">
                    <label htmlFor="title">Description</label>
                    <textarea
                    id="title"
                    max-rows="2"
                   
                    max-row="3"
                   
                    className="w-full outline-none rounded-md border border-darken-1 h-10 px-2 "
                    required
                    {...register('description')}
                    defaultValue={post[0].description}
                    />
                    </div>
                    <div className="md-12 w-full py-2 mt-1">
                    <label htmlFor="title">Url</label>
                    <input
               
                    className="w-full outline-none rounded-md border border-darken-1 h-10 px-2 "
                    {...register('url')}
                    required
                    defaultValue={post[0].url}
                    />
                    </div>
                    <div className="md-12 w-full py-2 mt-1">
                    <label htmlFor="title">Progress</label>
                    <select
                    id="title"
                
                    className="w-full outline-none rounded-md border border-darken-1 h-10 px-2 "
                    {...register('status')}
                    >
                      <option value="TO LEARN">To learn</option>
                      <option value="LEARNING">Learning</option>
                      <option value="LEARNED">Learned</option>
                    </select>
                    </div>
                   <div className="flex justify-end pt-2  ">
                  <button className="px-3 py-2 bg-red-400 rounded-md outline-none hover:bg-red-500 text-white transition transition-opacity mr-1"
                  onClick={handleReset}
                 
                  defaultValue={post[0].status}
                  
                  >Cancel</button>
                  <button className="px-3 py-2 bg-green-400 rounded-md outline-none hover:bg-green-500 text-white transition transition-opacity"
                  type="submit"
 
                  >Edit</button>
                </div>
                  </form>}
                </div>
                
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default PostEditModals
