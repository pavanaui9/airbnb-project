import { DiamondSharp } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useContext } from "react";
import { UserContext } from "../../../pages/_app";
import Logo from "../../Logo";

const DesktopNav = () => {
  const checkLogin = useContext(UserContext);
  return (
    <AppBar position="sticky" sx={{ top: 0 }}>
      <Toolbar>
        {/* Logo stays on the left, rest goes to the right */}

        <Box sx={{ flexGrow: 1 }}>
          <Logo />
        </Box>

        {checkLogin?.isLoggedIn ? (
          <Toolbar sx={{ gap: 2 }}>
            <Link href="/profile" passHref>
              <Button
                aria-label="account of current user"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {/* Button */}
                <Avatar>JD</Avatar>
              </Button>
            </Link>
            <Button
              aria-label="log out"
              variant="contained"
              onClick={() => {
                checkLogin?.setIsLoggedIn(false);
              }}
            >
              Log Out
            </Button>
          </Toolbar>
        ) : (
          <Toolbar sx={{ gap: 2 }}>
            <Button aria-label="Register" variant="contained">
              Register
            </Button>
            <Button
              aria-label="Log in"
              sx={{
                color: "secondary.contrastText",
                borderColor: "secondary.contrastText",
                "&:hover": {
                  color: "secondary.contrastText",
                  borderColor: "secondary.contrastText",
                  backgroundColor: "primary.main.",
                },
              }}
              variant="outlined"
              onClick={() => {
                checkLogin?.setIsLoggedIn(true);
              }}
            >
              Login
            </Button>
          </Toolbar>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default DesktopNav;
