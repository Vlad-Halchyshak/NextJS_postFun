
import axios from 'axios'

 

export const getPostAPI = {
  fetchData() {
    return axios
      .get("https://simple-blog-api.crew.red/posts")
      .then((response) => response.data);
  },
  
 
 }