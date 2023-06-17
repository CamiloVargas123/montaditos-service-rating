import { Stack, Typography, styled } from "@mui/material";

const ContainerInfo = styled(Stack)(({ theme }) => ({
  color: "white",
  backgroundColor: theme.palette.primary.main,
  padding: '2px 60px',
  borderBottomLeftRadius: '30px',
  borderBottomRightRadius: '30px',
  margin: "0 60px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 4
}));

export default function Logo() {
  return (
    <ContainerInfo>
      <Stack alignItems={"center"}>
        <Typography fontSize={"5rem"} lineHeight={0.9}>100</Typography>
        <Stack direction={"row"} alignItems={"start"}>
          <Typography fontSize={"2rem"}>Montaditos</Typography>
          <Typography component={"span"} fontSize={".8rem"} lineHeight={"2rem"}>®</Typography>
        </Stack>
      </Stack>
      <Typography fontSize={".8rem"}>/ Cervecería /</Typography>
    </ContainerInfo>
  )
}