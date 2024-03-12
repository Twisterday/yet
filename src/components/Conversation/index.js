import React from "react";
import { Box, Stack } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

const Conversation = () => {
	return (
		<Stack
			height={"100%"}
			maxHeight={"100vh"}
			width={"auto"}>
			{/* Chat header */}
			<Header />
			{/* Msg */}
			< Box width={"100%"} sx={{
				flexGrow: 1, overflowY: 'auto',
				height: '100%',
				'&::-webkit-scrollbar-track': {
					'-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.3)',
					'border-radius': '10px',
					'background-color': 'transparent',

				},
				'&::-webkit-scrollbar': {
					'width': '12px',
					'background-color': 'transparent',
				},
				'&::-webkit-scrollbar-thumb': {
					'border-radius': '10px',
					'-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,.3)',
					'background-color': '#555',
				},
			}}>
				< Message />
			</Box >
			{/* Chat footer */}
			<Footer />
		</Stack >
	)
}

export default Conversation; 