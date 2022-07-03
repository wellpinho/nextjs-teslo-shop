import { Box, IconButton, Typography } from "@mui/material";
import { AddCircleOutline, RemoveCircleOutlined } from "@mui/icons-material";

interface IProps {}

export function ItemCounter({}: IProps) {
  return (
    <Box display="flex" alignItems="center">
      <IconButton>
        <RemoveCircleOutlined />
      </IconButton>

      <Typography sx={{ width: 40, textAlign: "center" }}>1</Typography>
      <IconButton>
        <AddCircleOutline />
      </IconButton>
    </Box>
  );
}
