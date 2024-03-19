import { createSlice } from "@reduxjs/toolkit";

// //
import { dispatch } from "../store";

const initialState = {
	sideBar: {
		open: false,
		type: "CONTACT", // contast, starred, shared
	}
}

const slice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		// Toggle SideBar
		toggleSideBar(state, action) {
			state.sideBar.open = !state.sideBar.open;
		},
		updateSidebarType(state, action) {
			state.sideBar.type = action.payload.type;
		}
	}
})

//Reducer
export default slice.reducer;

//
export function ToggleSideBar() {
	return async () => {
		dispatch(slice.actions.toggleSideBar());
	}
}
export function UpdateSidebarType(type) {
	return async () => {
		dispatch(slice.actions.updateSidebarType({
			type,
		})
		);
	};
}