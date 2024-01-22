import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	status: false,
	userData: null,
	posts: [],
	loading: true
}

const authSlice = createSlice({
	name: "Authenticate",
	initialState,
	reducers: {
		login: (state, action) => {
			state.status = true,
				state.userData = action.payload
		},
		logout: (state) => {
			state.status = false,
				state.userData = null
		},
		setPosts: (state, action) => {
			state.posts=action.payload
		},
		setLoading: (state,action) => {
			state.loading = action.payload
		}
	}
})

export default authSlice.reducer;
export const { login, logout, setPosts,setLoading } = authSlice.actions