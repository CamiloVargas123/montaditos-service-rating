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
        <Typography fontSize={"60px"} lineHeight={0.9}>100</Typography>
        <Stack direction={"row"} alignItems={"start"}>
          <Typography>Montaditos</Typography>
          <Typography component={"span"} fontSize={"8px"}>®</Typography>
        </Stack>
      </Stack>
      <Typography fontSize={"12px"}>/ Cervecería /</Typography>
    </ContainerInfo>
  )
}