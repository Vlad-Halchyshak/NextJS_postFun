import { getPostAPI } from "../pages/api/hello";


const initialState = {
  data: [],
   post: [] 
  
};

 
export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        data: action.payload,
      };
    case "SET_POST":
      return {
        ...state,
        post:  action.payload ,
      };
    
    default:
      return state;
  }
   
  
};


export const setPosts = (data) => ({ type: "SET_POSTS", payload: data })

export const setPost = (post) => ({ type: "SET_POST", payload: post})



export const getPagePost = () => async (dispatch) => {
  const data = await getPostAPI.fetchData()
  dispatch(setPosts(data));
}




