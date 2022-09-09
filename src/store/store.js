import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './counterReducer'
 
const store = configureStore({
    reducer: rootReducer
})
 
 
export default store