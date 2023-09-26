import { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../auth/firebase-auth";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";


export default function AccountMenu() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [user] = useAuthState(auth);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogOut = () => {
		setAnchorEl(null);
		signOut(auth).then(() => {
			console.log("Logged out successfully")
		}).catch((error) => console.log(error.message))
	}

	console.log( user?.email)
	return (
		<>
			<Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
				<IconButton
					onClick={handleClick}
					size="small"
          sx={	{filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0.32))"}}
					aria-controls={open ? "account-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={open ? "true" : undefined}
				>
					<span className="hidden md:block rounded-full cursor-pointer border border-[#D9D9D9]  hover:border-[#84BD00] outline-none h-11 px-6 leading-[44px]">
						{user?.email}
					</span>
				</IconButton>
			</Box>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: "visible",
						filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
						mt: 1.5,
						"& .MuiAvatar-root": {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						"&:before": {
							content: '""',
							display: "block",
							position: "absolute",
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: "background.paper",
							transform: "translateY(-50%) rotate(45deg)",
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			>
				<Link to="/account">
				<MenuItem onClick={handleClose}>
				<Avatar /> My account
				</MenuItem>
				</Link>
				<MenuItem onClick={handleLogOut}>
					<Avatar /> Log Out
				</MenuItem>
			</Menu>
		</>
	);
}