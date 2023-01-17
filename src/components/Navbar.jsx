import {
  AppBar,
  Avatar,
  Badge,
  Input,
  InputBase,
  Menu,
  MenuItem,
  styled,
  StyledEngineProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "../assets/me.jpg";
import KebabDiningIcon from "@mui/icons-material/KebabDining";
import React, { useState } from "react";
import { Box } from "@mui/system";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Mail } from "@mui/icons-material";
const CustomToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "18px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <CustomToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", md: "block" } }}>
          SANTO
        </Typography>
        <KebabDiningIcon
          sx={{ display: { xs: "block", sm: "block", md: "none" } }}
        />
        <Search>
          <InputBase placeholder="Search Here.." />
        </Search>

        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            onClick={(e) => setOpen(true)}
            alt="Remy Sharp"
            src={Image}
            sx={{ width: 30, height: 30 }}
          />
        </Icons>
        <UserBox>
          <Avatar
            onClick={(e) => setOpen(true)}
            alt="Remy Sharp"
            src={Image}
            sx={{ width: 30, height: 30 }}
          />
          <Typography variant="span">SANTO</Typography>
        </UserBox>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>Ma account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </CustomToolbar>
    </AppBar>
  );
};

export default Navbar;
