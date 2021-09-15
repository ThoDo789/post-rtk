import React, {  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector, fetchUserByToken, clearState } from '../features/User/UserSlice';
import { postSelector,getAllPost } from '../features/Posts/PostSlice';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';
import PostList from '../postManagers/PostList';
import Logout from './Logout';
import PostAddModals from '../postManagers/PostAddModals';
import PostEditModals from '../postManagers/PostEditModals';

const Dashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isFetching, isError,isSuccess } = useSelector(userSelector);
  const { user } = useSelector(userSelector);
  const { posts } = useSelector(postSelector);
  console.log(posts)
  console.log(user)
  
  useEffect(() => {
    dispatch(fetchUserByToken({ token: localStorage.getItem('token') }));
  }, [dispatch]); 

  useEffect(() => {
    if(isSuccess){
      dispatch(getAllPost({ token: localStorage.getItem('token') }));
    }
  }, [isSuccess,dispatch]); 

  useEffect(() => {
    if (isError) {
      dispatch(clearState());
      history.push('/login');
    }
  }, [isError]);

  

  return (
    <div className="container mx-auto relative">
      {isFetching ? (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      ) : (
        <>
          <Logout/>
          <PostList/>
          <PostAddModals/>
          <PostEditModals/>
        </>
      )}
    </div>
  );
};

export default Dashboard;
