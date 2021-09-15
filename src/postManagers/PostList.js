import React,{useEffect} from 'react'

import { useSelector,useDispatch } from "react-redux";
import {getAllPost,postSelector} from "../features/Posts/PostSlice"
import{displayModal} from "../features/Actions/ActionSlice"
import PostAction from './PostAction';
const PostList = () => {
  const dispatch = useDispatch()
  const {posts} = useSelector(postSelector)
  

  const {isLoading,isSuccess} = useSelector(postSelector)
  useEffect(() => {
    if(isSuccess){ 
      dispatch(getAllPost());
    }
}, []);
  return (
    <>
      <div className="bg-gradient-to-tr from-red-300 to-yellow-200 flex  py-10 my-2 min-h-screen md:justify-center lg:justify-start sm:justify-center ">
           
            <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0 lg:max-h-full">
            {isLoading ? (
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : null}
              {posts && posts.map((post,key)=>(
                <div className="max-w-sm bg-white px-6 pt-2 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 h-fit-content"
                key={key}
                >
                  <h3 className="text-xl font-bold text-indigo-600">{post.title}</h3>
                  <h1 className="mt-4 text-gray-800 text-3xl font-bold cursor-pointer">{post.description}</h1>
                  <div className="my-4">
                    <div className="flex space-x-1 items-center">
                      <span> 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <p>1:34:23 Minutes</p>
                    </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <p>{post.url}</p>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </span>
                    <p>{post.status}</p>
                  </div>
                  <PostAction itemId={post._id}/>
                </div>
                </div>

              )) }


            </div>
            <div className=" bottom-2 right-2 fixed  z-50 text-red-300"
            onClick={()=>dispatch(displayModal())}
            >
          
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
        </svg>
          </div>
          </div>
    </>
  )
}

export default PostList
