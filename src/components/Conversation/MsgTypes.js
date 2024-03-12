import { useTheme } from "@mui/material/styles";
import { Divider, Stack, Typography, Box, Link, IconButton } from "@mui/material";
import React from "react";
import { DownloadSimple, Image } from "phosphor-react";

const DocMsg = ({ el }) => {
	const theme = useTheme();
	return (
		<Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
			<Box p={1.5} sx={{ backgroundColor: el.incoming ? theme.palette.background.paper : theme.palette.primary.main, borderRadius: 1.5, width: "max-content", boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)" }}>
				<Stack spacing={2}>
					<Stack p={2} direction="row" spacing={3} alignItems="center" sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}>
						<Image size={48} />
						<Typography>Picture.png</Typography>
						<IconButton>
							<DownloadSimple />
						</IconButton>
					</Stack>
					<Typography variant="body2" sx={{ color: el.incoming ? theme.palette.text : "#fff" }}>{el.message}e</Typography>
				</Stack>
			</Box>
		</Stack>
	)
}

const LinkMsg = ({ el }) => {
	const theme = useTheme();
	return (
		<Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
			<Box sx={{ backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5, width: "max-content", boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)" }}>
				<Stack spacing={2}>
					<Stack p={2} spacing={3} sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}>
						<img src={el.preview} alt={el.message} style={{ maxHeight: 210, borderRadius: "10px" }} />
						<Stack spacing={2}>
							<Typography variant="subtitle2">
								My GitHub!
							</Typography>
							<Typography variant="subtitle2" sx={{ color: theme.palette.primary.main }} component={Link} to="https://github.com/Twisterday">
								github.com/Twisterday
							</Typography>
						</Stack>
						<Typography variant="body2" color={el.incoming ? theme.palette.text : "#fff"}>
							{el.message}
						</Typography>
					</Stack>
				</Stack>
			</Box >
		</Stack >
	)
}

const ReplyMsg = ({ el }) => {
	const theme = useTheme();
	return (
		<Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
			<Box p={1.5} sx={{ backgroundColor: el.incoming ? theme.palette.background.paper : theme.palette.primary.main, borderRadius: 1.5, width: "max-content", boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)" }}>
				<Stack spacing={2}>
					<Stack p={2} direction="column" spacing={3} alignItems="center" sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}>
						<Typography variant="body2" color={theme.palette.text}>
							{el.message}
						</Typography>
					</Stack>
					<Typography variant="body2" color={el.incoming ? theme.palette.text : "#fff"}>
						{el.reply}
					</Typography>
				</Stack>
			</Box >
		</Stack >
	)
}

const MediaMsg = ({ el }) => {
	const theme = useTheme();
	return (
		<Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
			<Box p={1.5} sx={{ backgroundColor: el.incoming ? theme.palette.background.paper : theme.palette.primary.main, borderRadius: 1.5, width: "max-content", boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)" }}>
				<Stack spacing={1}>
					<img src={el.img} alt={el.message} style={{ maxHeight: 210, borderRadius: "10px" }} />
					<Typography variant="body2" color={el.incoming ? theme.palette.text : "#fff"}>
						{el.message}
					</Typography>
				</Stack>
			</Box>
		</Stack>
	)
}

const TextMsg = ({ el }) => {
	const theme = useTheme();
	return (
		<Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
			<Box p={1.5} sx={{ backgroundColor: el.incoming ? theme.palette.background.paper : theme.palette.primary.main, borderRadius: 1.5, width: "max-content", boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)" }}>
				<Typography variant="body2" color={el.incoming ? theme.palette.text : "#fff"}>
					{el.message}
				</Typography>
			</Box>
		</Stack>
	)
}

const TimeLine = ({ el }) => {
	const theme = useTheme();
	return <Stack direction="row" alignItems="center" justifyContent="space-between">
		<Divider width="46%" />
		<Typography variant="caption" sx={{ color: theme.palette.text }}>{el.text}</Typography>
		<Divider width="46%" />
	</Stack>
}

export { TimeLine, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg };