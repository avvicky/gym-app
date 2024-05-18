import React from "react";
import { Stack, Typography } from "@mui/material";

import Loader from "./Loader";

const ExerciseInstructions = ({ exerciseDetail }) => {
  const { instructions } = exerciseDetail;
  return (
    <Stack
      gap="30px"
      sx={{
        flexDirection: { lg: "column" },
        p: "20px",
        alignItems: "flex-start",
      }}
    >
      <Typography variant="h3">Instructions</Typography>
      {instructions ? (
        instructions.map((instruction, index) => (
          <Stack
            sx={{
              flexDirection: { lg: "column" },
              px: "40px",
              alignItems: "flex-start",
            }}
          >
            <Typography
              key={instruction}
              textTransform="capitalize"
              variant="h5"
            >
              {index + 1 + " " + instruction}
            </Typography>
          </Stack>
        ))
      ) : (
        <Loader />
      )}
    </Stack>
  );
};

export default ExerciseInstructions;
