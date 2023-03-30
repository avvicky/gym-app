import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" sx={{ alignItems: "center" }} px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography>
          Devloped By
          <a
            href="https://www.linkedin.com/in/vignesh-mernstack/"
            className="footer-img"
          >
            Vignesh Arumugam
          </a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
