import React from 'react'
import {useForm} from "react-hook-form"
import { useSelector,useDispatch } from "react-redux";
import { addNewPost } from "../features/Posts/PostSlice";
import{displayModal,actionSelector} from "../features/Actions/ActionSlice"

const PostAddModals = () => {
  const dispatch = useDispatch();
  const {isShowModal} = useSelector(actionSelector)
  const {handleSubmit, error, register,} = useForm()
  const handleReset =()=>{

    dispatch(displayModal())
    
  }
  const onSubmit =(data)=>{
    console.log(data)
    dispatch(addNewPost(data))
    handleReset()
      
  }


  return (
    <>
     
 <div className={`absolute top-0 left-0 bottom-0 right-0 bg-gray-500 bg-opacity-75  justify-center items-center ${!isShowModal?"hidden":"flex"}`}>
<div id="card_panel" className="main-modal fixed md:w-full sm:w-full inset-0 z-50 overflow-hidden flex justify-center items-center">
        <div className="modal-container bg-white  mx-auto  rounded-xl z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
                <div className="flex justify-between items-center pb-3">
                    <p className="text-2xl font-bold text-gray-500">Header</p>
                    <div id="card_close" className={`modal-close cursor-pointer z-50 `}
                  onClick={()=>(dispatch(displayModal()))}
                    
                    >
                        <svg className="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                        </svg>
                    </div>
                </div>
                <div className="my-5 mr-5 ml-5 flex justify-center ">
                  <form className="w-full flex flex-col justify-center "
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="md-12 w-full py-2 mt-1">
                    <label htmlFor="title">Title</label>
                    <input
                    id="title"
                   
                    className="w-full outline-none rounded-md border border-darken-1 h-10 px-2 "
                    required
                    {...register('title')}
                    />
                    </div>
                    <div className="md-12 w-full py-2 mt-1">
                    <label htmlFor="title">Description</label>
                    <textarea
                    id="title"
                    max-rows="2"
                    // cols="3"
                    max-row="3"
                   
                    className="w-full outline-none rounded-md border border-darken-1 h-10 px-2 "
                    required
                    {...register('description')}

                    />
                    </div>
                    <div className="md-12 w-full py-2 mt-1">
                    <label htmlFor="title">Url</label>
                    <input
                    id="title"
                    // type="text"
                    className="w-full outline-none rounded-md border border-darken-1 h-10 px-2 "
                    {...register('url')}
                    required

                    />
                    </div>
                
                   <div className="flex justify-end pt-2  ">
                  <button className="px-3 py-2 bg-red-400 rounded-md outline-none hover:bg-red-500 text-white transition transition-opacity mr-1"
                  onClick={handleReset}
                 
                  
                  
                  >Cancel</button>
                  <button className="px-3 py-2 bg-green-400 rounded-md outline-none hover:bg-green-500 text-white transition transition-opacity"
                  type="submit"
 
                  >Add</button>
                </div>
                  </form>
                </div>
                
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default PostAddModals
