import  { applyMiddleware, combineReducers, createStore }  from 'redux'
import thunkMiddleware from 'redux-thunk'
import {pagePostReducer} from '../redux/reducers'

const rootReducer = combineReducers({
fetchedData: pagePostReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store