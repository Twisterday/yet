import React from "react";
import {
	Avatar,
	Box,
	Divider,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DotsThreeOutlineVertical, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";
import { faker } from "@faker-js/faker";
import StyledBadge from "../StyledBadge";
// import { dispatch } from "../../redux/store";
import { ToggleSideBar } from "../../redux/slices/app";
import { useDispatch } from "react-redux";

const Header = () => {
	const theme = useTheme();
	const dispatch = useDispatch();
	return (
		<Box p={2} sx={{
			width: "100%",
			backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
			boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
		}}>

			<Stack
				alignItems={"center"}
				direction="row"
				justifyContent={"space-between"}
				sx={{ width: "100%", height: "100%" }}>
				<Stack onClick={() => {
					//
					dispatch(ToggleSideBar());
				}} direction={"row"} spacing={2}>
					<Box>
						<StyledBadge
							overlap="circular"
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "right",
							}}
							variant="dot">
							<Avatar
								alt={faker.name.fullName()}
								src={faker.image.avatar} />
						</StyledBadge>
					</Box>
					<Stack spacing={0.2}>
						<Typography variant="subtitle2">
							{faker.name.fullName()}
						</Typography>
						<Typography variant="caption">
							Online
						</Typography>
					</Stack>
				</Stack>
				<Stack direction="row" alignItems={"center"} spacing={3}>
					<IconButton>
						<VideoCamera />
					</IconButton>
					<IconButton>
						<Phone />
					</IconButton>
					<IconButton>
						<MagnifyingGlass />
					</IconButton>
					<Divider orientation="vertical" flexItem />
					<IconButton>
						<DotsThreeOutlineVertical />
					</IconButton>
				</Stack>

			</Stack>
		</Box >
	)
}

export default Header