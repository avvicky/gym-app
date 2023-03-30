import React from "react";
import { Stack } from "@mui/material";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      width="100%"
      sx={{ alignItems: "center" }}
    >
      <InfinitySpin color="gray" />
    </Stack>
  );
};

export default Loader;
