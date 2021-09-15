import { apiUrl } from "../features/contants/contants"

export const postApi = (payload)=>{
  
  let dataResponse = payload

  let api = `${apiUrl}/posts`

    if(payload && payload.id){
      api = `${apiUrl}/posts/${payload.id}`
      dataResponse = payload.data
    }
  const headerResponse ={
    headers: {
      accept: 'application/json',
      Authorization:`Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    }
  }

return {api,dataResponse,headerResponse}

}