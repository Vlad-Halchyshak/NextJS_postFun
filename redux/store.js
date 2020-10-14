import  { applyMiddleware, combineReducers, createStore }  from 'redux'
import thunkMiddleware from 'redux-thunk'
import { PostReducer} from '../redux/reducers'

const rootReducer = combineReducers({
fetchedData: PostReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store