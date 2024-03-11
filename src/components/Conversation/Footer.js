import { useTheme, styled } from "@mui/material/styles";
import { Box, IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import { PaperPlaneTilt, Paperclip, SmileyWink, } from "phosphor-react";
import React from "react";

const StyledInput = styled(TextField)(({ theme }) => ({
	"& .MuiInputBase-input": {
		paddingTop: "12px",
		paddingBottom: "12px",
	},
}));

const Footer = () => {
	const theme = useTheme();
	return (
		< Box
			p={2}
			sx={{
				width: "100%",
				backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
				boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
			}}>
			<Stack direction="row" alignItems={"center"} spacing={3}>
				<StyledInput fullWidth placeholder="Message..." variant="filled" InputProps={{
					disableUnderline: true,
					startAdornment: <InputAdornment>
						<IconButton>
							<Paperclip />
						</IconButton>
					</InputAdornment>,
					endAdornment: <InputAdornment>
						<IconButton>
							<SmileyWink />
						</IconButton>
					</InputAdornment>
				}} />
				<Box sx={{ height: 48, width: 48, backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
					<Stack sx={{ height: "100%", width: "100%" }} alignItems="center" justifyContent="center">
						<IconButton>
							<PaperPlaneTilt color="#fff" />
						</IconButton>
					</Stack>
				</Box>
			</Stack>
		</Box >
	)
}

export default Footer