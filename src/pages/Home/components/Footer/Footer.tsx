import { LocationOn, Phone } from '@mui/icons-material';
import { Stack, Typography, styled } from "@mui/material";

const ImageOverlayContainer = styled('div')(() => ({
  position: 'relative',
  width: '100%',
  height: '18vh',
  backgroundImage: 'url(https://fotografias.larazon.es/clipping/cmsimages02/2022/09/05/32132660-464F-445D-B600-76932DF94D5F/98.jpg?crop=1600,900,x0,y0&width=1900&height=1069&optimize=low&format=webply)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

const Overlay = styled(Stack)(() => ({
  flexDirection: "row",
  padding: "5px 20px",
  color: "white",
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'space-between',
}));

const SeparatedBar = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: -10,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '80%',
  height: 20,
  backgroundColor: theme.palette.primary.main,
}));

export default function Footer() {

  return (
    <ImageOverlayContainer as={"footer"}>
      <Overlay>
        <SeparatedBar />
        <Stack alignItems={"center"}>
          <Stack direction={"row"} spacing={2}>
            <Stack direction={"row"} alignItems={"center"}>
              <Phone fontSize="medium" />
              <Typography fontWeight={"bold"} fontSize={"20px"}>918 654 259</Typography>
            </Stack>
            <Stack direction={"row"} alignItems={"center"}>
              <Phone fontSize="medium" />
              <Typography fontWeight={"bold"} fontSize={"20px"}>623 437706</Typography>
            </Stack>
          </Stack>
          <Typography fontWeight={"bold"} fontSize={"20px"}>www.spain.100montaditos.com/es</Typography>
        </Stack>
        <Stack alignItems={"center"} spacing={1}>
          <LocationOn fontSize="large" />
          <Typography color={"black"} fontWeight={"bold"} padding={"2px"} bgcolor={"white"} borderRadius={1}>Centro Comercial Manoteras</Typography>
          <Typography fontWeight={"bold"}>Avenida de Manoteras40LocalUC10</Typography>
        </Stack>
      </Overlay>
    </ImageOverlayContainer>
  )
}
