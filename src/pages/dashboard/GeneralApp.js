import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation";
import { useTheme } from "@mui/material/styles";
import Contact from "../../components/Contact";

const GeneralApp = () => {
	const theme = useTheme();
	return (
		<Stack direction={"row"} sx={{ width: "100%" }}>
			{/* Chats */}
			<Chats />
			<Box sx={{
				height: "100vh",
				width: "calc(100vw - 740px)",
				backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,
			}}>
				{/* Conversations */}
				<Conversation />
			</Box>
			{/* Contact */}
			<Contact />
		</Stack>
	);
};

export default GeneralApp;
