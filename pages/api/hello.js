// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/* export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
 */
import axios from 'axios'

 

export const getPostAPI = {
  fetchData() {
    return axios
      .get("https://simple-blog-api.crew.red/posts")
      .then((response) => response.data);
  },
  
  postData() {
    return axios
      .post("https://simple-blog-api.crew.red/posts")
      .then((response) => response.data);
  },
  getPostYeah(data) {
    return axios
      .get("https://simple-blog-api.crew.red/posts/15?_embed=comments" + data.id)
      .then((response) => response.data);
  }
 }