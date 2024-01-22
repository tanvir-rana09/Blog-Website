import { configureStore } from "@reduxjs/toolkit";
import auth  from './slice'

export const store = configureStore({
	reducer:auth
})