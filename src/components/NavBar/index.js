import { AppBar, Avatar, IconButton, Tooltip } from "@mui/material";
import { Box, Container } from "@mui/system";

import Logo from "../../assets/Logo.jpg";
import UsrImg from "../../assets/user_img.jpeg";

const NavBar = () => {
  return (
    <AppBar style={{ backgroundColor: "#50bde4" }} position="static">
      <Container maxWidth="xl">
        <Box sx={{ height: 50, flexGrow: 0 }}>
          <a href="/Jobs">
            <Box
              component="img"
              sx={{
                height: 50,
                width: 350,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="The house from the offer."
              src={Logo}
            />
          </a>
          
          <Tooltip style={{ float: "right" }} title="Open settings">
            <a href="/Profile">
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src={UsrImg}
                />
              </IconButton>
            </a>
          </Tooltip>
        </Box>
      </Container>
    </AppBar>
  );
};

export default NavBar;
