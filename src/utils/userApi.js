import { apiUrl } from "../features/contants/contants"

export const userApi = (payload,param)=>{
  
  let api = `${apiUrl}/auth/${param}`
  
  const dataResponse = param?
  {
    username:payload.username, 
    password:payload.password   
 } :''

  let headerResponse ={
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  }
  
}
if(payload.token){
  api = `${apiUrl}/auth`
  headerResponse ={
    headers: {
      accept: 'application/json',
      Authorization:`Bearer ${payload.token}`,
      'Content-Type': 'application/json',
    }
  }
}

return {api,dataResponse,headerResponse}

 
}