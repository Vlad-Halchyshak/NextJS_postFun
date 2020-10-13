import { getPostAPI } from "../pages/api/hello";


const initialState = {
  data: [],
  
  /* newText: '', */
};

/* export const addPagePost = () => ({ type: "ADD_POSTS" });

export const PostChangeActionCreator = (text) => ({type: "RENEW_POST", Postnew: text })
 */
export const pagePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        data: action.payload,
      };
    case "SET_ONE_POST":
      return {
        ...state,
        data: action.data,
      };

    /*  case "ADD_POSTS": {
      let newPost = {
        title: "some text",
        body: state.newText,
      };
      return {
        ...state,
        data: [{ ...state.data, newPost }],
      };
    }
    case "RENEW_POST": {
      return {
        ...state,
        newText: action.Postnew,
      };
    } */
    default:
      return state;
  }
   
  
};


export const setPagePost = (data) => ({ type: "SET_POSTS", payload: data })

export const setOnePage = (data) => ({ type: "SET_ONE_POST", data });


export const getPagePost = () => async (dispatch) => {
  const data = await getPostAPI.fetchData()
  dispatch (setPagePost(data))
}
export const addPagePostThunk = () => async (dispatch) => {
  const data = await getPostAPI.postData()
  dispatch(addPagePost(data));
}

export const getPost = () => async (dispatch) => {
  const data = await getPostAPI.getPostYeah( );
  dispatch(setOnePage(data));
}

