import { Stack, Typography, styled } from "@mui/material";
import { Logo } from "./components";

const Bar = styled('div')(({ theme }) => ({
  width: '100%',
  height: 30,
  backgroundColor: theme.palette.primary.main,
}));

export default function Header() {
  return (
    <Stack direction={"row"} component={"header"}>
      <Logo />
      <Stack width={"100%"}>
        <Bar />
        <Typography textAlign={"end"} fontSize={"40px"} letterSpacing={2} marginRight={2}>Cuéntanos tu opinión</Typography>
      </Stack>
    </Stack>
  )
}