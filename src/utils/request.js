import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'


// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 10000 // request timeout
})

service.interceptors.request.use(
    config => {  
      config.headers = {
        'Content-Type': 'application/json'
      }
    if (getToken() != undefined) {
        // let each request carry token
        config.headers['Authorization'] = 'Bearer ' + getToken()
      }
      config.data = JSON.stringify(config.data);
      return config
    },
    error => {
      // do something with request error
      console.log(error) // for debug
      return Promise.reject(error)
    }
)


// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
    */
  
    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
      console.log("response232");
      console.log(response.data.msg);      
      return response.data
    },
    error => {
      console.log("errdddd")
      if (error.message === 'Network Error') {        
        return
      }
      console.log('err' + error) // for debug
      return Promise.reject(error)
    }
  )
  
  export default service
  