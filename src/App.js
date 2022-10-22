import * as React from "react";
import { Stack, Button } from "@mui/material";

export default function App() {
  const test = true;
  return (
    <>
      <Button
        sx={[
          {
            width: {
              xs: 100,
              sm: 200,
              md: 300,
              lg: 400,
              xl: 500,
            },
            m: 4,
            border: 5,
            borderColor: "secondary.main",
            "&.MuiButton-root": {
              height: "100px",
            },
          },
          test && {
            border: 10,
            borderColor: "primary.main",
          },
        ]}
        variant="contained"
      >
        Button 1
      </Button>
      <Button variant="outlined">Button 2</Button>
    </>
  );
}
