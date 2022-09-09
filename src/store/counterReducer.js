import { combineReducers } from '@reduxjs/toolkit'
import counter from './counterSlice.js'

const rootReducer = combineReducers({
    counterRduc: counter.reducer
})
 
export default rootReducer